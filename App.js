import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddTodos from './components/AddTodos';

const App = () => {
  const [todos, setTodos] = useState([
    {title: 'Купить молоко', date: 'Jul 30 2022 17:22', key: 1},
    {title: 'Купить картошку', date: 'Jul 29 2022 09:02', key: 2},
    {title: 'Купить хлеб', date: 'Jul 28 2022 15:45', key: 3},
    {title: 'Купить сыр', date: 'Jul 27 2022 13:11', key: 4},
    {title: 'Купить пиво', date: 'Jul 26 2022 07:54', key: 5},
  ]);

  const addTodo = title => {
    setTodos(prev => [
      {
        title: title,
        key: Date.now().toString(),
        date: new Date().toString().slice(4, 21),
      },
      ...prev,
    ]);
    console.log('todos', todos);
  };

  const deleteHandler = key => {
    setTodos(prevState => prevState.filter(item => item.key !== key));
    console.log(key);
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddTodos onSubmit={addTodo} />
      <View>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <ListItem items={item} deleteHandler={deleteHandler} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});

export default App;
