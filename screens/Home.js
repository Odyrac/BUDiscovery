import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Touchable, TouchableOpacity, Alert } from 'react-native';

import Bubble from './../components/Bubble';
import LongButton from './../components/LongButton';
import CircleButton from './../components/CircleButton';
import globalStyles from '../constants/GlobalStyles';
import TopBar from '../components/TopBar';
import Colors from '../constants/Colors';
import Settings from '../constants/Settings';
import { useAppStrings } from '../functions/LanguageUtils';
import { hasData } from '../functions/ServerUtils';


export default function HomeScreen({ navigation, route }) {

    const [language, setLanguage] = React.useState('fr');

    const [startingPoint, setStartingPoint] = React.useState('level0');

    const appStringsFR = useAppStrings('fr');



    function launchGame() {
        hasData().then((hasDataApp) => {
            if (hasDataApp) {
                navigation.navigate('Welcome', { language: language, startingPoint: startingPoint });
            } else {
                Alert.alert(
                    'Données manquantes',
                    'Les données de l\'application ne sont pas présentes. Il semble que ce soit le premier démarrage de l\'application. Veuillez synchroniser les données avant de lancer une partie.',
                    [
                        {
                            text: 'Annuler',
                            style: 'cancel'
                        },
                        {
                            text: 'Télécharger',
                            onPress: () => navigation.navigate('Settings'),
                        }
                    ]
                )
            }
        })
    }


    return (

        <View style={globalStyles.container}>

            {appStringsFR.version == 'OFFLINE' ? <TopBar type="none" title="Portail BU" /> : <TopBar type="credits" title="Portail BU" language="fr" />}


            <View style={[globalStyles.containerTopBar, globalStyles.containerTopBarCenterVertical]}>

                <>
                    <Text style={styles.versionText}>Version {appStringsFR.version}</Text>
                    <Text style={styles.debugText}>{Settings.debugMode ? 'Debug mode ACTIVÉ' : ''}</Text>
                </>

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


                <LongButton text="Lancer une partie" onPress={() => launchGame()} />
                <LongButton text="Options du jeu" color="transparent" onPress={() => Settings.debugMode ? navigation.navigate('Test') : navigation.navigate('Settings')} />



            </View>
        </View>)
}

const styles = StyleSheet.create({
    languageButton: {
        marginHorizontal: 10,
        borderRadius: 20,
        borderWidth: 8,
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
    },

    versionText: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        color: Colors.darkGrey,
        fontFamily: 'DMSans-Bold',
        fontSize: 12,
    },

    debugText: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: Colors.darkGrey,
        fontFamily: 'DMSans-Bold',
        fontSize: 12,
    }
});