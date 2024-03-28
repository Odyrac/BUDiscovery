const getAppStrings = (language) => {
  switch (language) {
    case 'en':
      return require(`./../constants/languages/stringsEN.json`);
    case 'fr':
      return require(`./../constants/languages/strings.json`);
    default:
      return require(`./../constants/languages/strings.json`);
  }
};

const getScenarioStrings = (scenario, language) => {
  switch (language) {
    case 'en':
      if (scenario === 1) return require(`./../assets/scenarios/1/scenarioEN.json`);
      if (scenario === 2) return require(`./../assets/scenarios/2/scenarioEN.json`);
      if (scenario === 3) return require(`./../assets/scenarios/3/scenarioEN.json`);
    
    case 'fr':
      if (scenario === 1) return require(`./../assets/scenarios/1/scenario.json`);
      if (scenario === 2) return require(`./../assets/scenarios/2/scenario.json`);
      if (scenario === 3) return require(`./../assets/scenarios/3/scenario.json`);

    default:
      if (scenario === 1) return require(`./../assets/scenarios/1/scenario.json`);
      if (scenario === 2) return require(`./../assets/scenarios/2/scenario.json`);
      if (scenario === 3) return require(`./../assets/scenarios/3/scenario.json`);
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