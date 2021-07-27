import React from 'react'
import { View, Text, Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import colors from '../constants/colors'
import HomeScreen from '../screens/HomeScreen'
import Settings from '../screens/Settings'
import TimerDuration from '../screens/TimerDuration'

const RootStack = createStackNavigator(
    {
        // Home: {
        //     screen: HomeScreen,
        //     navigationOptions: {
        //     },
        // },
        // Settings: {
        //     screen: Settings,
        //     navigationOptions:{
        //         headerShown:true,
        //     },
        // },
        Duration:{
            screen:TimerDuration,
            navigationOptions:{
                headerTitle:'Settings',
                headerShown:true
            }
        }
        
        
    },
    {
        defaultNavigationOptions: {
            headerShown: false,
            detachInactiveScreens:false,
            
            cardStyle: {backgroundColor:colors.primary, opacity:1},
            animationEnabled:false,
            headerStyle:{
                backgroundColor:colors.primary,
                elevation:0
            },
            headerTintColor:'white'
        },
        mode:'modal',
        
        
        
    },

)

export default createAppContainer(RootStack)
