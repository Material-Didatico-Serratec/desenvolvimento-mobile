import React from "react";

import { Albuns } from "../screens/Albuns";
import { Musicas } from "../screens/Musicas";
import { Favoritas } from "../screens/Favoritas";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const DrawerNavigation = createDrawerNavigator<DrawerParamList>();

export type DrawerParamList = {
    Álbuns: undefined;
    Favoritas: undefined;
}

const NavigationDrawer = () =>{
    return (
        <DrawerNavigation.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: "#0f74BC"},
                drawerStyle: { backgroundColor: "#0f74BC"},
                drawerLabelStyle: { color: "#e4e4e4"},
                drawerActiveBackgroundColor: "#24A9E1",
                headerTitleStyle: { color: "#e4e4e4"},
                headerTintColor: "#e4e4e4"
            }}
        >
            <DrawerNavigation.Screen
                name="Álbuns"
                options={{
                    title: "SerratecMusic"
                }}
                component={StackNavigator}
            />
            <DrawerNavigation.Screen
                name='Favoritas'
                component={Favoritas}
            />
        </DrawerNavigation.Navigator>
    )
}

const StackNavigation = createNativeStackNavigator<StackParamList>();

export type StackParamList = {
    Album: undefined;
    Musicas: {indexAlbum: number};
}

const StackNavigator = () => {

    return (
        <StackNavigation.Navigator>
            <StackNavigation.Screen
                options={{
                    headerShown: false
                }}
                name="Album"
                component={Albuns}
            />
            <StackNavigation.Screen
                options={{
                    headerShown: false
                }}
                name="Musicas"
                component={Musicas}
            />
        </StackNavigation.Navigator>
    )
}

export const Routes = ()=> {

    return (
        <NavigationContainer>
            <NavigationDrawer/>
        </NavigationContainer>
    )
}