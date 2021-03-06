import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import TerminosCondiciones from '../screens/TerminosCondiciones'

const Stack = createStackNavigator()

export default function TerminosCondicionesStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="terminosCondiciones" component={TerminosCondiciones} options={{ title: "terminosCondiciones" }}/>
        </Stack.Navigator>
    )
}