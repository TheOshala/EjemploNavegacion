import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Grupos from '../screens/Grupos'

const Stack = createStackNavigator()

export default function GruposStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="grupos" component={Grupos} options={{ title: "grupos" }}/>
        </Stack.Navigator>
    )
}