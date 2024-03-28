import React from "react";
import { StyleSheet, Text, View, Animated, TextInput } from 'react-native';
import Colors from "../constants/Colors";
import ErrorBox from "./ErrorBox";
import Settings from "../constants/Settings";

/* list of props that can be passed to the Input component
- placeholder: the placeholder of the input
- type: default/quotation
- maxLength: the maximum length of the input (default: unlimited)
- autoFocus: boolean to set the input as focused (default: false)
- toggleInputCheck: variable to toggle the input check
- successFunction: the function to call if the input is correct

- notEmpty: the error message to be shown if the input is empty
- isVal: the error message to be shown if the input is the right value
- val: the value to check

- style: the style of the input




*/

const Input = props => {

    const [text, setText] = React.useState("");


    const maxLength = props.maxLength ? props.maxLength : 10000;

    const [isFirstRender, setIsFirstRender] = React.useState(true);

    const [errorShown, setErrorShown] = React.useState(false);
    const [toggleErrorAnimation, setToggleErrorAnimation] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");


    React.useEffect(() => {
        if (text != "") {
            setErrorShown(false);
        }
    }, [text]);

    function cleanValue(value) {
        return value.trimEnd().normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
    }    


    
    React.useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false);
            return;
        }

        if (Settings.debugMode) {
            props.successFunction();
        }

        if (props.notEmpty && text.trim() == "") {
            setErrorShown(true);
            setToggleErrorAnimation(!toggleErrorAnimation);
            setErrorMessage(props.notEmpty);
        } else if (props.isVal && cleanValue(text) !== cleanValue(props.val)) {
            setErrorShown(true);
            setToggleErrorAnimation(!toggleErrorAnimation);
            setErrorMessage(props.isVal);
        } else {
            setErrorShown(false);
            if (props.successFunction) {
                props.successFunction();
            }
        }

    }, [props.toggleInputCheck]);

    

    return (
        <View style={[styles.container, props.style]}>
            <TextInput placeholder={props.placeholder} style={[styles.input, { paddingLeft: props.type == "quotation" ? 20 : 12, paddingRight: props.type == "quotation" ? 20 : 12 }]} placeholderTextColor={Colors.darkGrey} maxLength={maxLength} onChangeText={setText} autoFocus={props.autoFocus} />
            {props.type == "quotation" &&
                (<><Text style={styles.label1}>«</Text>
                    <Text style={styles.label2}>»</Text></>)}

            {errorShown &&
                <ErrorBox text={errorMessage} animation={true} toggleBubbleAnimation={toggleErrorAnimation} />
            }

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        backgroundColor: Colors.lightBlue,
        padding: 12,
        borderRadius: 15,
        width: 250,
        fontFamily: 'DMSans-Medium',
        color: Colors.veryDarkBlue,
        height: 50,
    },



    label1: {
        position: 'absolute',
        top: 12,
        left: 5,
        fontFamily: 'DMSans-Medium',
        fontSize: 20,
        color: Colors.darkGrey,
    },

    label2: {
        position: 'absolute',
        top: 12,
        right: 5,
        fontFamily: 'DMSans-Medium',
        fontSize: 20,
        color: Colors.darkGrey,
    },


});

export default Input;