import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Animated, TouchableOpacity } from 'react-native';

import Bubble from './../components/Bubble';
import TopBar from '../components/TopBar';
import globalStyles from '../constants/GlobalStyles';
import DisableBackButton from './../functions/DisableBackButton';
import { useAppStrings, useQuizStrings, useScenarioStrings } from '../functions/LanguageUtils';
import LongButton from '../components/LongButton';
import Avatar from '../components/Avatar';
import { getAvatar } from '../functions/AvatarUtils';
import BubbleArrow from '../components/BubbleArrow';
import CircleButton from '../components/CircleButton';
import Input from '../components/Input';
import ScaleAnimation from '../functions/ScaleAnimation';
import Settings from '../constants/Settings';
import IconTextButton from './IconTextButton';
import Colors from '../constants/Colors';


/* list of props that can be passed to the Chapter component
- navigation: the navigation object
- scenario: the scenario number
- language: the language
- startingPoint: the starting point level0/level1

- endFunction: the function to call when the chapter ends

- appStrings: the app strings
- scenarioStrings: the scenario strings


*/



const Quiz = props => {

    DisableBackButton();

    const scenarioStrings = props.scenarioStrings;
    const appStrings = props.appStrings;
    const quizStrings = useQuizStrings(props.language);

    let [avatarImage, setAvatarImage] = React.useState(null);
    React.useEffect(() => {
        (async () => {
            const img = await getAvatar(props.scenario, 'bad');
            setAvatarImage(img);
        }
        )();
    }, []);


    const [startTimestamp, setStartTimestamp] = React.useState(props.startTimestamp);
    const [text, setText] = React.useState('');
    const [answer1, setAnswer1] = React.useState('');
    const [answer2, setAnswer2] = React.useState('');
    const [answer3, setAnswer3] = React.useState('');
    const [answer4, setAnswer4] = React.useState('');
    const [answers5, setAnswers5] = React.useState('');
    const [answers6, setAnswers6] = React.useState('');
    const [answersFocus, setAnswersFocus] = React.useState([]);
    const [correctAnswer, setCorrectAnswer] = React.useState(undefined);
    const [acceptVote, setAcceptVote] = React.useState(false);

    const [position, setPosition] = React.useState('left');
    const [textButton, setTextButton] = React.useState(appStrings.buttonNext);
    const [subchapter, setSubchapter] = React.useState(1);
    const [timerButton, setTimerButton] = React.useState(undefined);

    const [toggleBubbleAnimation, setToggleBubbleAnimation] = React.useState(false);

    const duration = 300;



    function answerFocus(answer) {
        if (!acceptVote) return;
        let newAnswersFocus;
        if (answersFocus.includes(answer)) {
            newAnswersFocus = answersFocus.filter(item => item !== answer);
        } else {
            newAnswersFocus = [...answersFocus, answer];
        }
        setAnswersFocus(newAnswersFocus);
    }

    function arraysEqual(array1, array2) {
        if (array1.length !== array2.length) return false;

        const sortedArray1 = array1.slice().sort();
        const sortedArray2 = array2.slice().sort();
        
        for (let i = 0; i < sortedArray1.length; i++) {
            if (sortedArray1[i] !== sortedArray2[i]) return false;
        }
        return true;
    }


    function startQuestion(question) {
        setTimerButton(2);
        setToggleBubbleAnimation(!toggleBubbleAnimation);
        setTimeout(() => {
            setText(question.question);
            setAcceptVote(true);
            setAnswer1(question.answers[0]);
            setAnswer2(question.answers[1]);
            setAnswer3(question.answers[2]);
            setAnswer4(question.answers[3]);
            if (question.answers.length > 4) {
                setAnswers5(question.answers[4]);
                setAnswers6(question.answers[5]);
            }
            setCorrectAnswer(question.correctAnswer);
            setTextButton(appStrings.buttonCheck);
            setPosition('bottom');
        }, duration);
    }



    function endQuestion() {
        setTimerButton(undefined);
        setAcceptVote(false);
        setAnswersFocus([]);
        setToggleBubbleAnimation(!toggleBubbleAnimation);
        setTimeout(() => {
            if (arraysEqual(answersFocus, correctAnswer)) {
                setText(quizStrings.goodAnswer);
            } else {
                setText(quizStrings.badAnswer);
                let newTimestamp = startTimestamp - 30000;
                setStartTimestamp(newTimestamp);
            }
            setTextButton(appStrings.buttonNext);
            setPosition('bottom');
        }, duration);
    }






    React.useEffect(() => {
        if (subchapter == 1) {
            setTimerButton(2);
            setText(scenarioStrings.quizIntro1);
            setTextButton(appStrings.buttonNext);
            setPosition('bottom');
        } else if (subchapter == 2) {
            setTimerButton(undefined);
            setToggleBubbleAnimation(!toggleBubbleAnimation);
            setTimeout(() => {
                setText(scenarioStrings.quizIntro2);
                setTextButton(appStrings.buttonNext);
                setPosition('left');
            }, duration);
        } else if (subchapter == 3) {
            startQuestion(quizStrings.question1);
        } else if (subchapter == 4) {
            endQuestion();
        } else if (subchapter == 5) {
            startQuestion(quizStrings.question2);
        } else if (subchapter == 6) {
            endQuestion();
        } else if (subchapter == 7) {
            startQuestion(quizStrings.question3);
        } else if (subchapter == 8) {
            endQuestion();
        } else if (subchapter == 9) {
            startQuestion(quizStrings.question4);
        } else if (subchapter == 10) {
            endQuestion();
        } else if (subchapter == 11) {
            startQuestion(quizStrings.question5);
        } else if (subchapter == 12) {
            endQuestion();
        } else if (subchapter >= 13) {
            let finalScore = new Date((Date.now() - startTimestamp) / 1000 * 1000).toISOString().substr(14, 5);
            props.endFunction(finalScore);
        }




    }, [subchapter]);



    return (

        <View style={globalStyles.container}>

            <TopBar type="all" navigation={props.navigation} title={scenarioStrings.title} startTimestamp={startTimestamp} background='red' language={props.language} />
            

            <View style={[globalStyles.containerTopBar]}>

                {Settings.debugMode && <><Text style={{ color: 'white' }}>DEBUG MODE{'\n'}</Text>
                    {/*<IconTextButton text="Restart" onPress={() => props.navigation.push('GameController', { language: props.language, scenario: props.scenario, startingPoint: props.startingPoint, chapter: 8, questNumber: 1 })} />*/}</>
                }

                <Avatar img={avatarImage} />

                <BubbleArrow text={text} animation={true} positionArrow={position} toggleBubbleAnimation={toggleBubbleAnimation} duration={duration} theme='red' style={{ maxWidth: '40%' }} />

                {correctAnswer != undefined &&
                    <View style={styles.quizContainer}>
                        <Bubble text={quizStrings.help} style={{ marginBottom: 20 }} theme='red' />
                        <TouchableOpacity style={[styles.answerContainer, { backgroundColor: !acceptVote && correctAnswer.includes(1) ? Colors.darkGreen : answersFocus.includes(1) ? Colors.lightWhite : 'transparent' }]} onPress={() => answerFocus(1)} activeOpacity={0.8}>
                            <Text style={[styles.answerText, { color: !acceptVote && correctAnswer.includes(1) ? Colors.lightWhite : answersFocus.includes(1) ? Colors.mediumRed : Colors.lightWhite }]}>{answer1}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.answerContainer, { backgroundColor: !acceptVote && correctAnswer.includes(2) ? Colors.darkGreen : answersFocus.includes(2) ? Colors.lightWhite : 'transparent' }]} onPress={() => answerFocus(2)} activeOpacity={0.8}>
                            <Text style={[styles.answerText, { color: !acceptVote && correctAnswer.includes(2) ? Colors.lightWhite : answersFocus.includes(2) ? Colors.mediumRed : Colors.lightWhite }]}>{answer2}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.answerContainer, { backgroundColor: !acceptVote && correctAnswer.includes(3) ? Colors.darkGreen : answersFocus.includes(3) ? Colors.lightWhite : 'transparent' }]} onPress={() => answerFocus(3)} activeOpacity={0.8}>
                            <Text style={[styles.answerText, { color: !acceptVote && correctAnswer.includes(3) ? Colors.lightWhite : answersFocus.includes(3) ? Colors.mediumRed : Colors.lightWhite }]}>{answer3}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.answerContainer, { backgroundColor: !acceptVote && correctAnswer.includes(4) ? Colors.darkGreen : answersFocus.includes(4) ? Colors.lightWhite : 'transparent' }]} onPress={() => answerFocus(4)} activeOpacity={0.8}>
                            <Text style={[styles.answerText, { color: !acceptVote && correctAnswer.includes(4) ? Colors.lightWhite : answersFocus.includes(4) ? Colors.mediumRed : Colors.lightWhite }]}>{answer4}</Text>
                        </TouchableOpacity>

                        {answers5 != '' && <TouchableOpacity style={[styles.answerContainer, { backgroundColor: !acceptVote && correctAnswer.includes(5) ? Colors.darkGreen : answersFocus.includes(5) ? Colors.lightWhite : 'transparent' }]} onPress={() => answerFocus(5)} activeOpacity={0.8}>
                            <Text style={[styles.answerText, { color: !acceptVote && correctAnswer.includes(5) ? Colors.lightWhite : answersFocus.includes(5) ? Colors.mediumRed : Colors.lightWhite }]}>{answers5}</Text>
                        </TouchableOpacity>}
                        {answers6 != '' && <TouchableOpacity style={[styles.answerContainer, { backgroundColor: !acceptVote && correctAnswer.includes(6) ? Colors.darkGreen : answersFocus.includes(6) ? Colors.lightWhite : 'transparent' }]} onPress={() => answerFocus(6)} activeOpacity={0.8}>
                            <Text style={[styles.answerText, { color: !acceptVote && correctAnswer.includes(6) ? Colors.lightWhite : answersFocus.includes(6) ? Colors.mediumRed : Colors.lightWhite }]}>{answers6}</Text>
                        </TouchableOpacity>}

                    </View>
                }

                <LongButton timer={timerButton} text={textButton} onPress={() => setSubchapter(subchapter + 1)} theme='red' />


            </View>

        </View>)
}

const styles = StyleSheet.create({
    quizContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        position: 'absolute',
        bottom: 150,
        right: 50,
    },
    answerContainer: {
        padding: 10,
        margin: 10,
        borderRadius: 15,
        maxWidth: '100%',
        minWidth: 200,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.lightWhite,

    },
    answerText: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'DMSans-Medium',
    }

});

export default Quiz;