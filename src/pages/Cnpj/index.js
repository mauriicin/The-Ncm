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
    const [inputcnpj, setCnpj] = useState(null);
    const navigation = useNavigation();
    function navigateToConsulta(cnpj){
        navigation.navigate('ConsultaCnpj', {cnpj});
    }
    //consulta CNPJ 
    function handleSubmit(data){     
        if(data.length < 14){
            return Alert.alert(
                "Erro",
                "Por favor, digite um CNPJ válido.",
                [
                  { text: "OK"}
                ]
            );
        }else if(!data){
            return Alert.alert(
                "Erro",
                "O CNPJ não foi preenchido.",
                [
                  { text: "OK"}
                ]
            );
        }else{
            setCnpj(null);
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
                    <Text style={[styles.texth1, themeTextStyle]}>Consulta de CNPJ</Text>
                    <Text style={[styles.textp, themeTextStyle]}>O Cadastro Nacional da Pessoa Jurídica é um número único que identifica uma pessoa jurídica e outros tipos de arranjo jurídico sem personalidade jurídica junto à Receita Federal.</Text>
                </View> 

                <TextInput 
                    maxLength={14}
                    style={[styles.inputhome, themeTextInput]} 
                    placeholderTextColor={placecolor} 
                    onChangeText={setCnpj} 
                    value={inputcnpj} 
                    placeholder="Digite o código CNPJ para pesquisar"
                    keyboardType="numeric"
                />
               
                <TouchableOpacity 
                style={styles.button} 
                onPress={() => handleSubmit(inputcnpj)}
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