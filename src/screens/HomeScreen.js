import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Text>User Profile</Text>
            </View>
            <View style={styles.section}>
                <Text>Add Employee</Text>
                <Button
                    title="Go to Add Employee"
                    onPress={() => navigation.navigate('AddEmployeeScreen')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    section: {
        marginBottom: 20,
    },
});

export default HomeScreen;
