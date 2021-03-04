import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Correo from '../screens/Correo'

const Stack = createStackNavigator()

export default function CorreoStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="correo" component={Correo} options={{ title: "correo" }}/>
        </Stack.Navigator>
    )
}