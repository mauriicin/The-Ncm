import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, useColorScheme, TextInput, ScrollView, Alert } from 'react-native';


import styles from './styles';
//estrutura do layout
import HeaderHomePage from "../../components/Layouts/HeaderHomePage";
import Footer from "../../components/Layouts/Footer";


export default function HomePage(){
    const colorScheme = useColorScheme();
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeTextInput = colorScheme === 'light' ? styles.lightThemeInput : styles.darkThemeInput;
    const statusbarcolor = colorScheme === 'light' ? 'dark' : 'light';
    const placecolor = colorScheme === 'light' ? '#333' : '#fff';
     
    //definindo variaveis
    const [inputCest, setCest] = useState(null);
    const navigation = useNavigation();
    function navigateToConsulta(cest){
        navigation.navigate('ConsultaCest', {cest});
    }
    //consulta CNPJ 
    function handleSubmit(data){     
        if(data.length < 4){
            return Alert.alert(
                "Erro",
                "Por favor, digite um Cest válido.",
                [
                  { text: "OK"}
                ]
            );
        }else if(!data){
            return Alert.alert(
                "Erro",
                "O Cest não foi preenchido.",
                [
                  { text: "OK"}
                ]
            );
        }else{
            setCest(null);
            return navigateToConsulta(data);
        }
    }
      
    return(       
        <>
        <StatusBar style={statusbarcolor} translucent={true} animated={true} />
        <View style={[styles.container, themeContainerStyle]}>
            <ScrollView>
                <HeaderHomePage />
                
                <View style={styles.box}>
                    <Text style={[styles.texth1, themeTextStyle]}>Consulta de Cest</Text>
                    <Text style={[styles.textp, themeTextStyle]}>O jeito mais fácil de encontrar o Código Especificador da Substituição Tributária. Todas as empresas contribuintes do ICMS deverão especificar um CEST nos produtos quando emitir NFes e NFCes.</Text>
                 </View> 

                <TextInput 
                    maxLength={8}
                    style={[styles.inputhome, themeTextInput]} 
                    placeholderTextColor={placecolor} 
                    onChangeText={setCest} 
                    value={inputCest} 
                    placeholder="Digite o código Cest para pesquisar"
                    keyboardType="numeric"
                />
               
                <TouchableOpacity 
                style={styles.button} 
                onPress={() => handleSubmit(inputCest)}
                >
                    <Text style={styles.buttontext}>
                        <Feather name="search" size={28} /> 
                        Consultar
                    </Text>
                </TouchableOpacity>
                               
                <Footer />
        </ScrollView>
        </View> 
        </>
    );
}