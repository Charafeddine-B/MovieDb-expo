import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetails from '../MovieDetails';
import Filminfo from '../Filminfo';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Filminfo}>
                </Stack.Screen>
                <Stack.Screen name="details" component={Filminfo}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

    );
};
export default MyStack