import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    Button,
    Image,
    StyleSheet,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { firebase } from '../../firebase/config';
import { registerUser } from '../network';

const RegisterScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
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
                    firstName,
                    lastName,
                };
                const usersRef = firebase.firestore().collection('users');
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        registerUser({ userId: uid });
                    })
                    .then(() => {
                        console.log('Register successfully');
                        // navigation.navigate('Home', { user: data });
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
            <Image
                style={{ width: 330, height: 130, marginBottom: '9%' }}
                source={require('../../assets/SELogo.png')}
            />

            <TextInput
                style={styles.formInput}
                placeholder="First Name"
                placeholderTextColor="lightgrey"
                onChangeText={(text) => setFirstName(text)}
                value={firstName}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.formInput}
                placeholder="Last Name"
                placeholderTextColor="lightgrey"
                onChangeText={(text) => setLastName(text)}
                value={lastName}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.formInput}
                placeholder="Email"
                placeholderTextColor="lightgrey"
                onChangeText={(text) => setEmail(text)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.formInput}
                placeholder="Password"
                placeholderTextColor="lightgrey"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.formInput}
                placeholder="Confirm password"
                placeholderTextColor="lightgrey"
                secureTextEntry={true}
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => onRegisterPress()}
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
                        fontSize: 25,
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
        width: '57%',
        height: '5%',
        marginBottom: 15,
        borderWidth: 2, // size/width of the border
        borderColor: 'lightgrey', // color of the border
        padding: 15,
        borderRadius: 5,
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
        padding: 10,
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
export default RegisterScreen;
