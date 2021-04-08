import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const TransactionItems = ({ item }) => {
    return (
        <View style={styles.entityContainer}>
            <View>
                <Text style={styles.details}>
                    Symbol:
                    {item.symbol}
                </Text>
                <Text style={styles.details}>
                    Quantity:
                    {item.qty}
                </Text>
                <Text style={styles.details}>
                    Value:
                    {item.value}
                </Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#121212',
    },
    listContainer: {
        padding: 20,
        width: '80%',
        flex: 1,
    },
    entityContainer: {
        marginTop: 15,
        borderColor: '#b73535',
        borderWidth: 1,
        padding: 15,
    },
    text: {
        color: 'white',
    },
    title: {
        marginTop: 10,
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    subTitle: {
        display: 'flex',
        marginTop: 10,
        color: 'white',
        fontSize: 20,
    },
    details: {
        color: '#fff',
    },
});
export default TransactionItems;
