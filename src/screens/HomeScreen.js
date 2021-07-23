import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions, Alert } from 'react-native'
import colors from '../constants/colors'
import Colors from '../constants/colors'
import { SimpleLineIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    //                                  To do  
    //  Notification on start of the timer
    //  Alert on the end of the timer - Close or Start Break
    //  Implement Start Break Screen - On Timer end - Alert to close or start another pomodoro - brought back to the pomodoro screen
    //  Add functionality to set custom pomodoro and break duration 
    //  Record all pomodoros with the time they started in Async Storage
    //  Fetch the pomodoros from Async Storage and display a productivity graph
    //  Add ambient audio functionality using expo-av https://docs.expo.io/versions/latest/sdk/audio/
    //  Time flickers when paused
    //  Let app run in background
    // 

    const deviceHeight = useWindowDimensions().height
    const deviceWidth = useWindowDimensions().width

    const initialTimeState = { m: 5, s: 60 }
    const initialBreakState = { m: 2, s: 60 }

    const [time, setTime] = useState(initialTimeState)

    const [isStart, setIsStart] = useState(false)

    const [isPaused, setIsPaused] = useState(false)

    const [isBreakSessionExecuted, setIsBreakSessionExecuted] = useState(false)

    let numberOfTimerCyclesRun = 0;

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
        startHandler()
        refreshIntervalId = setInterval(startHandler, 10)
        setIsStart(true)
        numberOfTimerCyclesRun++
        return (
            refreshIntervalId
        )
    }

    const resetHandler = () => {
        setIsStart(false)
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
        // Here the main timer stops

        setIsBreakSessionExecuted(false)
        if (isBreakSessionExecuted == false) {
            Alert.alert(
                'Session Finished', '', [
                { text: 'close', onPress: () => { console.log('alert closed') } },
                { text: 'start break', onPress: () => { changeTimerStateToBreakState() } }
            ]
            )
            setIsBreakSessionExecuted(true)
        }
        resetHandler()
    }

    const changeTimerStateToBreakState = () => {
        setTime(initialBreakState)    
    }


    const pauseHandler = () => {
        isPaused == true ? runHandler() : clearInterval(refreshIntervalId)
        setIsPaused(v => !v)
    }
    // {console.log(numberOfTimerCyclesRun)}

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor=
                {colors.primary}
            />

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

            <TouchableOpacity
                onPress={() => navigation.navigate('Settings')}
                style={[styles.settingsContainer, { marginHorizontal: deviceHeight * 0.1, bottom: deviceHeight * 0.05 }]}>
                <SimpleLineIcons name="settings" size={24} color="white" />
            </TouchableOpacity>

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
    settingsContainer: {
        position: 'absolute',
        alignSelf: 'flex-start',
        padding: 10
    }
})
