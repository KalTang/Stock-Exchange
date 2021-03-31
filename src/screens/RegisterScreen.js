import React from 'react';
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    Button,
    StyleSheet,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RegisterScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Register</Text>

            <TextInput style={styles.formInput} placeholder="First Name" />
            <TextInput style={styles.formInput} placeholder="Last Name" />
            <TextInput style={styles.formInput} placeholder="Email" />
            <TextInput
                style={styles.formInput}
                placeholder="Password"
                secureTextEntry={true}
            />
            <TextInput
                style={styles.formInput}
                placeholder="Confirm password"
                secureTextEntry={true}
            />

            <Button title="Sign Up" />

            <Text style={{ color: '#b73535', fontSize: 18, marginTop: 20 }}>
                Already have an account?
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}
            >
                <Text
                    style={{
                        color: '#077edc',
                        fontSize: 20,
                        marginBottom: 10,
                        marginTop: 10,
                    }}
                >
                    Login here!
                </Text>
            </TouchableOpacity>
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

export default RegisterScreen;
