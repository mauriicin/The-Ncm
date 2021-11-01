import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'

const Rotas = createBottomTabNavigator();

import HomePage from './pages/HomePage';
import Cest from './pages/Cest';
import Cnpj from './pages/Cnpj';
import Sobre from './pages/Sobre';
import ConsultaNcm from './pages/ConsultaNcm';
import ConsultaCest from './pages/ConsultaNcm';
import ConsultaCnpj from './pages/ConsultaCnpj';

export default function Routes(){
    const scheme = useColorScheme();
    return(
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Rotas.Navigator 
             screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Ncm') {
                    iconName = focused ? 'bookmark-check' : 'bookmark-check-outline';
                    } 
                    else if (route.name === 'Cest') {
                        iconName = focused ? 'view-list' : 'view-list-outline';
                    } 
                    else if (route.name === 'Cnpj') {
                        iconName = focused ? 'badge-account-horizontal' : 'badge-account-horizontal-outline';
                    } 
                    else if (route.name === 'Sobre') {
                        iconName = focused ? 'heart' : 'heart-outline';
                    }

                    // You can return any component that you like here!
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#00b1a9',
                tabBarInactiveTintColor: '#333333',
                headerShown: false,
                })}>
                <Rotas.Screen name="Ncm" component={HomePage} />
                <Rotas.Screen name="Cest" component={Cest} />
                <Rotas.Screen name="Cnpj" component={Cnpj} options={{ tabBarButton: () => null }} />
                <Rotas.Screen name="Sobre" component={Sobre} />                
                
                <Rotas.Screen name="ConsultaNcm" component={ConsultaNcm} options={{ tabBarButton: () => null }} />
                <Rotas.Screen name="ConsultaCest" component={ConsultaCest} options={{ tabBarButton: () => null }} />
                <Rotas.Screen name="ConsultaCnpj" component={ConsultaCnpj} options={{ tabBarButton: () => null }} />

            </Rotas.Navigator>
        </NavigationContainer>
    );
}

