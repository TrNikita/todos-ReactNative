import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const ListItem = ({items, deleteHandler}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => deleteHandler(items.key)}
      key={items.key}>
      <Text style={styles.text}>{items.title}</Text>
      <Text style={styles.date}>Добавлено: {items.date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 0,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#fafafa',
    width: '60%',
    marginLeft: '20%',
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
    color: 'black',
  },
  date: {
    textAlign: 'center',
    fontSize: 12,
    fontStyle: 'italic',
    padding: 2,
  },
});

export default ListItem;
