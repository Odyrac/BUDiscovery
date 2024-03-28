import React from "react";
import { StyleSheet, Text, View, Animated } from 'react-native';

import Colors from "../constants/Colors";
import ScaleAnimation from "./../functions/ScaleAnimation";

/* list of props that can be passed to the Bubble component
- text: the text to display inside the bubble
- title: the title of the bubble
- animation: boolean to enable or disable the scale animation (default: false)
- colorTitle: the color of the title white/blue (default: blue)
- toggleBubbleAnimation: variable to toggle the animation
- style: the style of the bubble
- textStyle: the style of the text
- titleStyle: the style of the title
- theme: the theme of the bubble blue/red (default: blue)

*/

const Bubble = props => {


    // the scale animation
    let interpolatedScaleAnimation;
    if (props.animation == true) {
        interpolatedScaleAnimation = ScaleAnimation(props.toggleBubbleAnimation);
    } else {
        interpolatedScaleAnimation = 1;
    }






    return (

        <Animated.View style={[styles.shadow, { transform: [{ scale: interpolatedScaleAnimation }] }, props.style, {backgroundColor: props.theme == 'red' ? Colors.lightRed : Colors.lightBlue}]}>
            <View style={styles.background}>
                {props.title != undefined &&
                    <Text style={[props.colorTitle != 'white' ? styles.title : styles.titleWhite, props.titleStyle]}>{props.title}</Text>
                }
                {props.text != undefined && props.text != "" &&
                    <Text style={[styles.text, props.textStyle, {color: props.theme == 'red' ? Colors.mediumRed : Colors.mediumBlue}]}>{props.text}</Text>   
                }

                {props.children}
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 10,
        position: 'relative',
        bottom: 3,
        left: 3,
        
    },

    shadow: {
        //backgroundColor: Colors.lightBlue,
        borderRadius: 10,
        shadowColor: Colors.black,
        elevation: 2,
        maxWidth: '80%',
    },

    text: {
        //color: Colors.mediumBlue,
        fontFamily: 'DMSans-Medium',
        fontSize: 16,
    },

    title: {
        color: Colors.mediumBlue,
        fontFamily: 'Digitalt',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 10,
    },

    titleWhite: {
        color: Colors.white,
        fontFamily: 'Digitalt',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 10,
        backgroundColor: Colors.mediumBlue,
        borderRadius: 20,
        width: '80%',
        padding: 3,
        marginLeft: '10%', // to center the title
    },

});

export default Bubble;