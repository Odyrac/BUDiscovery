import React from "react";
import { StyleSheet, Text, View, Animated, TouchableOpacity, Image } from 'react-native';
import { BlurView } from 'expo-blur';

import Colors from "../constants/Colors";

/* list of props that can be passed to the Card component
- title: the title of the card
- image: the image to display inside the card
- function: the function to call when the card is pressed
- disabled: a boolean to disable the card (default: false)
- disabledText: the text to display when the card is disabled

*/

const Card = props => {

    return (

        <TouchableOpacity onPress={!props.disabled ? props.onPress : null} activeOpacity={0.8} style={[styles.card, props.style]}>
            <BlurView intensity={70} style={styles.blurContainer}>
                <Image source={props.image} style={styles.img} />
                <Text style={styles.title}>{props.title}</Text>
            </BlurView>

        {props.disabled && <View style={styles.disabled}><Text style={styles.disabledText}>{props.disabledText}</Text></View>}
        
        </TouchableOpacity>

    );

}

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        width: 300,
        height: 370,
        overflow: 'hidden',
    },

    blurContainer: {
        width: 300,
        height: 370,
        padding: 12,
    },

    img: {
        width: 'auto',
        height: 290,
        resizeMode: 'cover',
        borderRadius: 20,
        marginBottom: 10,
    },

    title: {
        fontFamily: 'DMSans-Medium',
        fontSize: 18,
        color: Colors.white,
    },

    disabled: {
        opacity: 0.8,
        backgroundColor: Colors.black,
        position: 'absolute',
        width: 300,
        height: 370,
        borderRadius: 20,
    },

    disabledText: {
        color: Colors.white,
        fontFamily: 'Digitalt',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 150,
    }


});

export default Card;