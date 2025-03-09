// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './pages/WelcomeScreen.js';
import MemberSign from './pages/MemberSign.js';
import MemberResult from './pages/MemberResult.js';


const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="WelcomeScreen" component={Welcome} />
                <Stack.Screen name="MemberSign" component={MemberSign} />
                <Stack.Screen name="MemberResultScreen" component={MemberResult} />
            </Stack.Navigator>
        </NavigationContainer>
    ); 
}

export default App;