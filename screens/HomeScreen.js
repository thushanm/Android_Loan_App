// HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import TodoItem from '../components/TodoItem';

const HomeScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now().toString(), text: todo, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.dateTime}>
        {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
      </Text>
      <Button title="Add Todo" onPress={() => navigation.navigate('AddTodo', { addTodo })} />
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TodoItem todo={item} deleteTodo={deleteTodo} updateTodo={updateTodo} toggleComplete={toggleComplete} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  dateTime: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;
