import React from "react";
import { View, Image } from 'react-native';

//importando estilos
import styles from './styles';
import logoImg from '../../../assets/logo.png';

export default function HeaderHomePage(){
    
    return(
        <View style={styles.header}>
            <Image source={logoImg} />                
        </View>   
    );
}