import React from "react";
import { Feather } from '@expo/vector-icons';
import { View, Image, TouchableOpacity, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//importando estilos
import styles from './styles';
import logoImg from '../../../assets/logo.png';
import logoImgdark from '../../../assets/logodar.png';

export default function HeaderHomePage(){
    const navigation = useNavigation();
    const colorScheme = useColorScheme();
    const logomarca = colorScheme === 'light' ? logoImg : logoImgdark;

    function navigateBack(){
        navigation.goBack();
    }    
    return(
        <View style={styles.header}>
                <Image source={logomarca} />
                
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="x-circle" size={28} color="#00b1a9"/>
                </TouchableOpacity>
        </View>
    );
}