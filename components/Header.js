import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Список дел</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 10,
    margin: 10,
    backgroundColor: '#2c32a4',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontStyle: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default Header;
