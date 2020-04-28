import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export function Header() {

    return (
        <View style={styles.header}>
            <Text>ToDo App</Text>
            <Text>Keep Your Tasks Organized</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 20,
        backgroundColor: '#E5E9EF',
        paddingLeft: 20,
        paddingBottom: 20,
    },
    todos: {

    },

});