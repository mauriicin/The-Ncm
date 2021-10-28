import React from "react";

import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // automatically switches bar style based on theme!


import styles from './styles';
//estrutura do layout
import HeaderHomePage from "../../components/Layouts/HeaderHomePage";


export default function HomePage(){
    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;







    

  
    return(       
        <View style={[styles.container, themeContainerStyle]}>
            <HeaderHomePage />

            <View>
                <Text style={[styles.text, themeTextStyle]}>Hello World {colorScheme} </Text>
            </View>           

        </View> 
    );
}