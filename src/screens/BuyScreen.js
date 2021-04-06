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
import { TouchableOpacity } from 'react-native-gesture-handler';
import { executeBuy } from '../network';

const BuyScreen = () => {
    const [input, setInput] = useState('');
    const [quote, setQuote] = useState([]);

    const searchAPI = async () => {
        //Get current price Quote "C"
        try {
            const response = await axios.get(
                `https://finnhub.io/api/v1/quote?symbol=${input.toUpperCase()}&token=${API_KEY}`
            );

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

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTitle}>Buy</Text>
            </TouchableOpacity>
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
    button: {
        backgroundColor: '#b73535',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        padding: 15,
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

export default BuyScreen;
