import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native';

const SearchResults = ({ symbol, price }) => {
    return (
        <View style={styles.row}>
            <Text style={{ color: '#b73535', fontSize: 30 }}>{symbol} - </Text>
            <Text style={{ color: '#b73535', fontSize: 30 }}>${price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 48,
    },
});

export default SearchResults;
