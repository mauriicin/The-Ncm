import React from "react";

import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, useColorScheme, TextInput, ScrollView } from 'react-native';


import styles from './styles';
//estrutura do layout
import HeaderHomePage from "../../components/Layouts/HeaderHomePage";


export default function HomePage(){
    const colorScheme = useColorScheme();
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeTextInput = colorScheme === 'light' ? styles.lightThemeInput : styles.darkThemeInput;

    
    
    //definindo variaveis
    const [number, onChangeNumber] = React.useState(null);

    const onPress = () => setCount(prevCount => prevCount + 1);

  
    return(       
        <View style={[styles.container, themeContainerStyle]}>
            <ScrollView>
                <HeaderHomePage />
                
                <View style={styles.box}>
                    <Text style={[styles.texth1, themeTextStyle]}>Consulta de NCM</Text>
                    <Text style={[styles.textp, themeTextStyle]}>Serviço gratuito de consulta por código e descrição da Nomenclatura Comum do Mercosul.</Text>
                </View> 

                <TextInput style={[styles.inputhome, themeTextInput]} placeholderTextColor="" onChangeText={onChangeNumber} value={number} placeholder="Digite o código NCM para pesquisar"keyboardType="numeric"/>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.buttontext}>Consultar</Text>
                </TouchableOpacity>
                
                <View style={styles.box}>
                    <Text style={[styles.scrolltexth1, themeTextStyle]}>O que é NCM?</Text>            
                    <Text style={[styles.scrolltextp, themeTextStyle]}>NCM significa "Nomenclatura Comum do Mercosul" e trata-se de um código de oito dígitos estabelecido pelo Governo Brasileiro para identificar a natureza das mercadorias. A consulta a NCM Consiste na consulta da Classificação Fiscal de Mercadoria.</Text>       
                    <Text style={[styles.scrolltextp, themeTextStyle]}>Por meio da classificação fiscal da mercadoria, são identificados os diversos tributos aplicáveis ao produto, tais como:</Text>
                    <Text style={[styles.scrolltextp1, themeTextStyle]}>II: Imposto de importação;</Text>
                    <Text style={[styles.scrolltextp1, themeTextStyle]}>IPI – Imposto sobre Produtos Industrializados;</Text>
                    <Text style={[styles.scrolltextp1, themeTextStyle]}>PIS, PASEP E COFINS – Importação;</Text>
                    <Text style={[styles.scrolltextp1, themeTextStyle]}>ICMS.</Text>                   
                    <Text style={[styles.scrolltextp, themeTextStyle]}>A classificação incorreta do produto pode trazer sérios problemas ao contribuinte, como por exemplo uma penalidade para a classificação fiscal inadequada e o recolhimento a menor de impostos e contribuições.</Text>
                    <Text style={[styles.scrolltextp, themeTextStyle]}>Nas operações do comércio exterior, há previsão de multa sobre o valor aduaneiro da mercadoria classificada incorretamente.</Text>
                </View>
        </ScrollView>
        </View> 
    );
}