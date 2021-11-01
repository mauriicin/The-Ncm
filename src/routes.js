import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';

const Rotas = createBottomTabNavigator();

import HomePage from './pages/HomePage';
import ConsultaNcm from './pages/ConsultaNcm';
import Sobre from './pages/Sobre';

export default function Routes(){
    const scheme = useColorScheme();
    return(
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Rotas.Navigator 
             screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'NCM') {
                    iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'Sobre') {
                    iconName = focused ? 'heart' : 'heart';
                    } 

                    // You can return any component that you like here!
                    return <Feather name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#00b1a9',
                tabBarInactiveTintColor: '#333333',
                headerShown: false,
                })}>
                <Rotas.Screen name="NCM" component={HomePage} />
                <Rotas.Screen name="Sobre" component={Sobre} />                
                
                <Rotas.Screen name="ConsultaNcm" component={ConsultaNcm} options={{ tabBarButton: () => null }} />

            </Rotas.Navigator>
        </NavigationContainer>
    );
}

