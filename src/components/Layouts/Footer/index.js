import React from "react";
import { View, Text, useColorScheme } from 'react-native';

//importando estilos
import styles from './styles';

export default function Footer(){
    const colorScheme = useColorScheme();
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeTextInput = colorScheme === 'light' ? styles.lightThemeInput : styles.darkThemeInput;
    const statusbarcolor = colorScheme === 'light' ? 'dark' : 'light';
    const placecolor = colorScheme === 'light' ? '#333' : '#fff';
    
    return(
        <View style={styles.footer}>
            <Text style={[styles.footerText, themeTextStyle]}>Desenvolvido por Maurício Souza.</Text>           
        </View>   
    );
}