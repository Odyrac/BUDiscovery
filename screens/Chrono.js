import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Animated } from 'react-native';

import Bubble from './../components/Bubble';
import LongButton from './../components/LongButton';
import CircleButton from './../components/CircleButton';
import globalStyles from '../constants/GlobalStyles';
import TopBar from '../components/TopBar';
import Input from '../components/Input';
import ErrorBox from '../components/ErrorBox';

import { useAppStrings, useScenarioStrings } from '../functions/LanguageUtils';
import ScaleAnimation from '../functions/ScaleAnimation';
import Colors from '../constants/Colors';
import Settings from '../constants/Settings';


export default function ChronoScreen({ navigation, route }) {


    const [chrono, setChrono] = React.useState(3);


    const [toggleBubbleAnimation, setToggleBubbleAnimation] = React.useState(false);
    let interpolatedScaleAnimation = ScaleAnimation(toggleBubbleAnimation, true);


    const appStrings = useAppStrings(route.params.language);
    const scenarioStrings = useScenarioStrings(route.params.scenario, route.params.language);


    let [argAppStrings, setArgAppStrings] = React.useState(null);
    let [argScenarioStrings, setArgScenarioStrings] = React.useState(null);

    React.useEffect(() => {
        if (appStrings !== null && appStrings !== undefined) {
            setArgAppStrings(appStrings);
        }
    }, [appStrings]);

    React.useEffect(() => {
        if (scenarioStrings !== null && scenarioStrings !== undefined) {
            setArgScenarioStrings(scenarioStrings);
        }
    }, [scenarioStrings]);


    React.useEffect(() => {

        if (Settings.debugMode && argAppStrings !== null && argScenarioStrings !== null) { // if debugMode is true, we skip the chrono and go directly to the game
            navigation.navigate('GameController', { language: route.params.language, scenario: route.params.scenario, startingPoint: route.params.startingPoint, chapter: 1, questNumber: 1, appStrings: argAppStrings, scenarioStrings: argScenarioStrings });
        }


        const interval = setInterval(() => {
            if (chrono > 1) {
                setToggleBubbleAnimation(!toggleBubbleAnimation);
                setChrono(chrono - 1);
            } else if (argAppStrings !== null && argScenarioStrings !== null) {
                setToggleBubbleAnimation(!toggleBubbleAnimation);
                setChrono(appStrings.chronoGo);
                clearInterval(interval);
                setTimeout(() => {
                    navigation.navigate('GameController', { language: route.params.language, scenario: route.params.scenario, startingPoint: route.params.startingPoint, chapter: 1, questNumber: 1, appStrings: argAppStrings, scenarioStrings: argScenarioStrings });
                }, 400);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [chrono]);



    return (

        <View style={globalStyles.container}>

            <TopBar type="none" />

            <View style={[globalStyles.containerTopBar, { justifyContent: 'center', paddingTop: 0 }]}>

                <Text style={styles.chronoTitle}>{appStrings.chronoTitle}</Text>

                <Animated.Text style={[styles.chronoText, { transform: [{ scale: interpolatedScaleAnimation }] }]}>{chrono}</Animated.Text>


            </View>

        </View>)
}

const styles = StyleSheet.create({
    chronoText: {
        color: Colors.white,
        fontFamily: 'Digitalt',
        fontSize: 200,
        textAlign: 'center',
    },

    chronoTitle: {
        color: Colors.white,
        fontFamily: 'Digitalt',
        fontSize: 45,
        position: 'absolute',
        top: 300,
    },

});