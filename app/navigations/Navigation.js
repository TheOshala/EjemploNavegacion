import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from "react-native-elements";
import { createStackNavigator } from '@react-navigation/stack';

import ChatStack from "../navigations/ChatStack";
import CorreoStack from "../navigations/CorreoStack";
import GruposStack from "../navigations/GruposStack";
import MuroStack from "../navigations/MuroStack";

/*
const Tab = createBottomTabNavigator();

function TabNavigation() {
    return(
    <Tab.Navigator
    initialRouteName ='muro'
    tabBarOptions={{inactiveTintColor:'#646464', activeTintColor:'#1D8348'}}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
          let iconName
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
          return(
            <Icon type="material-community" name={iconName} color={color} />
          )
      }
    })}
  >
    <Tab.Screen name="muro" component={MuroStack} options={{ title: "MURO" }}/>
    <Tab.Screen name="chat" component={ChatStack} options={{ title: "CHAT" }}/>
    <Tab.Screen name="grupos" component={GruposStack} options={{ title: "GRUPOS" }}/>
    <Tab.Screen name="correo" component={CorreoStack} options={{ title: "CORREO" }}/>
    </Tab.Navigator>
    )
}
*/

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
    return(
        <Drawer.Navigator >
            <Drawer.Screen name="muro" component={MuroStack} options={{ title: "MURO" }}/>
            <Drawer.Screen name="chat" component={ChatStack} options={{ title: "CHAT" }}/>
            <Drawer.Screen name="grupos" component={GruposStack} options={{ title: "GRUPOS" }}/>
            <Drawer.Screen name="correo" component={CorreoStack} options={{ title: "CORREO" }}/>
        </Drawer.Navigator>      

    )
}

/*
const Stack = createStackNavigator();

function MainStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Principal' component={TabNavigation}/>
    </Stack.Navigator>
  )
}
*/

export default function Navigation() {
  return ( 
        
    <NavigationContainer>  
        <DrawerNavigation/>
     </NavigationContainer>


   
  );
}


