import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import { TodoItem } from './TodoItem';
import { Header } from './Header';
import { useNavigation, useNavigationEvents } from 'react-navigation-hooks';
import { getToDos, ToDo2, removeToDo } from './todoServices';


export function List() {

    const navigation = useNavigation();


    const [todos, setTodos] = useState<ToDo2[]>([]);

    const routingPage = async () => {
        navigation.navigate('Add');
    }

    const updateToDos = async () => {
        const data = await getToDos();
        setTodos(data);
    }

    useEffect(() => {
        updateToDos();
    }, []);

    const loading = async () => {
        await updateToDos();
    }

    loading();

    // useNavigationEvents(async (e) => {
    //     if (e.type === "didFocus") {
    //         await updateToDos();
    //     }
    //     else {
    //         console.log('eroare la incarcare');s
    //     }
    // });


    const handleRemoveToDo = async (key: string) => {
        await removeToDo(todos.find(o => o.key == key)!);
        // await updateToDos();
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({ item }) => (
                            <TodoItem item={item} removeTodo={handleRemoveToDo} />
                        )}
                    />
                </View>
                <TouchableOpacity onPress={routingPage} style={styles.buton}>
                    <Text style={styles.butonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        justifyContent: 'flex-start',

    },
    content: {
        marginTop: 20,
        flex: 1,
    },
    list: {
        paddingLeft: 30,
        flex: 1,
    },
    buton: {
        position: 'absolute',
        right: 40,
        bottom: 50,
        backgroundColor: '#E91E63',
        width: 70,
        height: 70,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    butonText: {
        color: '#fff',
        fontSize: 24,
    },
});
