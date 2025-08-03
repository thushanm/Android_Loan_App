import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screen/LoginScreen';
import LoanListScreen from '../screen/LoanListScreen';
import LoanApplicationFormScreen from '../screen/LoanApplicationFormScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
                <Stack.Screen name="LoanList" component={LoanListScreen} options={{ title: 'Your Loans' }} />
                <Stack.Screen name="LoanApplicationForm" component={LoanApplicationFormScreen} options={{ title: 'Apply for a Loan' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator; // This export was missing
