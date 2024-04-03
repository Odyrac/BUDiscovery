import React from "react";
import { StyleSheet, Text, View, Animated, Image, ImageBackground, Linking } from 'react-native';
import { StatusBar } from "expo-status-bar";

import Bubble from "./Bubble";
import CircleButton from "./CircleButton";
import BubblePopUp from "./BubblePopUp";

import Colors from "../constants/Colors";
import { getAppStrings } from "../functions/LanguageUtils";

/* list of props that can be passed to the TopBar component
- type: all/credits/none (default: all - need navigation parameter)
- title: the title to display in the TopBar
- language: the language to use for the strings
- navigation: the navigation object to use for the navigation
- background: blue/utt/red (default: blue)

*/

const TopBar = props => {


    const appStrings = getAppStrings(props.language);


    const [creditsShown, setCreditsShown] = React.useState(false);
    const [toggleBubbleAnimation, setToggleBubbleAnimation] = React.useState(false);

    const [confirmHome, setConfirmHome] = React.useState(false);
    const [toggleBubbleAnimationConfirmHome, setToggleBubbleAnimationConfirmHome] = React.useState(false);

    function showCredits() {
        setCreditsShown(!creditsShown);
        setToggleBubbleAnimation(!toggleBubbleAnimation);
    }


    function showConfirmHome() {
        setConfirmHome(!confirmHome);
        setToggleBubbleAnimationConfirmHome(!toggleBubbleAnimationConfirmHome);
    }

    const [timer, setTimer] = React.useState('');

    function formatTime(time) {
        return new Date((Date.now() - time) / 1000 * 1000).toISOString().substr(14, 5);
    }

    React.useEffect(() => {
        if (props.startTimestamp) {
            setTimer(formatTime(props.startTimestamp));
            const interval = setInterval(() => {
                setTimer(formatTime(props.startTimestamp));
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [props.startTimestamp]);





    return (
        <>
            {props.background == "utt" ?
                <ImageBackground source={require('./../assets/img/bgUTT.png')} style={{ width: '100%', height: '100%', position: 'absolute' }} />
                : props.background == "red" ?
                    <ImageBackground source={require('./../assets/img/bgRed.png')} style={{ width: '100%', height: '100%', position: 'absolute' }} />
                    :
                    <ImageBackground source={require('./../assets/img/bg.png')} style={{ width: '100%', height: '100%', position: 'absolute' }} />
            }

            <StatusBar style="light" />


            <View style={styles.topContainer}>
                {props.type != "credits" && props.type != "none" &&
                    <CircleButton color={props.background == "red" ? "red" : "blue"} icon={props.background == "red" ? require('./../assets/img/homeRed.png') : require('./../assets/img/home.png')} onPress={showConfirmHome} style={styles.button} />

                }

                {props.type != "none" &&
                    <CircleButton color={props.background == "red" ? "red" : "blue"} icon={props.background == "red" ? require('./../assets/img/creditsRed.png') : require('./../assets/img/credits.png')} onPress={showCredits} style={styles.button} />
                }


                <Text style={styles.title}>{props.title}</Text>

                {props.startTimestamp &&
                    <View style={styles.timerContainer}>
                        <Image source={require('./../assets/img/timer.png')} style={styles.timerIcon} />
                        <Text style={styles.timerText}>{timer}</Text>
                    </View>
                }



            </View>

            {creditsShown &&
                <BubblePopUp text={appStrings.creditsDesc} title={appStrings.creditsTitle} onBackgroundPress={showCredits} toggleBubbleAnimation={toggleBubbleAnimation} actionButtonFunction={() => Linking.openURL('https://budiscovery.hlly.fr/')} actionButtonIcon={require('./../assets/img/web.png')} />
            }

            {confirmHome &&
                <BubblePopUp text={appStrings.confirmHomeDesc} title={appStrings.confirmHomeTitle} onBackgroundPress={showConfirmHome} toggleBubbleAnimation={toggleBubbleAnimationConfirmHome} confirmButton={() => props.navigation.navigate('Home')} />
            }




        </>
    );

}

const styles = StyleSheet.create({
    topContainer: {
        position: 'absolute',
        top: 25,
        width: '100%',
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 2,
        paddingHorizontal: 20,
    },

    button: {
        marginRight: 15,
    },

    title: {
        color: Colors.white,
        fontSize: 28,
        fontFamily: 'Digitalt',
        position: 'absolute',
        right: 30,
    },

    timerContainer: {
        position: 'absolute',
        top: 80,
        left: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },

    timerIcon: {
        width: 50,
        height: 50,
        marginRight: 10,
        marginBottom: 5,
    },

    timerText: {
        color: Colors.white,
        fontSize: 28,
        fontFamily: 'Digitalt',
    }

});

export default TopBar;