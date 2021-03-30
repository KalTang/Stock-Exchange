import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
//import {createBottomTabNavigatior} from '@react-navigation/bottom-tabs'

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to</Text>
            <Text style={styles.title}>The Stock Exchange App</Text>
            <StatusBar style="auto" />

            <Button title="Login" />
            <Button title="Register" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#b73535',
    },
});
