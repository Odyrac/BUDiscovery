import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Animated, Linking } from 'react-native';

import Bubble from './../components/Bubble';
import TopBar from '../components/TopBar';
import globalStyles from '../constants/GlobalStyles';
import DisableBackButton from './../functions/DisableBackButton';
import { useAppStrings, getScenarioStrings } from '../functions/LanguageUtils';
import LongButton from '../components/LongButton';
import Avatar from '../components/Avatar';
import { getAvatar } from '../functions/AvatarUtils';
import BubbleArrow from '../components/BubbleArrow';
import CircleButton from '../components/CircleButton';
import Input from '../components/Input';
import ScaleAnimation from '../functions/ScaleAnimation';
import Settings from '../constants/Settings';
import IconTextButton from './IconTextButton';


/* list of props that can be passed to the Chapter component
- navigation: the navigation object
- scenario: the scenario number
- language: the language
- avatarImage: the avatar image main/friend1/friend2/good/bad
- endFunction: the function to call when the chapter ends
- questNumber: the number of the quest

- string1: the string for the first part
- string2: the string for the second part
- string3: the string for the third part
- string4: the string for the fourth part

- startingPoint: the starting point level0/level1

- quest1Button: the quest 1 button string
- quest1Level0: the quest 1 string for level 0
- quest1Level1: the quest 1 string for level 1
- quest1Children: the children for quest 1
- quest2Level0: the quest 2 string for level 0
- quest2Level1: the quest 2 string for level 1
- quest2Placeholder: the quest 2 placeholder
- quest2Error: the error message for quest 2
- quest2AnswerLevel0: the answer for quest 2 level 0
- quest2AnswerLevel1: the answer for quest 2 level 1

- startTimestamp: the start timestamp
- score: the final timestamp


*/



const Chapter = props => {

    DisableBackButton();

    const scenarioStrings = getScenarioStrings(props.scenario, props.language);
    const appStrings = useAppStrings(props.language);

    const avatarImage = getAvatar(props.scenario, props.avatarImage);

    const [text, setText] = React.useState('');
    const [position, setPosition] = React.useState('left');
    const [textButton, setTextButton] = React.useState(appStrings.buttonNext);
    const [subchapter, setSubchapter] = React.useState(1);
    const [timerButton, setTimerButton] = React.useState(undefined);

    const [askToggleInputCheck, setAskToggleInputCheck] = React.useState(false);

    const [toggleBubbleAnimation, setToggleBubbleAnimation] = React.useState(false);

    const duration = 300;
    const [toggleQuest1Animation, setToggleQuest1Animation] = React.useState(false);
    const [toggleQuest2Animation, setToggleQuest2Animation] = React.useState(false);
    const interpolatedScaleAnimationQuest1 = ScaleAnimation(toggleQuest1Animation, false, false, duration, true);
    const interpolatedScaleAnimationQuest2 = ScaleAnimation(toggleQuest2Animation, false, false, duration, true);

    function inputSuccess() {
        setSubchapter(4);
    }

    function actionButton() {
        setTimerButton(undefined);
        if (subchapter != 3 && subchapter != 4) {
            setSubchapter(subchapter + 1);
        } else if (subchapter == 4) {
            props.endFunction();
        } else if (subchapter == 3) {
            setAskToggleInputCheck(!askToggleInputCheck);
        }
    }


    function subChapterToStart() {
        if (props.string1 != undefined) {
            return 1;
        } else if (props.string2 != undefined) {
            return 2;
        } else if (props.string3 != undefined) {
            return 3;
        } else if (props.string4 != undefined) {
            return 4;
        }
    }




    React.useEffect(() => {
        if (subchapter == 1) {
            if (props.string1 != undefined) {
                setTimerButton(2);
                setText(props.string1);
                setTextButton(appStrings.buttonNext);
                setPosition('left');
            } else {
                setSubchapter(2);
            }

        } else if (subchapter == 2) {
            if (props.string2 != undefined) {
                setTimerButton(5);
                setToggleBubbleAnimation(!toggleBubbleAnimation);
                setToggleQuest1Animation(!toggleQuest1Animation);
                setTimeout(() => {
                    setText(props.string2);
                    setTextButton(props.quest1Button);
                }, subChapterToStart() != 2 ? duration : 0);
            } else {
                setSubchapter(3);
            }

        } else if (subchapter == 3) {
            if (props.string3 != undefined) {
                setToggleBubbleAnimation(!toggleBubbleAnimation);
                setToggleQuest2Animation(!toggleQuest2Animation);
                setTimeout(() => {
                    setText(props.string3);
                    setPosition('bottom');
                    setTextButton(appStrings.buttonNext);
                }, subChapterToStart() != 3 ? duration : 0);
            } else {
                setSubchapter(4);
            }

        } else if (subchapter == 4) {
            if (props.string4 != undefined) {
                let timer = 2;
                if (finalScore != undefined) {
                    timer = 20;
                }
                setTimerButton(timer);
                setToggleBubbleAnimation(!toggleBubbleAnimation);
                setTimeout(() => {
                    setText(props.string4);
                    setPosition('left');
                    setTextButton(appStrings.buttonNext);
                }, subChapterToStart() != 4 ? duration : 0);
            } else {
                props.endFunction();
            }
        }



    }, [subchapter]);


    const [finalScore, setFinalScore] = React.useState(undefined);
    React.useEffect(() => {
        if (props.score != undefined) {
            setFinalScore(props.score);
        }
    }, [props.score]);



    return (

        <View style={globalStyles.container}>

            <TopBar type="all" navigation={props.navigation} title={scenarioStrings.title} startTimestamp={props.startTimestamp} language={props.language} />

            <View style={[globalStyles.containerTopBar]}>

                {Settings.debugMode && <><Text style={{ color: 'white' }}>DEBUG MODE{'\n'}</Text>
                    <IconTextButton text="Restart" onPress={() => props.navigation.push('GameController', { language: props.language, scenario: props.scenario, startingPoint: props.startingPoint, chapter: 8, questNumber: 1 })} /></>
                }

                <Avatar img={avatarImage} />

                <BubbleArrow text={text} animation={true} positionArrow={props.quest1Children ? 'bottom' : position} toggleBubbleAnimation={toggleBubbleAnimation} duration={duration} />

                {subchapter == 2 &&
                    <Animated.View style={[{ position: 'absolute', bottom: props.quest1Children ? 150 : 270, right: 100, maxWidth: 350, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }, { transform: [{ scale: interpolatedScaleAnimationQuest1 }] }]}>
                        <Bubble text={props.startingPoint == 'level0' ? props.quest1Level0 : props.quest1Level1} title={appStrings.questString} style={{ maxWidth: '100%' }} />

                        {props.quest1Children}

                    </Animated.View>
                }

                {subchapter == 3 &&
                    <Animated.View style={[{ position: 'absolute', bottom: 250, right: 100, maxWidth: 300 }, { transform: [{ scale: interpolatedScaleAnimationQuest2 }] }]}>
                        <Bubble text={props.startingPoint == 'level0' ? props.quest2Level0 : props.quest2Level1} title={appStrings.questString} style={{ maxWidth: '100%' }} />

                        <Input placeholder={props.quest2Placeholder} maxLength={25} style={{ marginTop: 40 }} isVal={props.quest2Error} val={props.startingPoint == 'level0' ? props.quest2AnswerLevel0 : props.quest2AnswerLevel1} toggleInputCheck={askToggleInputCheck} successFunction={() => inputSuccess()} />

                    </Animated.View>

                }

                {finalScore != undefined &&
                    <View style={[{ position: 'absolute', bottom: 270, right: 100, maxWidth: 350, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }]}>
                        <Bubble title={`${appStrings.chronoText}${finalScore}`} style={{ maxWidth: '100%' }} titleStyle={{marginBottom: 0}} />
                        <IconTextButton text={appStrings.feedback} onPress={() => Linking.openURL('https://forms.gle/Tzwe2NXoWopPwUhs9')} icon={require('./../assets/img/link.png')} style={{marginTop: 30}} />
                    </View>
                }


                <LongButton timer={timerButton} text={textButton} onPress={() => actionButton()} />


            </View>

        </View>)
}

export default Chapter;