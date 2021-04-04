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
import { firebase } from '../../firebase/config';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid;
                const usersRef = firebase.firestore().collection('users');
                usersRef
                    .doc(uid)
                    .get()
                    .then((firestoreDocument) => {
                        if (!firestoreDocument.exists) {
                            alert('User does not exist anymore.');
                            return;
                        }
                        const user = firestoreDocument.data();
                        navigation.navigate('HomeScreen', { user });
                        console.log('login successful');
                    })
                    .catch((error) => {
                        alert(error);
                    });
            })
            .catch((error) => {
                alert(error);
            });
    };
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.formInput}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.formInput}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => onLoginPress()}
            >
                <Text style={styles.buttonTitle}>Login</Text>
            </TouchableOpacity>

            <Text style={{ color: '#b73535', fontSize: 25, marginTop: 20 }}>
                Don't have an account?
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('RegisterScreen')}
            >
                <Text
                    style={{
                        color: '#077edc',
                        fontSize: 25,
                        marginBottom: 10,
                        marginTop: 10,
                    }}
                >
                    Sign Up here!
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
    },
});

export default LoginScreen;
