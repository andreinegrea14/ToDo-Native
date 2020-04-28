import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Navigator from './src/HomeStack';


export default function App() {



  return (

    //     <TouchableWithoutFeedback onPress ={() => {
    //       Keyboard.dismiss();
    //     }}>
    //       <View style={styles.container}>
    //         <Header />
    //         <View style={styles.content}>
    //           <Add handleNewTodo={handleNewTodo} />
    //           <View style={styles.list}>
    //             <FlatList
    //               data={todos}
    //               renderItem={({ item }) => (
    //                 <TodoItem item={item} removeTodo={removeTodo} />
    //               )}
    //             />
    //           </View>
    //         </View>
    //       </View>
    //     </TouchableWithoutFeedback>

    < Navigator />
  );
}




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 10,
//     marginTop: 30,
//     justifyContent: 'flex-start',

//   },
//   content: {
//     marginTop: 20,
//     flex: 1,
//   },
//   list: {
//     paddingLeft: 30,
//     flex: 1,
//   },
// });
