import React from 'react';
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    Button,
    StyleSheet,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import { FINNHUB_KEY } from ;
import axios from 'axios';

const BuyScreen = () => {
    const [input, setInput] = useState('');

    const searchAPI = async () => {
        //Get current price for Quote
        try {
            const response = await axios.get(
                `https://finnhub.io/api/v1/quote?symbol=${input}&token=${FINNHUB_KEY}`
            );
        } catch (err) {}
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ color: '#b73535', fontSize: 20 }}>BuyScreen</Text>
            <SearchBar
                input={input}
                onInputChange={(newInput) => setInput(newInput)}
                onInputSubmit={() => searchAPI()}
            />
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
