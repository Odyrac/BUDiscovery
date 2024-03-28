import React from "react";
import { StyleSheet, Text, View, Animated, Image, Pressable, BackHandler } from 'react-native';

import Bubble from "./Bubble";
import CircleButton from "./CircleButton";
import ScaleAnimation from "./../functions/ScaleAnimation";

/* list of props that can be passed to the BubblePopUp component
- text: the text to display inside the bubble
- title: the title to display inside the bubble
- onBackgroundPress: the function to call when the background is pressed
- toggleBubbleAnimation: variable to toggle the animation
- confirmButton: the function to call when the confirm button is pressed

- actionButtonFunction: the function to call when the action button is pressed
- actionButtonIcon: the icon of the action button


*/

const BubblePopUp = props => {

    // the scale animation
    let interpolatedScaleAnimation = ScaleAnimation(props.toggleBubbleAnimation);


    // possibility to close the popup with the back button
    React.useEffect(() => {
        const backAction = () => {
            props.onBackgroundPress();
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);


    return (
        <Pressable style={styles.containerGlobal} onPress={props.onBackgroundPress}>
            <Animated.View style={{ transform: [{ scale: interpolatedScaleAnimation }] }}>
                <Bubble text={props.text} title={props.title} animimation={true} colorTitle="white" />
                <CircleButton color="red" icon={require('./../assets/img/cross.png')} onPress={props.onBackgroundPress} style={styles.closeButton} />

                {props.actionButtonFunction &&
                    <CircleButton color="blue" icon={props.actionButtonIcon} onPress={props.actionButtonFunction} style={styles.actionButton} />
                }

                {props.confirmButton &&
                    <CircleButton color="green" icon={require('./../assets/img/confirm.png')} onPress={props.confirmButton} style={styles.actionButton} />
                }

            </Animated.View>
        </Pressable>
    );

}

const styles = StyleSheet.create({

    containerGlobal: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingHorizontal: 50,
    },

    closeButton: {
        position: 'absolute',
        top: -20,
        right: -20,

    },

    actionButton: {
        position: 'absolute',
        bottom: -20,
        right: -20,
    }

});

export default BubblePopUp;