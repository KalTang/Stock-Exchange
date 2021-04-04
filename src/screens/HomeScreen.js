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
const HomeScreen = ({ navigation }) => {
    const onLogoutPress = () => {
        firebase
            .auth()
            .signOut()
            .then(function () {
                // Sign-out successful.
                console.log('logout successfully');
                //navigation.navigate('LandingScreen');
            })
            .catch(function (error) {
                // An error happened
                console.log(error);
            });
    };
    return (
        <View>
            <Text>HomeScreen</Text>
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
        backgroundColor: '#788eec',
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
