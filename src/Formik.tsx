import React from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';
import { Formik } from 'formik';
import { ToDo } from './Interfaces';



export function Form({ addTodo }: { addTodo: (p: ToDo) => void }) {

    return (
        <Formik
            initialValues={{ key: '', text: '', responsable: 'Andrei', dueDate: '', addedDate: '' }}
            onSubmit={(values) => {
                addTodo(values);
            }}
        >
            {(props) => (
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='text'
                        onChangeText={props.handleChange('text')}
                        value={props.values.text}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='responsable'
                        onChangeText={props.handleChange('responsable')}
                        value={props.values.responsable}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='dueDate'
                        onChangeText={props.handleChange('dueDate')}
                        value={props.values.dueDate}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='addedDate'
                        onChangeText={props.handleChange('addedDate')}
                        value={props.values.addedDate}
                    />
                    <Button title='add todo' color='#1976D2' onPress={props.handleSubmit} />

                </View>
            )}
        </Formik>
    );
}


const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginTop: 20,
    },

})