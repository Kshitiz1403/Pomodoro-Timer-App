import MultiSlider from '@ptomasroos/react-native-multi-slider'
import React, { useState } from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import colors from '../constants/colors'


const TimerDuration = () => {
    const width = useWindowDimensions().width

    const [workSessionDuration, setWorkSessionDuration] = useState(25)

    return (
        <View style={styles.container}>
            <View>
                <Text>Work session duration</Text>
            </View>
            <View>
                <Text style={{fontSize:30}}>{workSessionDuration}</Text>
                <Text>Break Duration</Text>
            </View>
        </View>
    )
}

export default TimerDuration

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
    },
})
