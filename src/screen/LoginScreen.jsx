import React, { useEffect, useState } from 'react';
// Correct: Import all components from 'react-native'
import { SafeAreaView, StyleSheet, Text, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SESSION_KEY = 'manager_session';

// Correct: Receive `navigation` as a prop
const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState(''); // Corrected state variable name to lowercase 'u'
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
            await AsyncStorage.setItem(SESSION_KEY, 'active');
            navigation.replace('LoanList'); // Correct: Pass the screen name
        } else {
            Alert.alert('Login Failed', 'Please enter a username and password.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Correct: Text must be inside the tags */}
            <Text style={styles.title}>Bank Manager Login</Text>
            <TextInput
                style={styles.input}
                placeholder={"Username"}
                value={username} // Correct: Matches state variable name
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder={"Password"}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {/* Correct: Pass the function, don't call it */}
            <Button title={"Login"} onPress={handleLogin} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
});

export default LoginScreen;