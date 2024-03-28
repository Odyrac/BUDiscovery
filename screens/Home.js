import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Touchable, TouchableOpacity } from 'react-native';

import Bubble from './../components/Bubble';
import LongButton from './../components/LongButton';
import CircleButton from './../components/CircleButton';
import globalStyles from '../constants/GlobalStyles';
import TopBar from '../components/TopBar';
import Colors from '../constants/Colors';


export default function HomeScreen({ navigation, route }) {

    const [language, setLanguage] = React.useState('fr');

    const [startingPoint, setStartingPoint] = React.useState('level0');




    return (

        <View style={globalStyles.container}>

            <TopBar type="credits" title="Portail BU" language="fr" />

            <View style={[globalStyles.containerTopBar, globalStyles.containerTopBarCenterVertical]}>
                <Bubble text="Configurez la partie avant de confier la tablette aux étudiants." />

                <View style={styles.languageView}>
                    <TouchableOpacity onPress={() => setLanguage('fr')} activeOpacity={0.8} style={[styles.languageButton, { borderColor: language == 'fr' ? Colors.orange : 'transparent' }]}>
                        <Bubble title="Français" colorTitle="white" style={{ maxWidth: '100%' }}>
                            <Image source={require('./../assets/img/fr.png')} style={styles.flag} />
                        </Bubble>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setLanguage('en')} activeOpacity={0.8} style={[styles.languageButton, { borderColor: language == 'en' ? Colors.orange : 'transparent' }]}>
                        <Bubble text="" title="Anglais" colorTitle="white" style={{ maxWidth: '100%' }}>
                            <Image source={require('./../assets/img/en.png')} style={styles.flag} />
                        </Bubble>
                    </TouchableOpacity>
                </View>

                <View style={styles.languageView}>
                    <TouchableOpacity onPress={() => setStartingPoint('level0')} activeOpacity={0.8} style={[styles.languageButton, { borderColor: startingPoint == 'level0' ? Colors.orange : 'transparent' }]}>
                        <Bubble title="Départ" colorTitle="white" style={{ maxWidth: '100%' }}>
                           <Text style={styles.levelText}>RDC</Text>
                        </Bubble>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setStartingPoint('level1')} activeOpacity={0.8} style={[styles.languageButton, { borderColor: startingPoint == 'level1' ? Colors.orange : 'transparent' }]}>
                        <Bubble text="" title="Départ" colorTitle="white" style={{ maxWidth: '100%' }}>
                        <Text style={styles.levelText}>Étage</Text>
                        </Bubble>
                    </TouchableOpacity>
                </View>

                <LongButton text="Lancer une partie" onPress={() => navigation.navigate('Welcome', { language: language, startingPoint: startingPoint })} />
                <LongButton text="Options du jeu" color="transparent" onPress={() => navigation.navigate('Test')} />



            </View>
        </View>)
}

const styles = StyleSheet.create({
    languageButton: {
        marginHorizontal: 10,
        borderRadius: 14,
        borderWidth: 5,
    },

    languageView: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: 40,
        alignItems: 'center',
    },

    flag: {
        width: '100%',
        height: 80,
        resizeMode: 'contain',
        marginTop: -5,
    },

    levelText: {
        fontSize: 40,
        color: Colors.mediumBlue,
        fontFamily: 'Digitalt',
        textAlign: 'center',
    }
});