// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from "./src/navigation/AppNavigator";
import {Provider} from "react-redux";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

        <Provider>
            <AppNavigator/>
        </Provider>
    </NavigationContainer>
  );
};

export default App;
