import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainNavigator from './MainNavigator';
import BuyScreen from '../../screens/BuyScreen';
import AddFundsScreen from '../../screens/AddFundsScreen';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="BuyScreen" component={BuyScreen} />
            <BottomTab.Screen name="HomeScreen" component={MainNavigator} />
            <BottomTab.Screen
                name="AddFundsScreen"
                component={AddFundsScreen}
            />
        </BottomTab.Navigator>
    );
}
