import React from 'react';
import 'react-native-gesture-handler';
import AppNavigater from "./src/navigation/AppNavigater";
import {NavigationContainer} from '@react-navigation/native';


function App() {
    return (
        <NavigationContainer>
            <AppNavigater/>
        </NavigationContainer>
    );
}

export default App;