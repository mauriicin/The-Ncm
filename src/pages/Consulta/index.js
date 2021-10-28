import React from "react";

import { useNavigation, useRoute  } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // automatically switches bar style based on theme!


import styles from './styles';
//estrutura do layout
import HeaderPages from "../../components/Layouts/HeaderPages";


export default function Consulta(){
    const colorScheme = useColorScheme();
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeTextInput = colorScheme === 'light' ? styles.lightThemeInput : styles.darkThemeInput;
    const statusbarcolor = colorScheme === 'light' ? 'dark' : 'light';
    const placecolor = colorScheme === 'light' ? '#333' : '#fff';

    const navigation = useNavigation();
    const route = useRoute();
    const ncm = route.params.ncm;

    


  
    return(       
        <>
        <StatusBar style={statusbarcolor} translucent={true} animated={true} />
        <View style={[styles.container, themeContainerStyle]}>
            <HeaderPages />

            <View>
                <Text style={[styles.text, themeTextStyle]}> {ncm} </Text>
            </View>         

        </View> 
        </>
    );
}