// const handleNewTodoChange = (todo: React.SetStateAction<{
//     key: any;
//     text: string;
//     responsable: string;
//     dueDate: string;
//     addedDate: string;
// }>) => {
//     setText(todo);
// }




// const removeTodo = (key: any) => {
//     setTodos((delTodo) => {
//         return delTodo.filter((todo: { key: any; }) => todo.key !== key);
//     });
// }









// const handleNewTodo = (text: string) => {
//     if (text.length > 0) {
//         setTodos((setNewTodo: any) => {
//             return [
//                 { text: text, key: Math.random().toString() },
//                 ...setNewTodo
//             ]
//         })
//         navigation.navigate('List', todos); //.push
//         // cu navigation.push si <FlatList /> in Add merge
//         console.log(todos);
//     }
//     else {
//         Alert.alert('ERROR', 'You cannot enter empty todos', [
//             { text: 'Ok', onPress: () => console.log('alert closed') }
//         ]);
//     }


// }
