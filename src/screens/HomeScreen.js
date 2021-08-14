import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions, Alert, Vibration } from 'react-native'
import colors from '../constants/colors'
import Colors from '../constants/colors'
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    //                                  To do  🚀🚀🚀🚀🔥🔥🔥🔥
    //❌  Ask for confirmation if the user wants to reset the timer
    //❌  Notification on start of the timer
    //❌  Add functionality to set custom pomodoro and break duration using Async Storage
    //❌  Record all pomodoros with the time they started in Async Storage
    //❌  Fetch the pomodoros from Async Storage and display a productivity graph
    //❌  Vibrate at the end of pomodoro session
    //❌  Add ambient audio functionality using expo-av https://docs.expo.io/versions/latest/sdk/audio/
    //❌  Time flickers (fades in and out) when paused - (if isStart == true && isPaused ==true)
    //❌  Let app run in background
    //❌  Notification/alert after break finishes 
    //❌  Status bar color remains if the pomodoro is running in the background
    //❌  Show completed pomodoros of the day on the bottom of the screen
    //✅  Alert on the end of the timer - Close or Start Break
    //✅  Implement Start Break Screen - On Timer end - Alert to close or start another pomodoro - brought back to the pomodoro screen

    // Known issues - 
    //✅ If the user denies to take a break, then he won't be asked for a break in the next pomodoro cycle
    //✅ If the user double taps to run when not initiated, the code throws error since the refresh interval id is not defined under clear interval
    //❌ In the enter break session duration in timer duration screen, when the user clears everything, then the cursor instead of center aligning, aligns to the right

    // Suggestions - 
    // Import calendar and auto suggest pomodoros
    // 23hrs

    const deviceHeight = useWindowDimensions().height
    const deviceWidth = useWindowDimensions().width

    const initialTimeState = { m: 3, s: 60 }
    const initialBreakState = { m: 5, s: 60 }

    const [time, setTime] = useState(initialTimeState)

    const [isStart, setIsStart] = useState(false)

    const [isPaused, setIsPaused] = useState(false)

    const [isBreakSessionExecuted, setIsBreakSessionExecuted] = useState(false)

    const [numberOfTimerCyclesRun, setNumberOfTimerCyclesRun] = useState(0)
    // let numberOfTimerCyclesRun = 0;

    let updatedM = time.m, updatedS = time.s

    const startHandler = () => {
        if (updatedS % 60 == 0) {
            updatedM--
            updatedS = 60
        }
        updatedS--
        return (setTime({ m: updatedM, s: updatedS }))
    }

    const runHandler = () => {
        refreshIntervalId = setInterval(startHandler, 10)
        setIsStart(true)
        setNumberOfTimerCyclesRun(v=>v+1)
        return (
            refreshIntervalId
        )
    }

    const resetHandler = () => {
        setIsStart(false)
        setIsPaused(false)
        return (
            clearInterval(refreshIntervalId),
            setTime(initialTimeState)
        )
    }

    // const runBreakTimer = () =>{
    //     console.log(time)
    //     // runHandler()
    // }

    let second = time.s
    if (second == 60) {
        second = '0'
    }
    else {
        second = time.s
    }

    if (second < 10) {
        second = `0${second}`
    }



    let minute = time.m
    if (minute < 0) {
        // Here the timer stops

        // Need to add a conditional if vibration is checked then only execute this ->
        Vibration.vibrate([0, 1000], false)
        setIsBreakSessionExecuted(false)
        if (isBreakSessionExecuted == false) {
            Alert.alert(
                'Session Finished', '', [
                { text: 'close', onPress: () => { } },
                { text: 'start break', onPress: () => { changeTimerStateToBreakState() } }
            ]
            )
        }
        resetHandler()
    }

    const changeTimerStateToBreakState = () => {
        setTime(initialBreakState)
        setIsBreakSessionExecuted(true)
    }

    const pauseHandler = () => {
        if (isStart == true) {
            isPaused == true ? runHandler() : clearInterval(refreshIntervalId)
            setIsPaused(v => !v)
        }
        else {
            isPaused == false ? runHandler() : null
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar style={isStart == false ? 'light' : 'dark'} backgroundColor={isStart == false ? colors.primary : colors.tertiary} />

            <TouchableOpacity activeOpacity={0.6} onPress={() => pauseHandler()}>
                <Text style={styles.timer}>
                    {time.m > 10 ? time.m : `0${time.m}`} : {second}
                </Text>
            </TouchableOpacity>

            <View style={[styles.buttonContainer, { bottom: deviceHeight * 0.25, width: deviceWidth * 0.5 }]}>
                {/* <TouchableOpacity
                    style={[styles.button, 
                    {
                        backgroundColor: isStart == false ?
                            Colors.secondary :
                            Colors.tertiary
                    }
                    ]}
                    onPress={isStart == false ? runHandler : resetHandler}
                /> */}
                <TouchableOpacity
                    style={[styles.button,
                    {
                        backgroundColor: isStart == false ?
                            Colors.secondary :
                            Colors.tertiary
                    }
                    ]}
                    onPress={isStart == false ? runHandler : resetHandler}
                />
            </View>
            {/* <View style={{ backgroundColor: '#2a9d8f', height: 200, width: 500, position: 'absolute', bottom: 0 }}>

            </View> */}

            <View style={[styles.controlsContainer, { bottom: deviceHeight * 0.05, width: deviceWidth * 0.9 }]}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Settings')}
                    style={[styles.settingsContainer, { marginHorizontal: deviceWidth * 0.1, }]}>
                    <SimpleLineIcons name="settings" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Settings')}
                    style={[styles.musicContainer, { marginHorizontal: deviceWidth * 0.1, }]}>
                    <Ionicons name="musical-notes" size={24} color="white" />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
    },
    timer: {
        color: 'white',
        fontSize: 100
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginHorizontal: 50
    },
    buttonContainer: {
        position: 'absolute',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',

    },
    settingsContainer: {
        padding: 10
    },
    musicContainer: {
        padding: 10
    }
})
