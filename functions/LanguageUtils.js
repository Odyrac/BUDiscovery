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



export { useAppStrings };



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


const getScenarioStrings = (scenario, language) => {
  switch (language) {
    case 'en':
      if (scenario === 1) return require(`./../assets/scenarios/1/scenario1EN.json`);
      if (scenario === 2) return require(`./../assets/scenarios/2/scenario2EN.json`);
      if (scenario === 3) return require(`./../assets/scenarios/3/scenario3EN.json`);

    case 'fr':
      if (scenario === 1) return require(`./../assets/scenarios/1/scenario1.json`);
      if (scenario === 2) return require(`./../assets/scenarios/2/scenario2.json`);
      if (scenario === 3) return require(`./../assets/scenarios/3/scenario3.json`);

    default:
      if (scenario === 1) return require(`./../assets/scenarios/1/scenario1.json`);
      if (scenario === 2) return require(`./../assets/scenarios/2/scenario2.json`);
      if (scenario === 3) return require(`./../assets/scenarios/3/scenario3.json`);
  }
};

const getQuizStrings = (language) => {
  switch (language) {
    case 'en':
      return require(`./../constants/languages/quizEN.json`);
    case 'fr':
      return require(`./../constants/languages/quiz.json`);
    default:
      return require(`./../constants/languages/quiz.json`);
  }
};



export { getAppStrings };
export { getScenarioStrings };
export { getQuizStrings };