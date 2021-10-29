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

    //items
    item: {
        flex: 1,
        marginTop: 60,
        backgroundColor: '#00b1a9',
        borderRadius: 10
    },
    itemName: {
        padding: 10,
        paddingStart: 20,
        fontSize: 30,
    },
    itemData: {
        paddingLeft: 20,
        fontSize: 22,
        textAlign: 'left',
        paddingBottom: 40

    }
});