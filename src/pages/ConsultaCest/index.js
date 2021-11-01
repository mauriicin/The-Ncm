import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute  } from '@react-navigation/native';
import { View, FlatList, Text, useColorScheme, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//consulta api
import api from '../../services/api';
import styles from './styles';
//estrutura do layout
import HeaderPages from "../../components/Layouts/HeaderPages";
import Footer from "../../components/Layouts/Footer";
import Ads from "../../components/Layouts/AdMob"

export default function ConsultaCest(){
    const colorScheme = useColorScheme();
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeTextInput = colorScheme === 'light' ? styles.lightThemeInput : styles.darkThemeInput;
    const statusbarcolor = colorScheme === 'light' ? 'dark' : 'light';
    const placecolor = colorScheme === 'light' ? '#333' : '#fff';
    const navigation = useNavigation();
    const route = useRoute();
  
    //recebe dados e retorna dados
    const ncm = route.params.ncm;
    const [ncmBusca, setncmBusca] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);

    async function loadConsulta(){
        if(loading){
            return null;
        }
        if(total > 0 & ncmBusca.length == total){
            return ;
        }
        setLoading(true);

        const response = await api.get('ncm', {
            params: {
                q: ncm
            }
        });        
        if(response.data.totalDocs == '0'){
            return Alert.alert(
                "Erro",
                "Opss 👎 não encontramos nenhuma informação para a consulta realizada",
                [
                  { text: "OK", onPress: () => navigation.goBack()}
                ]
            );
        } else {        
            setncmBusca(response.data.data);
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
                data={ncmBusca}
                keyExtractor={ncmBusca => String(ncmBusca.codigo)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadConsulta}
                onEndReachedThreshold={0.2}
                renderItem={ncmBusca => (
                    <>
                        <View style={styles.item}>
                            <Text style={[styles.itemName, themeTextStyle]}>Código NCM:</Text>
                            <Text style={[styles.itemData, themeTextStyle]}>{ncmBusca.item.codigo}</Text>

                            <Text style={[styles.itemName, themeTextStyle]}>Descrição</Text>
                            <Text style={[styles.itemData, themeTextStyle]}>{ncmBusca.item.descricao}</Text>
                        </View>
                    </>
                )}
            />
        <Footer />                
        </View>  
        </>
    );
}