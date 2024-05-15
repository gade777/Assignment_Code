// LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { loginUser } from '../utils/api'; 

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await loginUser(username, password);
            if (response.success) {
                navigation.navigate('Home'); 
            } else {
                setError(response.error || 'Invalid login credentials');
            }
        } catch (error) {
            setError('An error occurred while logging in');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Username or Email"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: '80%',
        marginBottom: 20,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    error: {
        color: 'red',
        marginBottom: 20,
    },
});

export default LoginScreen;
