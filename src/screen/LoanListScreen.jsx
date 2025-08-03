import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchLoans } from '../redux/actions';
import LoanListItem from '../component/LoanListItem';

const LoanListScreen = ({ loans, fetchLoans, navigation }) => {
    useEffect(() => {
        fetchLoans();
    }, [fetchLoans]);

    const renderItem = ({ item }) => (
        <LoanListItem loan={item} />
    );

    return (
        <View style={styles.container}>
            <Button
                title="Apply for New Loan"
                onPress={() => navigation.navigate('LoanApplicationForm')}
            />
            <FlatList
                data={loans}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={<Text>No loans found.</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

// 👇 THE FIX IS HERE 👇
const mapStateToProps = (state) => ({
    loans: state.loans.loans,
});

const mapDispatchToProps = {
    fetchLoans,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoanListScreen);
