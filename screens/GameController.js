import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Touchable, TouchableOpacity, Linking } from 'react-native';
import Chapter from '../components/Chapter';
import { useAppStrings, useScenarioStrings } from '../functions/LanguageUtils';
import IconTextButton from '../components/IconTextButton';
import Colors from '../constants/Colors';
import Quiz from '../components/Quiz';




export default function GameControllerScreen({ navigation, route }) {

    /*const scenarioStrings = useScenarioStrings(route.params.scenario, route.params.language);
    const appStrings = useAppStrings(route.params.language);*/

    const scenarioStrings = route.params.scenarioStrings;
    const appStrings = route.params.appStrings;

    const [questNumber, setQuestNumber] = React.useState(route.params.questNumber);

    const [chapter, setChapter] = React.useState(route.params.chapter);

    const [timestamp, setTimestamp] = React.useState(route.params.startTimestamp ? route.params.startTimestamp : Date.now());

    const [score, setScore] = React.useState(route.params.score ? route.params.score : 0);


    const changeChapter = (finalScore) => {
            if (chapter == 1) {
                navigateToGameController(2);
            } else if (chapter == 2) {
                let destination = route.params.startingPoint == 'level0' ? 3 : 5;
                navigateToGameController(destination);
            } else if (chapter == 3) {
                navigateToGameController(4);
            } else if (chapter == 4) {
                let destination = route.params.startingPoint == 'level0' ? 5 : 7;
                navigateToGameController(destination);
            } else if (chapter == 5) {
                navigateToGameController(6);
            } else if (chapter == 6) {
                let destination = route.params.startingPoint == 'level0' ? 7 : 3;
                navigateToGameController(destination);
            } else if (chapter == 7) {
                navigateToGameController(8);
            } else if (chapter == 8) {
                navigateToGameController(9, finalScore);
            }
        
    }


    function navigateToGameController(chapter, finalScore) {
        setTimeout(() => {
            setChapter(chapter);
        }, 400);
        navigation.push('GameController', { language: route.params.language, scenario: route.params.scenario, startingPoint: route.params.startingPoint, chapter: chapter, questNumber: questNumber, startTimestamp: timestamp, score: finalScore, scenarioStrings: scenarioStrings, appStrings: appStrings });
    }


    if (chapter === 1) {
        return (
            <Chapter startTimestamp={timestamp} navigation={navigation} scenario={route.params.scenario} language={route.params.language} avatarImage='main' endFunction={() => changeChapter()} string1={scenarioStrings.startingPoint1} string2={scenarioStrings.startingPoint2} string3={scenarioStrings.startingPoint3} string4={scenarioStrings.startingPoint4} startingPoint={route.params.startingPoint} quest1Level0={scenarioStrings.startingPointQuest1Level0} quest1Level1={scenarioStrings.startingPointQuest1Level1} quest2Level0={scenarioStrings.startingPointQuest2} quest2Level1={scenarioStrings.startingPointQuest2} quest2Placeholder={scenarioStrings.startingPointQuest2Placeholder} quest2Error={scenarioStrings.startingPointQuest2Error} quest2AnswerLevel0={scenarioStrings.startingPointQuest2AnswerLevel0} quest2AnswerLevel1={scenarioStrings.startingPointQuest2AnswerLevel1} questNumber={questNumber} quest1Button={appStrings.buttonHereWeAre} scenarioStrings={scenarioStrings} appStrings={appStrings} />
        )

    } else if (chapter === 2) {
        return (
            <Chapter startTimestamp={timestamp} navigation={navigation} scenario={route.params.scenario} language={route.params.language} avatarImage='friend1' endFunction={() => changeChapter()} string2={scenarioStrings.bookSearch1} string3={scenarioStrings.bookSearch2} startingPoint={route.params.startingPoint} quest1Level0={scenarioStrings.bookSearchQuest1Level0} quest1Level1={scenarioStrings.bookSearchQuest1Level1} quest2Level0={scenarioStrings.bookSearchQuest2Level0} quest2Level1={scenarioStrings.bookSearchQuest2Level1} quest2Placeholder={scenarioStrings.bookSearchQuest2Placeholder} quest2Error={scenarioStrings.bookSearchQuest2Error} quest2AnswerLevel0={scenarioStrings.bookSearchQuest2AnswerLevel0} quest2AnswerLevel1={scenarioStrings.bookSearchQuest2AnswerLevel1} questNumber={questNumber} quest1Button={appStrings.buttonFind} quest1Children={
                <View><View style={styles.tipContainer}><Text style={styles.tipText}>{appStrings.tipBookSearch}</Text></View><IconTextButton text={appStrings.tipBookSearchButton} icon={require('./../assets/img/link.png')} onPress={() => Linking.openURL(appStrings.tipBookSearchURL)} /></View>} scenarioStrings={scenarioStrings} appStrings={appStrings} />
        )

    } else if (chapter === 3) {
        return (
            <Chapter startTimestamp={timestamp} navigation={navigation} scenario={route.params.scenario} language={route.params.language} avatarImage='main' endFunction={() => changeChapter()} string2={scenarioStrings.printArea1} string3={scenarioStrings.printArea2} string4={scenarioStrings.printArea3} startingPoint={route.params.startingPoint} quest1Level0={scenarioStrings.printAreaQuest1} quest1Level1={scenarioStrings.printAreaQuest1} quest2Level0={scenarioStrings.printAreaQuest2} quest2Level1={scenarioStrings.printAreaQuest2} quest2Placeholder={scenarioStrings.printAreaQuest2Placeholder} quest2Error={scenarioStrings.printAreaQuest2Error} quest2AnswerLevel0={scenarioStrings.printAreaQuest2Answer} quest2AnswerLevel1={scenarioStrings.printAreaQuest2Answer} questNumber={questNumber} quest1Button={appStrings.buttonHereWeAre} scenarioStrings={scenarioStrings} appStrings={appStrings} />
        )

    } else if (chapter === 4) {
        return (
            <Chapter startTimestamp={timestamp} navigation={navigation} scenario={route.params.scenario} language={route.params.language} avatarImage='friend2' endFunction={() => changeChapter()} string2={scenarioStrings.comicSpace1} string3={scenarioStrings.comicSpace2} string4={scenarioStrings.comicSpace3} startingPoint={route.params.startingPoint} quest1Level0={scenarioStrings.comicSpaceQuest1} quest1Level1={scenarioStrings.comicSpaceQuest1} quest2Level0={scenarioStrings.comicSpaceQuest2} quest2Level1={scenarioStrings.comicSpaceQuest2} quest2Placeholder={scenarioStrings.comicSpaceQuest2Placeholder} quest2Error={scenarioStrings.comicSpaceQuest2Error} quest2AnswerLevel0={scenarioStrings.comicSpaceQuest2Answer} quest2AnswerLevel1={scenarioStrings.comicSpaceQuest2Answer} questNumber={questNumber} quest1Button={appStrings.buttonHereWeAre} scenarioStrings={scenarioStrings} appStrings={appStrings} />
        )

    } else if (chapter === 5) {
        return (
            <Chapter startTimestamp={timestamp} navigation={navigation} scenario={route.params.scenario} language={route.params.language} avatarImage='main' endFunction={() => changeChapter()} string2={scenarioStrings.workRoom1} string3={scenarioStrings.workRoom2} startingPoint={route.params.startingPoint} quest1Level0={scenarioStrings.workRoomQuest1} quest1Level1={scenarioStrings.workRoomQuest1} quest2Level0={scenarioStrings.workRoomQuest2} quest2Level1={scenarioStrings.workRoomQuest2} quest2Placeholder={scenarioStrings.workRoomQuest2Placeholder} quest2Error={scenarioStrings.workRoomQuest2Error} quest2AnswerLevel0={scenarioStrings.workRoomQuest2Answer} quest2AnswerLevel1={scenarioStrings.workRoomQuest2Answer} questNumber={questNumber} quest1Button={appStrings.buttonHereWeAre} scenarioStrings={scenarioStrings} appStrings={appStrings} />
        )

    } else if (chapter === 6) {
        return (
            <Chapter startTimestamp={timestamp} navigation={navigation} scenario={route.params.scenario} language={route.params.language} avatarImage='friend1' endFunction={() => changeChapter()} string3={scenarioStrings.libraryHours1} startingPoint={route.params.startingPoint} quest2Level0={scenarioStrings.libraryHoursQuest1} quest2Level1={scenarioStrings.libraryHoursQuest1} quest2Placeholder={scenarioStrings.libraryHoursQuest1Placeholder} quest2Error={scenarioStrings.libraryHoursQuest1Error} quest2AnswerLevel0={scenarioStrings.libraryHoursQuest1Answer} quest2AnswerLevel1={scenarioStrings.libraryHoursQuest1Answer} questNumber={questNumber} scenarioStrings={scenarioStrings} appStrings={appStrings} />
        )

    } else if (chapter === 7) {
        return (
            <Chapter startTimestamp={timestamp} navigation={navigation} scenario={route.params.scenario} language={route.params.language} avatarImage='main' endFunction={() => changeChapter()} string4={scenarioStrings.endBeforeQuiz} startingPoint={route.params.startingPoint} scenarioStrings={scenarioStrings} appStrings={appStrings} />
        )

    } else if (chapter === 8) {
        return (
            <Quiz startTimestamp={timestamp} navigation={navigation} scenario={route.params.scenario} language={route.params.language} endFunction={(finalScore) => changeChapter(finalScore)} startingPoint={route.params.startingPoint} scenarioStrings={scenarioStrings} appStrings={appStrings} />
        )

    } else if (chapter === 9) {
        return (
            <Chapter score={score} navigation={navigation} scenario={route.params.scenario} language={route.params.language} avatarImage='good' endFunction={() => navigation.navigate('Home')} string1={scenarioStrings.quizEnd} string4={appStrings.gameEnd} startingPoint={route.params.startingPoint} scenarioStrings={scenarioStrings} appStrings={appStrings} />
        )

    }
}

const styles = StyleSheet.create({
    tipContainer: {
        padding: 15,
        marginVertical: 20,
        backgroundColor: Colors.lightWhite,
        borderRadius: 20,
        maxWidth: 300,
    },

    tipText: {
        fontFamily: 'DMSans-Medium',
        fontSize: 16,
        color: Colors.darkGrey,
    }
});