import React from 'react';
import * as FileSystem from 'expo-file-system';



const useAppStrings = (language) => {
  const [appStrings, setAppStrings] = React.useState({});

  React.useEffect(() => {
    async function fetchAppStrings() {
      const strings = await getAppStrings(language);
      strings ? setAppStrings(JSON.parse(strings)) : setAppStrings({ version: 'OFFLINE'});
    }

    fetchAppStrings();
  }, []);

  return appStrings;
};



const getAppStrings = async (language) => {
  switch (language) {
    case 'en':
      try {
        const contentEN = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'json/appEN.json');
        return contentEN;
      } catch (error) {
        console.error('Error reading EN file:', error);
        return null;
      }
    case 'fr':
      try {
        const contentFR = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'json/app.json');
        return contentFR;
      } catch (error) {
        console.error('Error reading FR file:', error);
        return null;
      }
    default:
      try {
        const contentFR = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'json/app.json');
        return contentFR;
      } catch (error) {
        console.error('Error reading FR file:', error);
        return null;
      }
  }
};


export { useAppStrings };


const useScenarioStrings = (scenario, language) => {
  const [scenarioStrings, setScenarioStrings] = React.useState({});

  React.useEffect(() => {
    async function fetchScenarioStrings() {
      const strings = await getScenarioStrings(scenario, language);
      strings ? setScenarioStrings(JSON.parse(strings)) : setScenarioStrings({ settings: { enabled: false } });
    }

    fetchScenarioStrings();
  }, []);

  return scenarioStrings;
};

const getScenarioStrings = async (scenario, language) => {
  switch (language) {
    case 'en':
      try {
        const contentEN = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + `json/scenario${scenario}EN.json`);
        return contentEN;
      } catch (error) {
        console.error('Error reading EN file:', error);
        return null;
      }
    case 'fr':
      try {
        const contentFR = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + `json/scenario${scenario}.json`);
        return contentFR;
      } catch (error) {
        console.error('Error reading FR file:', error);
        return null;
      }
    default:
      try {
        const contentFR = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + `json/scenario${scenario}.json`);
        return contentFR;
      } catch (error) {
        console.error('Error reading FR file:', error);
        return null;
      }
  }
}

export { useScenarioStrings };


const useQuizStrings = (language) => {
  const [quizStrings, setQuizStrings] = React.useState({});

  React.useEffect(() => {
    async function fetchQuizStrings() {
      const strings = await getQuizStrings(language);
      strings ? setQuizStrings(JSON.parse(strings)) : setQuizStrings({});
    }

    fetchQuizStrings();
  }, []);

  return quizStrings;
};

const getQuizStrings = async (language) => {
  switch (language) {
    case 'en':
      try {
        const contentEN = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'json/quizEN.json');
        return contentEN;
      } catch (error) {
        console.error('Error reading EN file:', error);
        return null;
      }
    case 'fr':
      try {
        const contentFR = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'json/quiz.json');
        return contentFR;
      } catch (error) {
        console.error('Error reading FR file:', error);
        return null;
      }
    default:
      try {
        const contentFR = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'json/quiz.json');
        return contentFR;
      } catch (error) {
        console.error('Error reading FR file:', error);
        return null;
      }
  }
}

export { useQuizStrings };



/*
const useQuizStrings = (language) => {
  switch (language) {
    case 'en':
      return require(`./../constants/languages/quizEN.json`);
    case 'fr':
      return require(`./../constants/languages/quiz.json`);
    default:
      return require(`./../constants/languages/quiz.json`);
  }
};

export { useQuizStrings };
*/