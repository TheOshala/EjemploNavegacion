import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import Chat from '../screens/Chat'

const Stack = createStackNavigator()
//const Tab = createBottomTabNavigator();

export default function ChatStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="chat" component={Chat} options={{ title: "chat" }}/>
        </Stack.Navigator>
    )
}
