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
import { getAvatar } from '../functions/AvatarUtils';




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


    let [banner1Image, setBanner1Image] = React.useState(null);
    let [banner2Image, setBanner2Image] = React.useState(null);
    let [banner3Image, setBanner3Image] = React.useState(null);
    React.useEffect(() => {
        (async () => {
            let img1 = await getAvatar(1, 'banner');
            setBanner1Image(img1);
            let img2 = await getAvatar(2, 'banner');
            setBanner2Image(img2);
            let img3 = await getAvatar(3, 'banner');
            setBanner3Image(img3);
        }
        )();
    }, []);


    return (

        <View style={globalStyles.container}>

            <TopBar type="all" title={appStrings.choiceThemeTitle} language={route.params.language} navigation={navigation} />

            <View style={[globalStyles.containerTopBar]}>


                <Bubble text={appStrings.choiceThemeDesc} style={{ marginBottom: 40 }} />


                <Card title={scenario3Strings.title} image={banner3Image} onPress={() => navigation.navigate('Chrono', { language: route.params.language, scenario: 3, startingPoint: route.params.startingPoint })} style={{ position: 'absolute', left: 140, top: 650, transform: [{ rotate: "340deg" }] }} disabled={scenario3Disabled} disabledText={appStrings.disabledText} />

                <Card title={scenario2Strings.title} image={banner2Image} onPress={() => navigation.navigate('Chrono', { language: route.params.language, scenario: 2, startingPoint: route.params.startingPoint })} style={{ position: 'absolute', left: 430, top: 500, transform: [{ rotate: "10deg" }] }} disabled={scenario2Disabled} disabledText={appStrings.disabledText} />

                <Card title={scenario1Strings.title} image={banner1Image} onPress={() => navigation.navigate('Chrono', { language: route.params.language, scenario: 1, startingPoint: route.params.startingPoint })} style={{ position: 'absolute', left: 150, top: 290 }} disabled={scenario1Disabled} disabledText={appStrings.disabledText} />



            </View>

        </View>)
}