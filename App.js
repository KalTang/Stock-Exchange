import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/components/navigation/BottomTabNavigator';
import Main from './src/components/navigation/MainNavigator';
import { firebase } from './firebase/config';
const Stack = createStackNavigator();
export default function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const usersRef = firebase.firestore().collection('users');
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                usersRef
                    .doc(user.uid)
                    .get()
                    .then((document) => {
                        const userData = document.data();
                        setLoading(false);
                        setUser(userData);
                    })
                    .catch((error) => {
                        setLoading(false);
                    });
            } else {
                setLoading(false);
            }
        });
    }, []);
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                {console.log(user)}
                <Stack.Navigator>
                    {user ? (
                        <>
                            <Stack.Screen name="BottomTabNavigator">
                                {(props) => (
                                    <BottomTabNavigator
                                        {...props}
                                        user={user}
                                        setUser={setUser}
                                    />
                                )}
                            </Stack.Screen>
                        </>
                    ) : (
                        <>
                            <Stack.Screen
                                name="Root"
                                component={Main}
                                screenOptions={{ headerShown: false }}
                            />
                        </>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
