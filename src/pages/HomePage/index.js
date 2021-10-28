import React from "react";

import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, useColorScheme, TextInput, Button } from 'react-native';


import styles from './styles';
//estrutura do layout
import HeaderHomePage from "../../components/Layouts/HeaderHomePage";


export default function HomePage(){
    const colorScheme = useColorScheme();
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeTextInput = colorScheme === 'light' ? styles.lightThemeInput : styles.darkThemeInput;
    const themeTextButton = colorScheme === 'light' ? styles.lightThemeButton : styles.darkThemeButton;
    //definindo variaveis
    const [number, onChangeNumber] = React.useState(null);

    
    const onPress = () => setCount(prevCount => prevCount + 1);

    


  
    return(       
        <View style={[styles.container, themeContainerStyle]}>
            <HeaderHomePage />

            
                <Text style={[styles.text, themeTextStyle]}>Hello World {colorScheme} </Text>
                
                <TextInput style={[styles.inputhome, themeTextInput]} onChangeText={onChangeNumber} value={number} placeholder="Digite o código NCM para pesquisar"keyboardType="numeric"/>

                <TouchableOpacity
                style={[styles.button, themeTextButton]}
                onPress={onPress}
                >
                    <Text>Consultar</Text>
                </TouchableOpacity>


                    

        </View> 
    );
}