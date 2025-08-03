import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../redux/actions';

const LoginScreen = ({ user, error, login, navigation }) => {
    const [username, setUsername] = useState('test');
    const [password, setPassword] = useState('password');

    const handleLogin = () => {
        login(username, password);
    };


    useEffect(() => {
        if (user) {
            navigation.navigate('LoanList');
        }
    }, [user, navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Loan App Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username (use 'test')"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password (use 'password')"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, paddingHorizontal: 8 },
    error: { color: 'red', textAlign: 'center', marginTop: 10 },
});

const mapStateToProps = (state) => ({
    user: state.auth.user,
    error: state.auth.error,
});

export default connect(mapStateToProps, { login })(LoginScreen);
