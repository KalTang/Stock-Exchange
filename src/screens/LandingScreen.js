import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import {createBottomTabNavigatior} from '@react-navigation/bottom-tabs'

export default function LandingScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                style={{ width: 340, height: 140, marginBottom: '9%' }}
                source={require('../../assets/SELogo.png')}
            />
            <Text style={styles.title}>Welcome to</Text>
            <Text style={styles.title2}>The Stock Exchange App</Text>
            <StatusBar style="auto" />

            <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}
            >
                <Text
                    style={{
                        color: '#077edc',
                        fontSize: 25,
                        marginBottom: 10,
                    }}
                >
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('RegisterScreen')}
            >
                <Text
                    style={{
                        color: '#077edc',
                        fontSize: 25,
                        marginBottom: 10,
                    }}
                >
                    Register
                </Text>
            </TouchableOpacity>
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
    title2: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#b73535',
        marginBottom: 20,
    },
});
