import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ToDo } from './Interfaces';


export function TodoItem({ item, removeTodo }: { item: any, removeTodo: (key: string) => void }) {


    return (
        <View>
            <TouchableOpacity onPress={() => removeTodo(item.key)}>
                <Text style={styles.item} >
                    {item.text}
                    <Text>     {item.responsable}</Text>
                    <Text>     {item.dueDate}</Text>
                    <Text>     {item.addedDate}</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );

}


const styles = StyleSheet.create({
    item: {
        padding: 15,
        marginTop: 15,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        marginRight: 20,
    },

});