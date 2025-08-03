import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import { submitLoan } from '../redux/actions';

const LoanApplicationFormScreen = ({ submitLoan, navigation }) => {
    const [loanDetails, setLoanDetails] = useState({
        amount: '',
        term: '',
    });

    const handleInputChange = (name, value) => {
        setLoanDetails({ ...loanDetails, [name]: value });
    };

    const handleSubmit = () => {
        if (!loanDetails.amount || !loanDetails.term) {
            Alert.alert('Error', 'Please fill out all fields.');
            return;
        }

        submitLoan(loanDetails);
        Alert.alert('Success', 'Your application was submitted.');
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>New Loan Application</Text>
            <TextInput
                style={styles.input}
                placeholder="Loan Amount"
                keyboardType="numeric"
                value={loanDetails.amount}
                onChangeText={(value) => handleInputChange('amount', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Loan Term (in months)"
                keyboardType="numeric"
                value={loanDetails.term}
                onChangeText={(value) => handleInputChange('term', value)}
            />
            <Button title="Submit Application" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, paddingHorizontal: 8 },
});

export default connect(null, { submitLoan })(LoanApplicationFormScreen);
