import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    footer: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
        paddingTop: 50,
        paddingBottom:50,
    },
    footerText: {
        fontSize: 16,
    },
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
    
});