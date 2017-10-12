import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Todo () => {
  return (
    <View style={styles.container}>
      <Text>TODO</Text>
    </View>
  );
};

export default Todo;
