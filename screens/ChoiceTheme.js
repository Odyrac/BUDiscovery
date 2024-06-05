import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import { useAppStrings } from '../functions/LanguageUtils';
import { useScenarioStrings } from '../functions/LanguageUtils';

import Bubble from './../components/Bubble';
import LongButton from './../components/LongButton';
import CircleButton from './../components/CircleButton';
import globalStyles from '../constants/GlobalStyles';
import TopBar from '../components/TopBar';
import Input from '../components/Input';
import Card from './../components/Card';




export default function ChoiceThemeScreen({ navigation, route }) {

    const appStrings = useAppStrings(route.params.language);

    const scenario1Strings = useScenarioStrings(1, route.params.language);
    const scenario2Strings = useScenarioStrings(2, route.params.language);
    const scenario3Strings = useScenarioStrings(3, route.params.language);



    // pour savoir si le thème est désactivé (paramètre présent seulement dans la version FR)
    let scenario1StringsFR, scenario2StringsFR, scenario3StringsFR;
    if (route.params.language != 'fr') {
        scenario1StringsFR = useScenarioStrings(1, 'fr');
        scenario2StringsFR = useScenarioStrings(2, 'fr');
        scenario3StringsFR = useScenarioStrings(3, 'fr');
    } else {
        scenario1StringsFR = scenario1Strings;
        scenario2StringsFR = scenario2Strings;
        scenario3StringsFR = scenario3Strings;
    }

    let scenario1Disabled = true;
    let scenario2Disabled = true;
    let scenario3Disabled = true;
    try {
        scenario1Disabled = !scenario1StringsFR.settings.enabled;
        scenario2Disabled = !scenario2StringsFR.settings.enabled;
        scenario3Disabled = !scenario3StringsFR.settings.enabled;

    } catch (error) {
    }





    return (

        <View style={globalStyles.container}>

            <TopBar type="all" title={appStrings.choiceThemeTitle} language={route.params.language} navigation={navigation} />

            <View style={[globalStyles.containerTopBar]}>


                <Bubble text={appStrings.choiceThemeDesc} style={{ marginBottom: 40 }} />


                <Card title={scenario3Strings.title} image={require('./../assets/scenarios/3/banner.png')} onPress={() => navigation.navigate('Chrono', { language: route.params.language, scenario: 3, startingPoint: route.params.startingPoint })} style={{ position: 'absolute', left: 140, top: 650, transform: [{ rotate: "340deg" }] }} disabled={scenario3Disabled} disabledText={appStrings.disabledText} />

                <Card title={scenario2Strings.title} image={require('./../assets/scenarios/2/banner.png')} onPress={() => navigation.navigate('Chrono', { language: route.params.language, scenario: 2, startingPoint: route.params.startingPoint })} style={{ position: 'absolute', left: 430, top: 500, transform: [{ rotate: "10deg" }] }} disabled={scenario2Disabled} disabledText={appStrings.disabledText} />

                <Card title={scenario1Strings.title} image={require('./../assets/scenarios/1/banner.png')} onPress={() => navigation.navigate('Chrono', { language: route.params.language, scenario: 1, startingPoint: route.params.startingPoint })} style={{ position: 'absolute', left: 150, top: 290 }} disabled={scenario1Disabled} disabledText={appStrings.disabledText} />



            </View>

        </View>)
}