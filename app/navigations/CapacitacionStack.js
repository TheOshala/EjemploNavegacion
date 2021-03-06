import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Capacitacion from '../screens/Capacitacion'

const Stack = createStackNavigator()

export default function CapacitacionStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="capacitacion" component={Capacitacion} options={{ title: "capacitacion" }}/>
        </Stack.Navigator>
    )
}