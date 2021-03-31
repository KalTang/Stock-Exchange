import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    Button,
    StyleSheet,
} from 'react-native';

const SearchBar = ({ input, onInputChange, onInputSubmit }) => {
    return (
        <View style={styles.background}>
            <EvilIcons
                style={styles.icon}
                name="search"
                size={20}
                color={'#b73535'}
            />
            <TextInput
                placeholder="Search"
                placeholderTextColor="#b73535"
                value={input}
                style={styles.input}
                onChangeText={(newInput) => onInputChange(newInput)}
                onSubmitEditing={() => onInputSubmit()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        height: 50,
        borderRadius: 6,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
    },

    icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    },
});

export default SearchBar;
