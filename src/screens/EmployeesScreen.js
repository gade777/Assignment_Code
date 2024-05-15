import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const EmployeesScreen = () => {
    const employees = useSelector((state) => state.employeeState.employees);

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
            <Text>{item.address}</Text>
            <Text>{item.city}</Text>
        </View>
    );

    return (
        <FlatList
            data={employees}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default EmployeesScreen;
