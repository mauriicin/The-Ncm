import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Rotas = createNativeStackNavigator();

import HomePage from './pages/HomePage';

export default function Routes(){
    return(
        <NavigationContainer>
            <Rotas.Navigator screenOptions={{ headerShown: false }}>
                <Rotas.Screen name="HomePage" component={HomePage} />
            </Rotas.Navigator>
        </NavigationContainer>
    );
}

