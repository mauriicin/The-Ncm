import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
    },    
    //definindo a cor pelo sistema
    //TEMA LIGHT
    lightContainer: {
        backgroundColor: '#ffffff',
    },    
    lightThemeText: {
        color: '#000000',
    },
    lightThemeInput: {
        borderColor: '#00b1a9',
        color: '#000000',
    },
    lightThemeButton: {
        borderColor: '#000000',
        color: '#000000',
    },
    //TEMA DARK
    darkContainer: {
        backgroundColor: '#333333',
    },
    darkThemeText: {
        color: '#ffffff',
    },
    darkThemeInput: {
        borderColor: '#00b1a9',
        color: '#ffffff',
    },    
    darkThemeButton: {
        borderColor: '#ffffff',
        color: '#ffffff',
    },
   
    //inputs
    inputhome: {
        height: 40,
        margin: 12,
        paddingLeft: 12,
        paddingRight: 12,
        borderWidth: 1,
    },
    texth1: {
        marginTop: 35,
        marginBottom: 15,
        padding: 5,
        fontSize: 22,
        textAlign: 'center',
    },
    textp: {
        marginTop: 10,
        marginBottom: 55,
        padding: 5,
        fontSize: 14,
        textAlign: 'justify',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#00b1a9",
        height: 50,
        marginTop: 0,
        padding: 11,
        marginLeft: 44,   
        marginRight: 44,     
        borderRadius: 10, 
    },
    buttontext: {
        color: '#ffffff',
    },
    box: {
        marginTop: 25,        
        paddingLeft: 24,
        paddingRight: 24,    
    },
    scrolltexth1: {
        marginBottom: 15,
        fontSize: 22,
        textAlign: 'center',
    },
    scrolltextp: {
        marginTop: 10,
        fontSize: 14,
        textAlign: 'justify',
    },
    scrolltextp1: {
        marginTop: 5,
        fontSize: 14,
        textAlign: 'justify',
    },

});