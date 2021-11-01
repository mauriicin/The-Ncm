import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';

const Rotas = createBottomTabNavigator();

import HomePage from './pages/HomePage';
import Consulta from './pages/Consulta';

export default function Routes(){
    const scheme = useColorScheme();
    return(
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Rotas.Navigator 
             screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HomePage') {
                    iconName = focused
                        ? 'home'
                        : 'home';
                    } else if (route.name === 'Consulta') {
                    iconName = focused ? 'search' : 'search';
                    }

                    // You can return any component that you like here!
                    return <Feather name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#00b1a9',
                tabBarInactiveTintColor: '#333333',
                headerShown: false,
                })}>
                <Rotas.Screen name="HomePage" component={HomePage} />
                <Rotas.Screen name="Consulta" component={Consulta} />
            </Rotas.Navigator>
        </NavigationContainer>
    );
}

