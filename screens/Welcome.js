import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import Bubble from './../components/Bubble';
import LongButton from './../components/LongButton';
import globalStyles from '../constants/GlobalStyles';
import TopBar from '../components/TopBar';

import { useAppStrings } from '../functions/LanguageUtils';
import Colors from '../constants/Colors';


export default function WelcomeScreen({ navigation, route }) {


    const appStrings = useAppStrings(route.params.language);


    return (

        <View style={globalStyles.container}>

            <TopBar type="none" background="utt" />

            <View style={[globalStyles.containerTopBar, globalStyles.containerTopBarCenterVertical]}>
                <Bubble animation={true} title={appStrings.welcomeTitle} text={appStrings.welcomeDesc} style={{ marginBottom: 40 }} textStyle={{ color: Colors.lightBlueUTT, fontFamily: 'FiraSans-Medium' }} titleStyle={{ color: Colors.darkBlueUTT, textAlign: 'left', fontFamily: 'FiraSans-Bold' }}>

                    <View style={[globalStyles.row, { marginTop: 15, marginBottom: 10 }]}>

                        <Image source={require('./../assets/img/utt.png')} style={{ height: 50, resizeMode: 'contain', width: '50%' }} />
                        <Image source={require('./../assets/img/bu.png')} style={{ height: 50, resizeMode: 'contain', width: '50%' }} />


                    </View>



                </Bubble>


                <LongButton text={appStrings.buttonNext} onPress={() => navigation.navigate('GroupName', { language: route.params.language, startingPoint: route.params.startingPoint })} />

            </View>

        </View>)
}