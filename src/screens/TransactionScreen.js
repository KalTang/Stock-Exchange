import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    Button,
    StyleSheet,
} from 'react-native';
import { getPortfolio } from '../network';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TransactionScreen = () => {
    const [userPortfolio, setUserPortfolio] = useState('');
    const [amount, setAmount] = useState('');

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

    useEffect(() => {
        (async () => {
            try {
                const tempUserPortfolio = await getPortfolio();
                setUserPortfolio(tempUserPortfolio);
            } catch (error) {
                console.error(error.message);
            }
        })();
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Transactions</Text>

            <View>
                <Text style={styles.details}>
                    PositionID:
                    {/* {userPortfolio[1].positionId} */}
                </Text>
                <Text style={styles.details}>
                    Symbol:
                    {/* {userPortfolio[1].symbol} */}
                </Text>
                <Text style={styles.details}>
                    Quantity:
                    {/* {userPortfolio[1].qty} */}
                </Text>
                <Text style={styles.details}>
                    Value:
                    {/* {userPortfolio[1].value} */}
                </Text>
            </View>
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
    details: {
        color: '#fff',
        fontSize: 18,
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
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#b73535',
        marginTop: '5%',
        marginBottom: '5%',
    },
});

export default TransactionScreen;
