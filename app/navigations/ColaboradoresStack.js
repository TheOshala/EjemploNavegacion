import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Colaboradores from '../screens/Colaboradores'

const Stack = createStackNavigator()

export default function ColaboradoresStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="colaboradores" component={Colaboradores} options={{ title: "colaboradores" }}/>
        </Stack.Navigator>
    )
}