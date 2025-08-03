
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const TodoItem = ({ todo, deleteTodo, updateTodo, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => toggleComplete(todo.id)}>
        <Text style={{ ...styles.text,color:'red', textDecorationLine: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </Text>
      </TouchableOpacity>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={newText}
          onChangeText={setNewText}
        />
      ) : (
        <Text style={styles.text}>{todo.text}</Text>
      )}
      {isEditing ? (
        <Button
          title="Save"
          onPress={() => {
            updateTodo(todo.id, newText);
            setIsEditing(false);
          }}
        />
      ) : (
        <Button title="Update" onPress={() => setIsEditing(true)} />
      )}
      <Button title="Delete" onPress={() => deleteTodo(todo.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginRight: 8,
  },
});

export default TodoItem;
