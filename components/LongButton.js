import React from "react";
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';

import Colors from "../constants/Colors";
import Settings from "../constants/Settings";

/* list of props that can be passed to the LongButton component
- color: white/transparent (default: white)
- text: the text to display inside the LongButton
- onPress: the function to call when the LongButton is pressed
- timer: the time to wait before the LongButton is activated (default: none) incompatible with color = transparent
- theme: the theme of the LongButton blue/red (default: blue)

*/

const LongButton = props => {

    const [active, setActive] = React.useState(true);

    const [timer, setTimer] = React.useState(undefined);

    const [color, setColor] = React.useState(props.color);

    React.useEffect(() => {
        if (timer == undefined && props.timer != undefined) {
            setTimer(props.timer);
        }
    }, [props.timer]);


    React.useEffect(() => {

        if (props.timer != undefined && timer != undefined && !Settings.debugMode) {
            setActive(false);
            setColor('transparent');
            
            const intervalId = setInterval(() => {
                if (timer > 1) {
                    setTimer(timer - 1);
                } else {
                    clearInterval(intervalId);
                    setActive(true);
                    setColor(undefined);
                    setTimer(undefined);
                }
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [timer]);



    return (

        <TouchableOpacity onPress={active ? props.onPress : null} activeOpacity={0.8} style={[styles.button, { backgroundColor: color == 'transparent' ? 'transparent' : Colors.white, borderWidth: color == 'transparent' ? 1 : 0, bottom: props.color == 'transparent' ? 110 : 40 }]}>
            <Text style={[styles.text, { color: color == 'transparent' ? Colors.lightGrey : props.theme == 'red' ? Colors.darkRed : Colors.darkBlue }]}>
                {active ? props.text : timer}
            </Text>
        </TouchableOpacity>

    );


}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        borderRadius: 100,
        width: '80%',
        position: 'absolute',
        borderColor: Colors.lightGrey,
    },

    text: {
        textAlign: 'center',
        fontFamily: 'DMSans-Bold',
        fontSize: 18,
    },

});

export default LongButton;
