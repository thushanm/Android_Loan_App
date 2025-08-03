import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchLoans } from '../redux/actions';
import LoanListItem from '../component/LoanListItem';

const LoanListScreen = ({ loans, error, fetchLoans, navigation }) => {
    useEffect(() => {
        fetchLoans();
    }, [fetchLoans]);

    const safeLoans = Array.isArray(loans) ? loans : [];

    if (error) {
        return (
            <View style={styles.centerContainer}>
                <Text style={styles.errorText}>Failed to load loans: {error}</Text>
                <Button title="Retry" onPress={fetchLoans} />
            </View>
        );
    }

    const renderItem = ({ item }) => (
        item ? <LoanListItem loan={item} /> : null
    );

    return (
        <View style={styles.container}>
            <Button
                title="Apply for New Loan"
                onPress={() => navigation.navigate('LoanApplicationForm')}
            />
            <FlatList
                data={safeLoans}
                renderItem={renderItem}
                keyExtractor={(item) => item ? item.id.toString() : Math.random().toString()}
                ListEmptyComponent={
                    <View style={styles.centerContainer}>
                        <Text>No loans found.</Text>
                    </View>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});

const mapStateToProps = (state) => ({
    loans: state.loans.list,
    error: state.loans.error,
});

const mapDispatchToProps = {
    fetchLoans,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoanListScreen);
