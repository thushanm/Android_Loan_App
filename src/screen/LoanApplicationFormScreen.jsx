import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Alert, Text, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { addLoanApplication, updateLoanApplication } from '../redux/actions';
import { Colors } from '../utils/Colors';

const LoanApplicationFormScreen = ({ route, navigation }) => {
    const existingApp = route.params?.application;
    const dispatch = useDispatch();

    const [name, setName] = useState(existingApp?.name || '');
    const [email, setEmail] = useState(existingApp?.email || '');
    const [telephone, setTelephone] = useState(existingApp?.telephone || '');
    const [occupation, setOccupation] = useState(existingApp?.occupation || '');
    const [salary, setSalary] = useState(existingApp?.salary || '');

    const handleSubmit = () => {
        if (!name || !email || !telephone || !occupation || !salary) {
            Alert.alert('Validation Error', 'All fields must be filled.');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            Alert.alert('Validation Error', 'Please enter a valid email address.');
            return;
        }
        if (isNaN(Number(salary))) {
            Alert.alert('Validation Error', 'Salary must be a number.');
            return;
        }

        const applicationData = { name, email, telephone, occupation, salary };

        if (existingApp) {
            dispatch(updateLoanApplication({ ...applicationData, id: existingApp.id }));
        } else {
            dispatch(addLoanApplication({ ...applicationData, id: Date.now().toString() }));
        }
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
                <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address"/>
                <TextInput style={styles.input} placeholder="Telephone" value={telephone} onChangeText={setTelephone} keyboardType="phone-pad"/>
                <TextInput style={styles.input} placeholder="Occupation" value={occupation} onChangeText={setOccupation} />
                <TextInput style={styles.input} placeholder="Monthly Salary" value={salary} onChangeText={setSalary} keyboardType="numeric"/>
                <Button title={existingApp ? "Update Application" : "Submit Application"} onPress={handleSubmit} color={Colors.primary} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: Colors.lightGray },
    input: { height: 45, borderColor: Colors.gray, borderWidth: 1, borderRadius: 5, marginBottom: 15, paddingHorizontal: 10, backgroundColor: Colors.white },
});

export default LoanApplicationFormScreen;