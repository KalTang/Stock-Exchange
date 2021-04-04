import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    Button,
    StyleSheet,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../../firebase/firebaseConfig';

const RegisterScreen = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.");
            return;
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid;
                const data = {
                    id: uid,
                    email,
                    fullName,
                };

                const usersRef = firebase.firestore().collection('users');
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('Home', { user: data });
                    })
                    .catch((error) => {
                        alert(error);
                    });
            })
            .catch((error) => {
                console.log(`error >>> ${error}`);
                alert(error);
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Register</Text>

            <TextInput
                style={styles.formInput}
                placeholder="Full Name"
                onChangeText={(text) => setFullName(text)}
                value={fullName}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.formInput}
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.formInput}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.formInput}
                placeholder="Confirm password"
                secureTextEntry={true}
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                autoCapitalize="none"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    onRegisterPress();
                }}
            >
                <Text style={styles.buttonTitle}>Create account</Text>
            </TouchableOpacity>

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
    button: {
        backgroundColor: '#b73535',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 5,
    },
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
