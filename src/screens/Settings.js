import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Pressable, } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

import colors from '../constants/colors'

const Settings = ({ navigation }) => {

    const [isAMOLED, setIsAMOLED] = useState(false)
    const [isKeepScreenOn, setIsKeepScreenOn] = useState(false)
    const [isVibrationOn, setIsVibrationOn] = useState(false)
    // const [isCheckBoxShown, setIsCheckBoxShown] = useState(false)

    const Item = (props) => {
        // let isCheckBoxShown = false
        return (
            <Pressable
                onPress={props.onTap}
                android_ripple={{ color: colors.underlayGray }}
            >
                <View style={styles.listItem}>
                    <View style={{ ...styles.listItemWithIcons, marginRight: 20 }}>
                        {props.icon}
                        <View style={{ marginLeft: 20, justifyContent: 'center' }}>
                            <Text style={styles.listItemText}>{props.title}</Text>
                            {props.description ? <Text style={styles.listItemDetailText}>{props.description}</Text> : null}
                        </View>
                    </View>
                    <View>
                        {props.isCheckBoxShown == true ? <CheckBox
                            value={props.checkBoxValue}
                            onValueChange={props.onCheckBoxValueChange}
                            tintColors={{ true: colors.secondary, false: colors.lightGreen }}
                        /> : null}

                    </View>
                </View>
            </Pressable>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* <Item
                    title='Timer Duration'
                    description='Set the duration for work and break sessions'
                    onTap={() => navigation.navigate('Duration')}
                    icon={<MaterialCommunityIcons name="timer-sand" size={24} color="white" />}
                />
                <Item
                    title='Keep the screen on'
                    icon={<MaterialCommunityIcons name="lightbulb-outline" size={24} color="white" />}
                    onTap={() => { setIsKeepScreenOn(v => !v) }}
                    isCheckBoxShown
                    checkBoxValue={isKeepScreenOn}
                    onCheckBoxValueChange={(value) => setIsKeepScreenOn(value)}
                />
                <Item
                    title='Vibration'
                    icon={<MaterialCommunityIcons name="vibrate" size={24} color="white" />}
                    onTap={() => { setIsVibrationOn(v => !v) }}
                    isCheckBoxShown
                    checkBoxValue={isVibrationOn}
                    onCheckBoxValueChange={(value) => setIsVibrationOn(value)}
                /> */}

                <Pressable
                    onPress={() => navigation.navigate('Duration')}
                    android_ripple={{ color: colors.underlayGray }}
                >
                    <View style={styles.listItem}>
                        <View style={{ ...styles.listItemWithIcons, marginRight: 20 }}>
                            <MaterialCommunityIcons name="timer-sand" size={24} color="white" />
                            <View style={{ marginLeft: 20, justifyContent: 'center' }}>
                                <Text style={styles.listItemText}>Timer Duration</Text>
                                <Text style={styles.listItemDetailText}>Set the duration for work and break sessions</Text>
                            </View>
                        </View>
                    </View>
                </Pressable>

                <Pressable
                    onPress={() => setIsAMOLED(v => !v)}
                    android_ripple={{ color: colors.underlayGray }}
                >
                    <View style={styles.listItem}>
                        <View style={{ ...styles.listItemWithIcons, marginRight: 20 }}>
                            <MaterialCommunityIcons name="lightbulb-outline" size={24} color="white" />

                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.listItemText}>{`AMOLED Theme (Experimental)`}</Text>
                                <Text style={styles.listItemDetailText}>Changes the UI to Black and White</Text>
                            </View>

                        </View>

                        <CheckBox
                            value={isAMOLED}
                            onValueChange={(value) => setIsAMOLED(value)}
                            tintColors={{ true: colors.secondary, false: colors.lightGreen }}
                        />
                    </View>
                </Pressable>


                <Pressable
                    onPress={() => setIsKeepScreenOn(v => !v)}
                    android_ripple={{ color: colors.underlayGray }}
                >
                    <View style={styles.listItem}>
                        <View style={styles.listItemWithIcons}>
                            <MaterialCommunityIcons name="lightbulb-outline" size={24} color="white" />
                            <Text style={{ ...styles.listItemText, marginHorizontal: 20 }}>Keep the Screen On</Text>
                        </View>

                        <CheckBox
                            value={isKeepScreenOn}
                            onValueChange={(value) => setIsKeepScreenOn(value)}
                            tintColors={{ true: colors.secondary, false: colors.lightGreen }}
                        />
                    </View>
                </Pressable>

                <Pressable
                    onPress={() => setIsVibrationOn(v => !v)}
                    android_ripple={{ color: colors.underlayGray }}
                >
                    <View style={styles.listItem}>
                        <View style={styles.listItemWithIcons}>
                            <MaterialCommunityIcons name="vibrate" size={24} color="white" />
                            <Text style={{ ...styles.listItemText, marginHorizontal: 20 }}>Vibration</Text>
                        </View>
                        <CheckBox
                            value={isVibrationOn}
                            onValueChange={(value) => setIsVibrationOn(value)}
                            tintColors={{ true: colors.secondary, false: colors.lightGreen }}
                        />
                    </View>
                </Pressable>

                <View style={styles.sectionHeadingContainer}>
                    <Text style={styles.sectionHeadingText}>General</Text>
                </View>
                <Pressable
                    onPress={() => Linking.openURL('https://www.linkedin.com/in/kshitizagrawal/')}
                    android_ripple={{ color: colors.underlayGray }}
                >
                    <View style={styles.listItem}>
                        <View style={styles.listItemWithIcons}>
                            <Ionicons name="information-circle" size={24} color="white" />
                            <Text style={[styles.listItemText, { marginHorizontal: 20 }]}>How to Use</Text>
                        </View>
                    </View>
                </Pressable>

                <Pressable
                    onPress={() => Linking.openURL('https://www.linkedin.com/in/kshitizagrawal/')}
                    android_ripple={{ color: colors.underlayGray }}
                >
                    <View style={styles.listItem}>
                        <View style={styles.listItemWithIcons}>
                            <Ionicons name="people" size={24} color="white" />
                            <Text style={[styles.listItemText, { marginHorizontal: 20 }]}>About the **name of the App**</Text>
                        </View>
                    </View>
                </Pressable>

                <Pressable
                    onPress={() => Linking.openURL('https://www.linkedin.com/in/kshitizagrawal/')}
                    android_ripple={{ color: colors.underlayGray }}
                >
                    <View style={styles.listItem}>
                        <View style={styles.listItemWithIcons}>
                            <Ionicons name="star" size={24} color="white" />
                            <Text style={[styles.listItemText, { marginHorizontal: 20 }]}>Rate Us</Text>
                        </View>
                    </View>
                </Pressable>

                <Pressable
                    onPress={() => { Linking.openURL('https://www.linkedin.com/in/kshitizagrawal/') }}
                    android_ripple={{ color: colors.underlayGray }}
                >
                    <View style={styles.listItem}>
                        <View style={styles.listItemWithIcons}>
                            <Ionicons name="share-social" size={24} color="white" />
                            <Text style={[styles.listItemText, { marginHorizontal: 20 }]}>Share to friends</Text>
                        </View>
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
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 16,
        color: 'white'
    },
    listItemDetailText: {
        color: colors.gray
    },
    listItemWithIcons: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    sectionHeadingContainer: {
        margin: 20,
    },
    sectionHeadingText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})
