import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

//import Muro from "../screens/Muro"

import MuroStack from "../navigations/MuroStack";
import ChatStack from "../navigations/ChatStack";
import CorreoStack from "../navigations/CorreoStack";
import GruposStack from "../navigations/GruposStack";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
      <Tab.Navigator
        initialRouteName="muro"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#1D8348",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            switch (route.name) {
              case "muro":
                iconName = "wall";
                break;
              case "chat":
                iconName = "chat";
                break;
              case "grupos":
                iconName = "account-group-outline";
                break;
              case "correo":
                iconName = "email-mark-as-unread";
                break;

              default:
                break;
            }
            return (
              <Icon type="material-community" name={iconName} color={color} />
            );
          },
        })}
      >
        <Tab.Screen
          name="muro"
          component={MuroStack}
          options={{ title: "MURO" }}
        />
        <Tab.Screen
          name="chat"
          component={ChatStack}
          options={{ title: "CHAT" }}
        />
        <Tab.Screen
          name="grupos"
          component={GruposStack}
          options={{ title: "GRUPOS" }}
        />
        <Tab.Screen
          name="correo"
          component={CorreoStack}
          options={{ title: "CORREO" }}
        />
      </Tab.Navigator>

  )
}


