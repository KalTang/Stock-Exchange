import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
//import {createBottomTabNavigatior} from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/components/navigation/BottomTabNavigator';
import { decode, encode } from 'base-64';
if (!global.btoa) {
    global.btoa = encode;
}
if (!global.atob) {
    global.atob = decode;
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Root" component={BottomTabNavigator} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
