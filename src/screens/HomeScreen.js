import React, { useState } from 'react'
import { Button, StyleSheet, Switch, Text, View } from 'react-native'

const HomeScreen = () => {

    const [time, setTime] = useState({ m: 25, s: 60 })

    let updatedM = time.m, updatedS = time.s

    const startHandler = () => {
        if (updatedS % 60 == 0) {
            updatedM--
            updatedS = 60
        }
        updatedS--
        return (setTime({ m: updatedM, s: updatedS }))
    }

    const resetHandler = () => setTime({ m: 25, s: 0 })

    let second = time.s
    if (second == 60) {
        second = '0'
    }
    else{
        second = time.s
    }

    if (second < 10) {
        second = `0${second}`
    }



    return (
        <View style={styles.container}>
            <Text style={styles.timer}>

                {time.m > 10 ? time.m : `0${time.m}`} : {second}
                {/* {time.s == 60 ? '00' : time.s} */}
                {/* {time.s > 9 ? time.s : `0${time.s}`} */}
            </Text>


            <View style={{ flexDirection: 'row' }}>
                <Button title='start' onPress={startHandler} />
                <Button title='reset' onPress={resetHandler} />
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
