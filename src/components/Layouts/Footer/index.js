import React from "react";
import { View, Text, useColorScheme } from 'react-native';


//importando estilos
import styles from './styles';

export default function Footer(){
    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;

    return(
        <View style={styles.footer}>
            <Text style={[styles.footerText, themeTextStyle]}>
            Feito com  por Maurício Souza.</Text>           
        </View>   
    );
}