import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';

const DisableBackButton = () => {

  useEffect(() => {
    const disableBackButton = () => {
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', disableBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', disableBackButton);
    };
  }, []);

  return null;
}

export default DisableBackButton;