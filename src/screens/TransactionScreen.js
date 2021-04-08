import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { firebase } from '../../firebase/config';
import TransactionItems from '../components/TransactionItems';
import { getPortfolio } from '../network';

export default function AddFundsScreen({ user, symbol, price }) {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const tempUserPortfolio = await getPortfolio();
                setTransactions(tempUserPortfolio);
                console.log(transactions);
            } catch (error) {
                console.error(error.message);
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Transactions</Text>
            {/* {console.log(transactions)} */}
            {/* {transactions.map((transaction) => (
                <TransactionItems transaction={transaction} />
            ))} */}
            {transactions.length > 0 ? (
                <View style={styles.listContainer}>
                    <FlatList
                        data={transactions}
                        renderItem={TransactionItems}
                        keyExtractor={(item) => item.positionId}
                        removeClippedSubviews={true}
                    />
                </View>
            ) : (
                <Text style={styles.subTitle}>You have no transaction...</Text>
            )}
        </View>
    );
}
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
