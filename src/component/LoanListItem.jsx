import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteLoanApplication } from '../redux/actions';
import { Colors } from '../utils/Colors';

const LoanListItem = ({ application, navigation }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        Alert.alert(
            'Confirm Deletion',
            'Are you sure you want to delete this application?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => dispatch(deleteLoanApplication(application.id)),
                },
            ],
        );
    };

    const handleEdit = () => {
        navigation.navigate('LoanApplicationForm', { application });
    };

    return (
        <View style={styles.card}>
            <Text style={styles.title}>{application.name}</Text>
            <Text>ID: ...{application.id.slice(-5)}</Text>
            <Text>Email: {application.email}</Text>
            <View style={styles.actions}>
                <Button title="Edit" onPress={handleEdit} color={Colors.secondary} />
                <Button title="Delete" onPress={handleDelete} color={Colors.danger} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: { backgroundColor: 'white', padding: 15, margin: 10, borderRadius: 8, elevation: 2 },
    title: { fontSize: 18, fontWeight: 'bold' },
    actions: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 },
});

export default LoanListItem;