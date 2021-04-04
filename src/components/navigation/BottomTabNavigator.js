import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BuyScreen from '../../screens/BuyScreen';
import AddFundsScreen from '../../screens/AddFundsScreen';
import HomeScreen from '../../screens/HomeScreen';
const BottomTab = createBottomTabNavigator();
export default function BottomTabNavigator({ user, setUser }) {
    return (
        <BottomTab.Navigator initialRouteName="HomeScreen">
            <BottomTab.Screen name="BuyScreen" component={BuyScreen} />
            <BottomTab.Screen name="HomeScreen">
                {(props) => (
                    <HomeScreen {...props} user={user} setUser={setUser} />
                )}
            </BottomTab.Screen>
            <BottomTab.Screen
                name="AddFundsScreen"
                component={AddFundsScreen}
            />
        </BottomTab.Navigator>
    );
}
