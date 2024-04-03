import { StyleSheet } from 'react-native';

import Colors from './Colors';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.veryDarkBlue,
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerTopBar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 150,
        width: '100%',
    },

    containerTopBarCenterVertical: {
        justifyContent: 'center',
        paddingTop: 0,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

});

export default globalStyles;