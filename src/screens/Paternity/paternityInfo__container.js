import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import { updateKitCustomized } from '../../graphql/mutationsCustomized';
import useModalMessage from '../../hooks/useModalMessage';
import { useUser } from '../../providers/UserProvider';
import { maskRemoveService } from '../../services/maskService';
import { buyExamBilletService, buyExamCreditCardService } from '../../services/storeService';

import Paternity from '../Paternity/paternity';


const PaternityInfoContainer = () => {
  const { goBack, getParam, navigate } = useNavigation();
  const { user } = useUser();
  const exam = getParam('exam');
  const codeId = getParam('codeId');
  

  

  

  return (
    <Paternity
      
      exam={exam}
      
      
      
      
    />
  );
};

export default PaternityInfoContainer;