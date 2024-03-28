import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput } from 'react-native';

import Bubble from './../components/Bubble';
import LongButton from './../components/LongButton';
import CircleButton from './../components/CircleButton';
import Card from './../components/Card';
import BubbleArrow from './../components/BubbleArrow';
import Input from '../components/Input';
import globalStyles from '../constants/GlobalStyles';
import DisableBackButton from '../functions/DisableBackButton';
import IconTextButton from '../components/IconTextButton';

export default function TestScreen() {


    const [toggleBubbleAnimation, setToggleBubbleAnimation] = React.useState(false);
    const onPress = () => {
        setToggleBubbleAnimation(!toggleBubbleAnimation);
    }

    //DisableBackButton();


    return (

        <View style={globalStyles.container}>
            <ImageBackground source={require('./../assets/img/bg.png')} style={{ width: '100%', height: '100%', position: 'absolute' }} />
            <Bubble text="Ceci est une bulle !" title="Titre" animation={true} />
            <LongButton text="Suivant" onPress={onPress} timer={3} />


            <Bubble text="Ceci est une bulle !" title="Titre" animation={true} toggleBubbleAnimation={toggleBubbleAnimation} />

            <CircleButton color="red" icon={require('./../assets/img/cross.png')} onPress={onPress} />
            <CircleButton color="blue" icon={require('./../assets/img/web.png')} onPress={onPress} />
            <CircleButton color="blue" icon={require('./../assets/img/credits.png')} onPress={onPress} />

            <IconTextButton text="Site de la bibliothèque" icon={require('./../assets/img/link.png')} onPress={onPress} />
            {/*
            <Input placeholder="Entrez votre nom" type="quotationz" />

            <Card title="Admission à Poudlard" image={require('./../assets/scenarios/1/banner.png')} onPress={onPress} />
         
        <BubbleArrow text="Ceci est une bulle !" position="top" />
        
        
        */}

            <StatusBar style="auto" />
        </View>)
}