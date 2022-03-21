import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute  } from '@react-navigation/native';
import { View, FlatList, Text, useColorScheme, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//consulta api
import apibrasil from '../../services/apibrasil';
import styles from './styles';
//estrutura do layout
import HeaderPages from "../../components/Layouts/HeaderCnpj";
import Footer from "../../components/Layouts/Footer";
import Ads from "../../components/Layouts/AdMob"

export default function ConsultaCnpj(){
    const colorScheme = useColorScheme();
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeTextInput = colorScheme === 'light' ? styles.lightThemeInput : styles.darkThemeInput;
    const statusbarcolor = colorScheme === 'light' ? 'dark' : 'light';
    const navigation = useNavigation();
    const route = useRoute();
  
    //recebe dados e retorna dados
    const cnpj = route.params.cnpj;
    const [cnpjBusca, setcnpjBusca] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);

    async function loadConsulta(){
        if(loading){
            return null;
        }
        if(total > 0 & cnpjBusca.length == total){
            return ;
        }
        setLoading(true);

        const response = await apibrasil.get('cnpj/v1/' + cnpj);         
        
        if(response.statusCode == 404){
            return Alert.alert(
                "Erro",
                "Opss 👎 não encontramos nenhuma informação para a consulta realizada",
                [
                  { text: "OK", onPress: () => navigation.goBack()}
                ]
            );
        } else {        
            setcnpjBusca(response.data);
            setTotal(response.headers['x-total-count']);
            setLoading(false);
        }
    }

    useEffect(() => {
        loadConsulta();
    }, []);


    return(
        <>
         <StatusBar style={statusbarcolor} translucent={true} animated={true} />
        <Ads />
        <View style={[styles.container, themeContainerStyle]}>
            <HeaderPages />
               
            <FlatList
                data={cnpjBusca}
                keyExtractor={cnpjBusca => String(cnpjBusca.cnpj)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadConsulta}
                onEndReachedThreshold={0.2}
                renderItem={cnpjBusca => (
                    <>
                        <View style={styles.item}>
                            <Text style={[styles.itemName, themeTextStyle]}>Código NCM:</Text>
                            <Text style={[styles.itemData, themeTextStyle]}>{cnpjBusca.item.cnpj}</Text>

                            <Text style={[styles.itemName, themeTextStyle]}>Descrição</Text>
                            <Text style={[styles.itemData, themeTextStyle]}>{cnpjBusca.item.descricao_matriz_filial}</Text>
                        </View>
                    </>
                )}
            />
        <Footer />                
        </View> 
        </>
    );
}