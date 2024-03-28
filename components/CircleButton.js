import React from "react";
import { StyleSheet, Text, View, Animated, TouchableOpacity, Image } from 'react-native';

import Colors from "../constants/Colors";

/* list of props that can be passed to the CircleButton component
- color: blue/red/green (default: blue)
- icon: the icon to display inside the CircleButton
- onPress: the function to call when the CircleButton is pressed
- style: the style of the CircleButton

*/

const CircleButton = props => {

    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.85} style={[styles.shadow, { backgroundColor: props.color == 'red' ? Colors.darkRed : props.color == 'green' ? Colors.darkGreen : Colors.darkBlue }, props.style]}>
            <View style={[styles.background, { backgroundColor: props.color == 'red' ? Colors.lightRed : props.color == 'green' ? Colors.lightGreen : Colors.lightBlue }]}>
            <Image source={props.icon} style={styles.icon} />
            </View>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    shadow: {
        borderRadius: 100,
        width: 45,
        height: 45,
    },

    background: {
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.white,
        borderWidth: 5,
        position: 'relative',
        bottom: 4,
        width: 45,
        height: 45,
    },

    icon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },



});

export default CircleButton;