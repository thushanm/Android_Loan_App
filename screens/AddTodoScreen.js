
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTodoScreen = ({ navigation, route }) => {
  const [text, setText] = useState('');
  const { addTodo } = route.params;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter todo"
        value={text}
        onChangeText={setText}
      />
      <Button
        title="Add"
        onPress={() => {
          addTodo(text);
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
  },
});

export default AddTodoScreen;
