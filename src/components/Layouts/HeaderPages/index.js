import React from "react";
import { Feather } from '@expo/vector-icons';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute  } from '@react-navigation/native';

//importando estilos
import styles from './styles';
import logoImg from '../../../assets/logo.png';

export default function HeaderHomePage(){
    const navigation = useNavigation();

    function navigateBack(){
        navigation.goBack();
    }    
    return(
        <View style={styles.header}>
                <Image source={logoImg} />
                
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e02041"/>
                </TouchableOpacity>
        </View>
    );
}