import React from 'react';
import { Clipboard, Linking } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { useUser } from "../../providers/UserProvider";
import useModalMessage from '../../hooks/useModalMessage';

import BilletView from './billet__view';

const BilletContainer = () => {
  const { navigate, getParam } = useNavigation();
  const { showModalMessage } = useModalMessage();
  const billet = getParam('billet');
  
  

  const onCopyCode = () => {
    callToData();
    Clipboard.setString(billet.barCode);
    showModalMessage({ description: 'Código de barras copiado.' });
  };

  const onOpenLink = () => {
    callToData();
    Linking.openURL(billet.url);
  };

  const onGoOut = () => {
    navigate('Shopping');
  };

  return (
    <BilletView
      billet={billet}
      onPressClipboard={onCopyCode}
      onPressLink={onOpenLink}
      onPressGoOut={onGoOut}
    />
  );
};

export default BilletContainer;
