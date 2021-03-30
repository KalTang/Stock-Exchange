import React from 'react';
import { View, Text } from 'react-native';

const Register = () => {
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
            <Button title="Login here" />
        </SafeAreaView>
    );
};

export default Register;
