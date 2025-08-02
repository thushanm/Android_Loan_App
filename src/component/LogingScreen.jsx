import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Alert, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SESSION_KEY = 'manager_session';

const LogingScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        const checkSession = async () => {
            const session = await AsyncStorage.getItem(SESSION_KEY);
            if (session) {
                navigation.replace('LoanList');
            }
        };
        checkSession();
    }, []);

    const handleLogin = async () => {

        if (username && password) {
            await AsyncStorage.setItem(SESSION_KEY, 'active'); // Create session
            navigation.replace('LoanList');
        } else {
            Alert.alert('Login Failed', 'Please enter a username and password.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Bank Manager Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    input: { height: 45, borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginBottom: 15, paddingHorizontal: 10 },
});

export default LogingScreen;