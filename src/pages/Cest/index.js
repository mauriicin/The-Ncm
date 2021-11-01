import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { View, Text,  useColorScheme, ScrollView} from 'react-native';


import styles from './styles';
//estrutura do layout
import HeaderHomePage from "../../components/Layouts/HeaderHomePage";
import Footer from "../../components/Layouts/Footer";

export default function Cest(){
    const colorScheme = useColorScheme();
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const statusbarcolor = colorScheme === 'light' ? 'dark' : 'light';
           
    return(       
        <>
        <StatusBar style={statusbarcolor} translucent={true} animated={true} />
        <View style={[styles.container, themeContainerStyle]}>
            <ScrollView>
                <HeaderHomePage />                              
                
                <View style={styles.box}>
                    <Text style={[styles.scrolltexth1, themeTextStyle]}>O que é The NCM?</Text>            
                    <Text style={[styles.scrolltextp, themeTextStyle]}>O The NCM foi desenvolvido para agilizar algumas consultas sem precisar de acesso ao um computador, usamos sistema integrados com a receita federal para fazer consulta 100% confiaveis.</Text>       
                    <Text style={[styles.scrolltextp, themeTextStyle]}>Estamos em desenvolvimento, soltaremos novas versões, com mais funções que ajude você a otimizar seu dia.</Text>       
                </View>
                
                <Footer />
        </ScrollView>
        </View> 
        </>
    );
}