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
});
export default TransactionItems;
