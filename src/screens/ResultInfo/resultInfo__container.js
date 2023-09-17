import React, { useState } from 'react';
import { useNavigation } from 'react-navigation-hooks';

import useModalMessage from '../../hooks/useModalMessage';

import ReportInfoView from './resultInfo__view';

const ReportInfoContainer = () => {
  const { goBack, getParam } = useNavigation();
  const [loading, setLoading] = useState(true);
  const { showModalMessage } = useModalMessage();
  const source = getParam('source');

  const navigateGoBack = () => {
    goBack();
  };

  const error = () => {
      source !== [] ? 
        showModalMessage({
          title: 'Ops!',
          description: 'Tivemos um problema com a busca do seu exame, tente novamente',
        }) : []
  };



  return (
    <ReportInfoView
      loading={loading}
      source={source}
      onPressBack={navigateGoBack}
      onLoad={() => setLoading(false)}
      onError={error}
    />
  );
};

export default ReportInfoContainer;
