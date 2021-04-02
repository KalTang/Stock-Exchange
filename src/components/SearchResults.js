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
        <View style={{ margin: 10 }}>
            <Text style={{ color: '#b73535', fontSize: 30 }}>{symbol}</Text>
            <Text style={{ color: '#b73535', fontSize: 30 }}>${price}</Text>
        </View>
    );
};

export default SearchResults;
