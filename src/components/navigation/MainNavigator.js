import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../../screens/LandingScreen';
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import HomeScreen from '../../screens/HomeScreen';

const MainStack = createStackNavigator();
const MainNavigator = () => {
    return (
        <MainStack.Navigator
            initialRouteName="LandingScreen"
            screenOptions={{ headerShown: false }}
        >
            <MainStack.Screen name="LandingScreen" component={LandingScreen} />
            <MainStack.Screen name="LoginScreen" component={LoginScreen} />
            <MainStack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
            />
            <MainStack.Screen name="HomeScreen" component={HomeScreen} />
        </MainStack.Navigator>
    );
};

export default MainNavigator;
