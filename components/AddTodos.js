import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, View, Alert} from 'react-native';

const AddTodos = ({onSubmit}) => {
  const [text, setText] = useState('');

  const pressHandler = () => {
    if (text.trim()) {
      onSubmit(text);
      setText('');
    } else {
      Alert.alert('Название не может быть пустым');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Впишите задачу..."
        placeholderTextColor={'white'}
      />
      <Button onPress={pressHandler} title="добавить" />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 5,
    padding: 5,
  },
  input: {
    fontSize: 15,
    textShadowColor: 'white',
    fontStyle: 'italic',
    borderBottomWidth: 1,
    borderColor: 'white',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: '70%',
  },
});

export default AddTodos;
