import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions as navigation } from '@react-navigation/routers';
import {StyleSheet, Text,  Button, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const SESSION_KEY = 'sessionlog'
const LoggingScreen = () =>{
  const [userName,setUserName]=useState('')
  const [password,setPassword]=useState('')

  useEffect(() => {
    const checkSession = async ()=>{
      const session = await  AsyncStorage.getItem(SESSION_KEY);
      if (session){
        navigation.replace('LoanList');
      }
    }
    checkSession();
  }, []);

  const handleLogin = async () =>{
    if (userName && password){
      await AsyncStorage.setItem(SESSION_KEY,'active')
      navigation.replace()
    }else {
      Alert.alert('password or username wong please try ageing');
    }
  };
  return(
    <SafeAreaView
      style={styles.container}>
      <Text style={styles.title}Bank Maneger Loging></Text>
      <TextInput
        style={styles.input}
        placeholder={"UserName"}
        value={username}
        onChangeText={setUserName}/>

      <TextInput
        style={styles.input}
        placeholder={"Password"}
        value={password}
        onChangeText={setPassword}
        secureTextEntry

      />
      <Button title={"Login"} onPress={handleLogin}/>


    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});
export default LoggingScreen;