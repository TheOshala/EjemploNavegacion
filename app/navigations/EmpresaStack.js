import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Empresa from '../screens/Empresa'

const Stack = createStackNavigator()

export default function EmpresaStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="empresa" component={Empresa} options={{ title: "empresa" }}/>
        </Stack.Navigator>
    )
}