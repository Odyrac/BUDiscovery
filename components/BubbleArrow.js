import React from "react";
import { StyleSheet, Text, View, Animated, Image } from 'react-native';

import Bubble from "./Bubble";
import ScaleAnimation from "../functions/ScaleAnimation";

/* list of props that can be passed to the BubbleArrow component
- text: the text to display inside the bubble
- positionArrow: the position of the arrow left/bottom
- animation: boolean to enable or disable the scale animation (default: false)
- toggleBubbleAnimation: variable to toggle the animation
- theme: the theme of the bubble blue/red (default: blue)
- style

*/

const BubbleArrow = props => {

    let interpolatedScaleAnimation;
    if (props.animation == true) {
        interpolatedScaleAnimation = ScaleAnimation(props.toggleBubbleAnimation, false, true, props.duration);
    } else {
        interpolatedScaleAnimation = 1;
    }



    return (
        <Animated.View style={[props.positionArrow == 'bottom' ? styles.globalBottom : styles.globalLeft, { transform: [{ scale: interpolatedScaleAnimation }] }, props.style]}>
            <Bubble text={props.text} style={{ maxWidth: '100%' }} theme={props.theme} />
            <Image source={require('./../assets/img/triangle1.png')} style={props.positionArrow == 'bottom' ? styles.triangleBottom : styles.triangleLeft} />
        </Animated.View>
    );

}

const styles = StyleSheet.create({
    triangleBottom: {
        width: 60,
        height: 120,
        resizeMode: 'contain',
        top: -10,
        left: 20,
        zIndex: -1,
    },

    triangleLeft: {
        width: 80,
        height: 140,
        resizeMode: 'contain',
        bottom: 50,
        left: -30,
        transform: [{ rotate: '45deg' }],
        zIndex: -1,
    },

    globalBottom: {
        position: 'absolute',
        bottom: 500,
        left: 100,
        maxWidth: '50%',
    },

    globalLeft: {
        position: 'absolute',
        bottom: 400,
        left: 350,
        maxWidth: '50%',
    },

});

export default BubbleArrow;