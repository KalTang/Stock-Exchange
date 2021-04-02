import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    Button,
    StyleSheet,
} from 'react-native';
import { API_KEY } from 'dotenv';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

const BuyScreen = () => {
    const [input, setInput] = useState('');
    const [quote, setQuote] = useState([]);

    const searchAPI = async () => {
        //Get current price Quote "C"
        try {
            const response = await axios.get(
                `https://finnhub.io/api/v1/quote?symbol=${input}&token=${API_KEY}`
            );
            console.log('Api response >>>>>', response.data.c);
            setQuote(response.data.c);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ color: '#b73535', fontSize: 20 }}>Results</Text>
            <SearchBar
                input={input}
                onInputChange={(newInput) => setInput(newInput)}
                onInputSubmit={() => searchAPI()}
            />

            <SearchResults symbol={input} price={quote} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default BuyScreen;
