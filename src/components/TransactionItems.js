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
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
const TransactionItems = ({ transaction }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.details}>
                    Symbol:
                    {transaction.symbol}
                </Text>
                <Text style={styles.details}>
                    Quantity:
                    {transaction.qty}
                </Text>
                <Text style={styles.details}>
                    Value:
                    {transaction.value}
                </Text>
            </ScrollView>
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
export default TransactionItems;
