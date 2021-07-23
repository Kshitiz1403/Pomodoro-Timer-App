import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'

const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                
            },
            
        },
    },
    {
        defaultNavigationOptions: {
            headerShown: false,
            
        }
    },
)

export default createAppContainer(RootStack)
