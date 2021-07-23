import React, { useState } from 'react'
import { Button, StyleSheet, Switch, Text, View } from 'react-native'

const HomeScreen = () => {

    const initialTimeState = {m:25, s:60}
    
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
            <Text style={styles.timer}>

                {time.m > 10 ? time.m : `0${time.m}`} : {second}
                {/* {time.s == 60 ? '00' : time.s} */}
                {/* {time.s > 9 ? time.s : `0${time.s}`} */}
            </Text>

            <View style={{ flexDirection: 'row' }}>
                <Button title={isStart == false ? 'start' : 'reset'} onPress={isStart == false ? runHandler : resetHandler} />
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
        backgroundColor: 'black',
    },
    timer: {
        color: 'white',
        fontSize: 100
    }
})
