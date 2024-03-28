import React from "react";
import { StyleSheet, Text, View, Animated, TouchableOpacity, Image } from 'react-native';

/* list of props that can be passed to the Avatar component
- img: the image to display inside the Avatar

*/

const Avatar = props => {

    return (
        <Image source={props.img} style={styles.img} />
    );

}

const styles = StyleSheet.create({

    img: {
        width: 250,
        height: 345,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 95,
        left: 50,
        zIndex: 10
    }
 
});

export default Avatar;