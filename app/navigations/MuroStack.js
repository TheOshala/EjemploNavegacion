import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Muro from "../screens/Muro";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function MuroStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name="muro" component={Muro} options={{ title: "muro" }}/>
      </Stack.Navigator>
  )
}


