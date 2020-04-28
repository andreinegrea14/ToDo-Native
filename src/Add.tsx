import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Form } from './Formik';
import { useNavigation } from 'react-navigation-hooks';
import { addToDo } from './todoServices';
import { ToDo } from './Interfaces';


export function Add() {

    const navigation = useNavigation();

    const addTodo = async (newTodo: ToDo) => {
        if (newTodo.text.length > 0) {
            newTodo.key = Math.random().toString();
            console.log(newTodo);
            await addToDo(newTodo);
            navigation.navigate('List');
        }
        else {
            console.log('empty todo');
        }

    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View>
                <Form addTodo={addTodo} />
            </View>
        </TouchableWithoutFeedback>
    );
}

