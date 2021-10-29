import React, { useState, useEffect } from 'react';

import { useNavigation, useRoute  } from '@react-navigation/native';
import { View, FlatList, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // automatically switches bar style based on theme!

import api from '../../services/api';
import styles from './styles';
//estrutura do layout
import HeaderPages from "../../components/Layouts/HeaderPages";




export default function Consulta(){
    const colorScheme = useColorScheme();
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeTextInput = colorScheme === 'light' ? styles.lightThemeInput : styles.darkThemeInput;
    const statusbarcolor = colorScheme === 'light' ? 'dark' : 'light';
    const placecolor = colorScheme === 'light' ? '#333' : '#fff';

    const navigation = useNavigation();
    const route = useRoute();
    const ncm = route.params.ncm;

    //inicio

    const [ncmbusca, setNcm] = useState([]);
    const [total, setTotal] = useState(0);


    const [loading, setLoading] = useState(false);
    

    async function loadConsulta(){
        if(loading){
            return;
        }
        if(total > 0 & ncmbusca.length == total){
            return;
        }
        setLoading(true);

        const response = await api.get('ncm', {
            params: {
                q: ncm
              }
        });

        
        setNcm([...ncmbusca, ...response.data.data]);
        setTotal(response.headers['x-total-count']);
        setLoading(false);
    }

    useEffect(
        () => {
            loadConsulta();
        }       
    );

  
    return(       
        <>
        <StatusBar style={statusbarcolor} translucent={true} animated={true} />
        <View style={[styles.container, themeContainerStyle]}>
            <HeaderPages />
            
            <FlatList
                data={ncmbusca}
                keyExtractor={ncmbusca => String(ncmbusca.codigo)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadConsulta}
                onEndReachedThreshold={0.2}
                renderItem={(ncmbusca) => {
                    console.log(ncmbusca.item);
                    return (<></>);
                }}  
            />                 

        </View> 
        </>
    );
}