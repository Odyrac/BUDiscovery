import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import Bubble from './../components/Bubble';
import LongButton from './../components/LongButton';
import CircleButton from './../components/CircleButton';
import globalStyles from '../constants/GlobalStyles';
import TopBar from '../components/TopBar';
import Input from '../components/Input';
import ErrorBox from '../components/ErrorBox';

import { useAppStrings } from '../functions/LanguageUtils';


export default function GroupNameScreen({ navigation, route }) {


    const appStrings = useAppStrings(route.params.language);

    const [askToggleInputCheck, setAskToggleInputCheck] = React.useState(false);




    return (

        <View style={globalStyles.container}>

            <TopBar type="none" />

            <View style={[globalStyles.containerTopBar, globalStyles.containerTopBarCenterVertical]}>
                <Bubble text={appStrings.groupNameDesc} style={{ marginBottom: 40 }} />

                <Input placeholder={appStrings.groupNamePlaceholder} maxLength={25} notEmpty={appStrings.groupNameEmpty} toggleInputCheck={askToggleInputCheck} successFunction={() => navigation.navigate('ChoiceTheme', {language: route.params.language, startingPoint: route.params.startingPoint})} autoFocus={true} />

      

                <LongButton text={appStrings.buttonNext} onPress={() => setAskToggleInputCheck(!askToggleInputCheck)} />

            </View>

        </View>)
}