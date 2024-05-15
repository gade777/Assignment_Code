import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/actions/employeeActions';

const AddEmployeeScreen = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleAddEmployee = () => {
        const employee = { name, age, address, city };
        dispatch(addEmployee(employee));
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
            <TextInput placeholder="Age" value={age} onChangeText={setAge} style={styles.input} />
            <TextInput placeholder="Address" value={address} onChangeText={setAddress} style={styles.input} />
            <TextInput placeholder="City" value={city} onChangeText={setCity} style={styles.input} />
            <Button title="Add Employee" onPress={handleAddEmployee} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
});

export default AddEmployeeScreen;
