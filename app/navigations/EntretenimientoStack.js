import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Entretenimiento from '../screens/Entretenimiento'

const Stack = createStackNavigator()

export default function EntretenimientoStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="entretenimiento" component={Entretenimiento} options={{ title: "entretenimiento" }}/>
        </Stack.Navigator>
    )
}