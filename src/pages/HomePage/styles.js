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


});