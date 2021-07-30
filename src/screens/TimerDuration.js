import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, useWindowDimensions, Pressable, Modal, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import colors from '../constants/colors'
import Slider from '@react-native-community/slider';



const TimerDuration = () => {
    const deviceWidth = useWindowDimensions().width
    const deviceHeight = useWindowDimensions().height

    const [workSessionDuration, setWorkSessionDuration] = useState(25)
    const [breakSessionDuration, setBreakSessionDuration] = useState(5)

    const [workTextInput, setWorkTextInput] = useState('')
    const [breakTextInput, setBreakTextInput] = useState('')
    const [inputLock, setInputLock] = useState(false)

    const [isWorkSessionModalVisible, setIsWorkSessionModalVisible] = useState(false)
    const [isBreakSessionModalVisible, setIsBreakSessionModalVisible] = useState(false)
    const [isScreenOpacityReduced, setIsScreenOpacityReduced] = useState(false)

    const workSessionModalOpen = () => {
        setIsWorkSessionModalVisible(true)
        setIsScreenOpacityReduced(true)
    }

    const workSessionModalClose = () => {
        setIsWorkSessionModalVisible(false)
        setIsScreenOpacityReduced(false)
    }

    const breakSessionModelClose = () => {
        setIsBreakSessionModalVisible(false)
        setIsScreenOpacityReduced(false)
    }

    const breakSessionModelOpen = () => {
        setIsBreakSessionModalVisible(true)
        setIsScreenOpacityReduced(true)
    }

    const workTextInputHandler = (text) => {
        setWorkTextInput(text)
        setWorkSessionDuration(parseInt(text))
        // let valid = ''
        // for (let t of text){
        //     if (t != '.' && t != ',' && t != ' ' && t != '-') {
        //         console.log('ummm')
        //         valid+=t
        //         setWorkTextInput(valid)
        //         setWorkSessionDuration(parseInt(valid))
        //     }
        //     else{
        //         console.log('else')
        //     }
        // }
        
    }

    const breakTextInputHandler = (text) => {
        setBreakTextInput(text)
        setBreakSessionDuration(parseInt(text))
    }


    return (
        <View style={styles.container}>
            <View>
                {/* Modal for work session */}
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={isWorkSessionModalVisible}
                    onRequestClose={workSessionModalClose}
                >
                    <Pressable style={{ flex: 1 }} onPressOut={workSessionModalClose}>
                        <TouchableWithoutFeedback>
                            <View style={[modalStyles.container, { top: (deviceHeight / 2) - 75, left: deviceWidth * 0.125 }]}>
                                <View style={[modalStyles.containerItems, { width: deviceWidth * 0.75, }]}>
                                    <Text style={modalStyles.text}>Set Work Session Duration</Text>
                                    <TextInput
                                        keyboardType='number-pad'
                                        style={[modalStyles.textInput, { width: deviceWidth * 0.5, }]}
                                        onChangeText={(text)=>workTextInputHandler(text)}
                                        value={workTextInput}
                                        placeholder='Enter break session duration'
                                        onKeyPress={({ nativeEvent }) => {
                                            nativeEvent.key === 'Backspace' ? setInputLock(true) : ''
                                        }}
                                    />
                                    <View style={modalStyles.buttonsContainer}>
                                        <TouchableOpacity onPress={workSessionModalClose} activeOpacity={0.2} style={modalStyles.buttons}>
                                            <Text style={modalStyles.text}>CANCEL</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={workSessionModalClose} activeOpacity={0.2} style={modalStyles.buttons}>
                                            <Text style={modalStyles.text}>OK</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Pressable>
                </Modal>
                {/* Modal for break Session */}
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={isBreakSessionModalVisible}
                    onRequestClose={breakSessionModelClose}
                >
                    <Pressable style={{ flex: 1 }} onPress={breakSessionModelClose}>
                        <TouchableWithoutFeedback>
                            <View style={[modalStyles.container, { top: (deviceHeight / 2) - 75, left: deviceWidth * 0.125 }]}>
                                <View style={[modalStyles.containerItems, { width: deviceWidth * 0.75, }]}>
                                    <Text style={modalStyles.text}>Set Break Session Duration</Text>
                                    <TextInput
                                        keyboardType='number-pad'
                                        style={[modalStyles.textInput, { width: deviceWidth * 0.5, }]}
                                        onChangeText={breakTextInputHandler}
                                        value={breakTextInput}
                                        placeholder='Enter break session duration'
                                    />
                                    <View style={modalStyles.buttonsContainer}>
                                        <TouchableOpacity onPress={breakSessionModelClose} activeOpacity={0.2} style={modalStyles.buttons}>
                                            <Text style={modalStyles.text}>CANCEL</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={breakSessionModelClose} activeOpacity={0.2} style={modalStyles.buttons}>
                                            <Text style={modalStyles.text}>OK</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Pressable>
                </Modal>
            </View>
            <Pressable onPress={() => { }}>

                {/* ----------Work session slider---------- */}
                <View style={[{ opacity: isScreenOpacityReduced == true ? 0.2 : 1 }]}>
                    <Pressable
                        android_ripple={{ color: colors.underlayGray }}
                        onPress={workSessionModalOpen}
                    >
                        <View style={styles.sliderContainerItems}>
                            <Text style={styles.sliderTitle}>Work session duration</Text>
                            <View style={styles.sliderRow}>
                                <Slider
                                    style={[{ width: deviceWidth * 0.8 }]}
                                    minimumValue={0}
                                    maximumValue={240}
                                    value={workSessionDuration}
                                    onValueChange={(v) => setWorkSessionDuration(v)}
                                    thumbTintColor={colors.secondary}
                                    minimumTrackTintColor={colors.secondary}
                                    maximumTrackTintColor={colors.lightGreen}
                                    step={1}
                                />
                                <Text style={styles.sliderText}>{workSessionDuration}</Text>
                            </View>
                        </View>
                    </Pressable>
                </View>
                {/* ----------Work session slider ends here---------- */}

                {/* ----------Break Session Slider---------- */}
                <View style={[{ opacity: isScreenOpacityReduced == true ? 0.2 : 1 }]}>
                    <Pressable
                        android_ripple={{ color: colors.underlayGray }}
                        onPress={breakSessionModelOpen}
                    >
                        <View style={styles.sliderContainerItems}>
                            <Text style={styles.sliderTitle}>Break session duration</Text>
                            <View style={styles.sliderRow}>
                                <Slider
                                    style={[{ width: deviceWidth * 0.8 }]}
                                    minimumValue={0}
                                    maximumValue={30}
                                    value={breakSessionDuration}
                                    onValueChange={(v) => setBreakSessionDuration(v)}
                                    thumbTintColor={colors.secondary}
                                    minimumTrackTintColor={colors.secondary}
                                    maximumTrackTintColor={colors.lightGreen}
                                    step={1}
                                />
                                <Text style={styles.sliderText}>{breakSessionDuration}</Text>
                            </View>
                        </View>
                    </Pressable>
                </View>
                {/* ----------Break Session Slider Ends here---------- */}
            </Pressable>
        </View>
    )
}

export default TimerDuration

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: colors.primary,
        marginVertical: 20
    },
    sliderContainerItems: {
        marginVertical: 10
    },
    sliderRow: {
        flexDirection: 'row', justifyContent: 'space-between', margin: 10
    },
    sliderTitle: {
        fontSize: 16,
        color: 'white'
    },
    sliderText: {
        color: 'white',
        fontSize: 22
    }

})

const modalStyles = StyleSheet.create({
    container: {
        position: 'absolute', alignItems: 'center'
    },
    containerItems: {
        height: 150,
        backgroundColor: '#3A5763',
        // maybe #366375
        alignItems: 'center',
        borderRadius: 10,
        padding: 12.5,
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16, color: 'white'
    },
    textInput: {
        top: -5, color: 'white', borderBottomWidth: 1, borderColor: colors.lightGreen, margin: 5, height: 40, fontSize: 16, textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttons: {
        marginHorizontal: 20,

    }
})