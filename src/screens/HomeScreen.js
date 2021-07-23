import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../constants/colors'
import Colors from '../constants/colors'

const HomeScreen = () => {

    //                                  To do  
    //  Notification on start of the timer
    //  Alert on the end of the timer - Close or Start Break
    //  Implement Start Break Screen - On Timer end - Alert to close or start another pomodoro - brought back to the pomodoro screen
    //  Add functionality to set custom pomodoro and break duration 
    //  Record all pomodoros with the time they started in Async Storage
    //  Fetch the pomodoros from Async Storage and display a productivity graph
    //  
    // 
    // 
    // 


    const initialTimeState = { m: 25, s: 60 }

    const [time, setTime] = useState(initialTimeState)

    const [isStart, setIsStart] = useState(false)

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
        refreshIntervalId = setInterval(startHandler, 1000)
        setIsStart(true)
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
        alert('done')
        resetHandler()
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor=
                {colors.primary}
                // {isStart == false ? colors.secondary : colors.tertiary}
            />

            <Text style={styles.timer}>

                {time.m > 10 ? time.m : `0${time.m}`} : {second}
                {/* {time.s == 60 ? '00' : time.s} */}
                {/* {time.s > 9 ? time.s : `0${time.s}`} */}
            </Text>

            {/* title={isStart == false ? 'start' : 'reset'} */}
            <TouchableOpacity onPress={isStart == false ? runHandler : resetHandler} style={[styles.button, { backgroundColor: isStart == false ? Colors.secondary : Colors.tertiary }]} />
            <View style={{backgroundColor:'#2a9d8f', height:100, width:500, position:'absolute', bottom:0}}>

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
        borderRadius: 25
    }
})
