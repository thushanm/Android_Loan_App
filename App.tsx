import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

function App() {
    return (
        // The Provider makes the Redux store available to the whole app
        <Provider store={Store}>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </Provider>
    );
}

export default App;