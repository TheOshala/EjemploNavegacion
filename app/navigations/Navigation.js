import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from "react-native-elements";
import { createStackNavigator } from '@react-navigation/stack';


import TabNavigator from "../tab/TabNavigator";
import EmpresaStack from "../navigations/EmpresaStack"
import ColaboradoresStack from "../navigations/ColaboradoresStack"
import CapacitacionStack from "../navigations/CapacitacionStack"
import EntretenimientoStack from "../navigations/EntretenimientoStack"
import TerminosCondicionesStack from "../navigations/TerminosCondicionesStack"

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
    return(
        <Drawer.Navigator initialRouteName="inicio">
            <Drawer.Screen name="inicio" component={TabNavigator} options={{ title: "INICIO" }}/>
            <Drawer.Screen name="empresa" component={EmpresaStack} options={{title: "EMPRESA"}}/>
            <Drawer.Screen name="colaboradores" component={ColaboradoresStack} options={{title: "COLABORADORES"}}/>
            <Drawer.Screen name="capacitacion" component={CapacitacionStack} options={{title: "CAPACITACIÓN"}}/>
            <Drawer.Screen name="entretenimiento" component={EntretenimientoStack} options={{title: "ENTRETENIMIENTO"}}/>
            <Drawer.Screen name="terminosCondiciones" component={TerminosCondicionesStack} options={{title: "TÉRMINOS Y CONDICIONES"}}/>
        </Drawer.Navigator>      

    )
}



export default function Navigation() {
  return ( 
        
    <NavigationContainer> 
      <DrawerNavigation/>    
    </NavigationContainer>


   
  );
}


