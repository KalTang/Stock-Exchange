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
import { executeBuy, executeSell } from '../network';

const BuyScreen = () => {
    const [input, setInput] = useState('');
    const [quote, setQuote] = useState([]);
    const [amount, setAmount] = useState('');

    const handleBuy = async (data) => {
        try {
            const res = await executeBuy(data);
            console.log(data);
            if (res) {
                setAmount('');
            }
        } catch (e) {
            console.log(e);
            console.log(data);
        }
    };

    const handleSell = async (data) => {
        try {
            const res = await executeSell(data);
            console.log(data);
            if (res) {
                setAmount('');
            }
        } catch (e) {
            console.log(e);
            console.log(data);
        }
    };

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
            <Button
                style={styles.button}
                title="Search"
                onPress={() => searchAPI()}
            />

            <SearchResults symbol={input} price={quote} />
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <TextInput
                    style={styles.input}
                    placeholder=" amount"
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setAmount(text)}
                    value={amount}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                {/* Handle buys */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        handleBuy({
                            symbol: input,
                            qty: parseInt(amount),
                            price: quote,
                            createdOn: new Date(),
                        });
                    }}
                >
                    <Text style={styles.buttonTitle}>Buy</Text>
                </TouchableOpacity>

                {/* Handle sells */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        handleSell({
                            symbol: input,
                            qty: parseInt(amount),
                            price: quote,
                            createdOn: new Date(),
                        });
                    }}
                >
                    <Text style={styles.buttonTitle}>Sell</Text>
                </TouchableOpacity>
            </View>
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
    input: {
        height: 48,
        borderWidth: 2, // size/width of the border
        borderColor: 'lightgrey', // color of the border
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: '5%',
        padding: 10,
    },
});

export default BuyScreen;
