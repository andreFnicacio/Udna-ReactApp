import React from 'react';
import { useNavigation } from 'react-navigation-hooks';

import AuthOrOnboardView from './authOrOnboard__view';


const AuthOrOnboardContainer = () => {
  const { navigate } = useNavigation();

  const onSignIn = () => {
    navigate('Auth');
  };

  const onSignUp = () => {
    navigate('Onboard');
  };

  return (
    <AuthOrOnboardView
      onPressSignIn={onSignIn}
      onPressSignUp={onSignUp}
    />
  );
};

export default AuthOrOnboardContainer;
