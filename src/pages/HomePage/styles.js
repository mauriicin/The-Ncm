import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },        
    //definindo a cor pelo sistema
    lightContainer: {
        backgroundColor: '#ffffff',
    },
    darkContainer: {
        backgroundColor: '#000000',
    },
    lightThemeText: {
        color: '#000000',
    },
    darkThemeText: {
        color: '#ffffff',
    },
    darkThemeInput: {
        borderColor: '#ffffff',
        color: '#ffffff',
    },
    lightThemeInput: {
        borderColor: '#000000',
        color: '#000000',
    },
    darkThemeButton: {
        borderColor: '#ffffff',
        color: '#ffffff',
    },
    lightThemeButton: {
        borderColor: '#000000',
        color: '#000000',
    },


    //inputs
    inputhome: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,        
    },

    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        height: 40,
        margin: 12,
        padding: 10,     
    },

});