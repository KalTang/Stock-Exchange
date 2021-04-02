import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    Button,
    StyleSheet,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import axios from 'axios';

const SearchScreen = () => {
    return (
        <View>
            <SearchBar />
        </View>
    );
};

export default SearchScreen;
