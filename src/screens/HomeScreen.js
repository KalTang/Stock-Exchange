import React from 'react';
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    Button,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { firebase } from '../../firebase/config';
const HomeScreen = ({ user, setUser }) => {
    const onLogoutPress = () => {
        firebase
            .auth()
            .signOut()
            .then(function () {
                // Sign-out successful.
                setUser(null);
                console.log('logout successfully');
            })
            .catch(function (error) {
                // An error happened
                console.log(error);
            });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome back, {user.firstName} !</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onLogoutPress()}
            >
                <Text style={styles.buttonTitle}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 15,
        textAlign: 'center',
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
export default HomeScreen;
