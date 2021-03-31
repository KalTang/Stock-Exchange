import React from 'react';
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    Button,
    StyleSheet,
} from 'react-native';

const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.formInput} placeholder="Email" />
            <TextInput
                style={styles.formInput}
                placeholder="Password"
                secureTextEntry={true}
            />

            <Button title="Login" />

            <Text style={{ color: '#b73535', fontSize: 18, marginTop: 20 }}>
                Don't have an account?
            </Text>
            <Button title="Sign up here" />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#b73535',
        marginBottom: 15,
    },
    formInput: {
        fontSize: 20,
        color: '#b73535',
        marginBottom: 15,
    },
});

export default LoginScreen;
