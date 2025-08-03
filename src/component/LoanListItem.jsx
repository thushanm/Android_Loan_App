import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoanListItem = ({ loan }) => {
    if (!loan) {
        return null;
    }
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.amount}>Amount: ${loan.amount}</Text>
            <Text style={styles.term}>Term: {loan.term} months</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        marginVertical: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eee',
    },
    amount: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    term: {
        fontSize: 14,
        color: 'gray',
    },
});

export default LoanListItem;
