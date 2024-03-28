import React from "react";
import { StyleSheet, Text, View, Animated, Image } from 'react-native';

import Colors from "../constants/Colors";
import ScaleAnimation from "./../functions/ScaleAnimation";

/* list of props that can be passed to the ErrorBox component
- text: the text to display inside the ErrorBox
- animation: boolean to enable or disable the scale animation (default: false)
- toggleBubbleAnimation: variable to toggle the animation

*/

const ErrorBox = props => {


    // the scale animation
    let interpolatedScaleAnimation;
    if (props.animation == true) {
        interpolatedScaleAnimation = ScaleAnimation(props.toggleBubbleAnimation);
    } else {
        interpolatedScaleAnimation = 1;
    }

    return (


        <Animated.View style={[styles.box, { transform: [{ scale: interpolatedScaleAnimation }] }]}>
            {props.text != undefined && props.text != "" &&
                <>
                    <Image source={require('./../assets/img/arrow.png')} style={styles.arrowImage} />
                    <Text style={styles.text}>{props.text}</Text>
                </>
            }
        </Animated.View>

    );
}

const styles = StyleSheet.create({


    box: {
        backgroundColor: Colors.veryDarkBlue,
        padding: 7,
        borderRadius: 15,
        maxWidth: 250,
        top: 60,
        position: 'absolute',
    },

    text: {
        color: Colors.white,
        fontFamily: 'DMSans-Medium',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 20,
    },

    arrowImage: {
        position: 'absolute',
        top: -10,
        left: 10,
        width: 20,
        height: 20,
    },


});

export default ErrorBox;