import React from "react";
import { View, Image, useColorScheme } from 'react-native';

//importando estilos
import styles from './styles';
import logoImg from '../../../assets/logo.png';
import logoImgdark from '../../../assets/logodar.png';

export default function HeaderHomePage(){
    const colorScheme = useColorScheme();
    const logomarca = colorScheme === 'light' ? logoImg : logoImgdark;
    
    return(
        <View style={styles.header}>
            <Image source={logomarca} />                
        </View>   
    );
}