import React from 'react'
import { View, Text, Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import colors from '../constants/colors'
import HomeScreen from '../screens/HomeScreen'
import Settings from '../screens/Settings'

const RootStack = createStackNavigator(
    {
        Settings: {
            screen: Settings,
            navigationOptions:{
                headerShown:true,
                headerStyle:{
                    backgroundColor:colors.primary,
                    // elevation:0
                },
                headerTintColor:'white'
            },
        },
        Home: {
            screen: HomeScreen,
            navigationOptions: {
            },
        },
        
    },
    {
        defaultNavigationOptions: {
            headerShown: false,

        },
    },

)

export default createAppContainer(RootStack)
