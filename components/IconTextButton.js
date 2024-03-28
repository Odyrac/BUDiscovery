import React from "react";
import { StyleSheet, Text, View, Animated, TouchableOpacity, Image } from 'react-native';

import Colors from "../constants/Colors";

/* list of props that can be passed to the IconTextButton component
- text: the text to display inside the button
- icon: the icon to display inside the button
- onPress: the function to call when the button is pressed

*/

const IconTextButton = props => {


    return (

        <TouchableOpacity onPress={props.onPress} activeOpacity={0.8} style={[styles.button]}>
            {props.icon &&
                <Image source={props.icon} style={styles.img} />
            }
            <Text style={[styles.text]}>{props.text}</Text>
        </TouchableOpacity>

    );


}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        borderRadius: 100,
        backgroundColor: Colors.white,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        textAlign: 'center',
        fontFamily: 'DMSans-Bold',
        fontSize: 16,
        color: Colors.darkBlue
    },

    img: {
        width: 23,
        height: 23,
        marginRight: 8,
    }

});

export default IconTextButton;