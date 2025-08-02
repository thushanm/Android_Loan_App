import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogingScreen from "../component/LogingScreen";

// import LoanListScreen from '../screen/LoanListScreen';
// import LoanApplicationFormScreen from '../screen/LoanApplicationFormScreen';

const Stack = createStackNavigator();

const AppNavigater = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={LogingScreen}
                options={{ headerShown: false }}
            />
            {/*<Stack.Screen*/}
            {/*    name="LoanList"*/}
            {/*    component={LoanListScreen}*/}
            {/*    options={{ title: 'Loan Applications' }}*/}
            {/*/>*/}
            {/*<Stack.Screen*/}
            {/*    name="LoanApplicationForm"*/}
            {/*    component={LoanApplicationFormScreen}*/}
            {/*    options={{ title: 'Loan Application Form' }}*/}
            {/*/>*/}
        </Stack.Navigator>
    );
};

export default AppNavigater;