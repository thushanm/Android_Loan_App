import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../screen/LoginScreen";
import LoanListScreen from "../screen/LoanListScreen";
import LoanApplicationFormScreen from "../screen/LoanApplicationFormScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
    <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="LoanList" component={LoanListScreen} options={{ title: 'Loan Applications' }} />
            <Stack.Screen name="LoanApplicationForm" component={LoanApplicationFormScreen} options={{ title: 'Loan Application Form' }} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
