import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, TouchableHighlight, Pressable, } from 'react-native'
import CheckBox from '@react-native-community/checkbox';

import colors from '../constants/colors'

const Settings = () => {

    const [isKeepScreenOn, setIsKeepScreenOn] = useState(false)


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.listItem}>
                    <View>
                        <Text style={styles.listItemText}>Timer Duration</Text>
                        <Text style={styles.listItemDetailText}>Set the duration for work and break sessions</Text>
                    </View>

                </View>
                
                <Pressable
                    onPress={() => setIsKeepScreenOn(v=>!v)}
                    android_ripple={{color:colors.underlayGray}}
                    >
                    <View style={styles.listItem}>
                        <Text style={styles.listItemText}>Keep the Screen On</Text>
                        <CheckBox
                            value={isKeepScreenOn}
                            onValueChange={setIsKeepScreenOn}
                            tintColors={{ true: colors.secondary, false: colors.lightGreen }}
                        />
                    </View>
                </Pressable>
            </ScrollView>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 16,
        color: 'white'
    },
    listItemDetailText: {
        color: colors.gray
    }
})
