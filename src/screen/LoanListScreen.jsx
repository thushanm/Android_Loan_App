import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Button, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions';

import { Colors } from '../utils/Colors';
import LoanListItem from "../component/LoanListItem";

const LoanListScreen = ({ navigation }) => {
    const applications = useSelector(state => state.loanReducer.applications);
    const dispatch = useDispatch();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ marginRight: 10 }}>
                    <Button onPress={handleLogout} title="Logout" color={Colors.danger} />
                </View>
            ),
        });
    }, [navigation]);

    const handleLogout = () => {
        dispatch(logout());
        navigation.replace('Login');
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={applications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <LoanListItem
                        application={item}
                        navigation={navigation}
                    />
                )}
                ListEmptyComponent={<Text style={styles.emptyText}>No applications found.</Text>}
            />
            <View style={styles.addButton}>
                <Button title="Add New Application" onPress={() => navigation.navigate('LoanApplicationForm')} color={Colors.primary} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.lightGray },
    emptyText: { textAlign: 'center', marginTop: 50, fontSize: 16 },
    addButton: { margin: 15 },
});

export default LoanListScreen;