import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { useNavigation } from 'react-navigation-hooks';

import { createUserCustomized } from '../../graphql/mutationsCustomized';
import useModalMessage from '../../hooks/useModalMessage';
import { FormikProvider } from '../../providers/FormikProvider';
import { useUser } from '../../providers/UserProvider';
import { maskRemoveService } from '../../services/maskService';
import { SignUpService } from '../../services/onboardService';
import { SignInService } from '../../services/userService';
import { validationSchemaOnboard } from '../../services/validationService/validationOnboardService';


import OmboardView from './onboard__view';


const OnboardContainer = () => {
  const { setUser } = useUser();
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(false);
  const { showModalMessage } = useModalMessage();

  const [createUserDatabase, { error: createUserError }] = useMutation(createUserCustomized);



  const initialValues = {
    cpf: '',
    name: '',
    email: '',
    emailConfirmation: '',
    password: '',
    passwordConfirmation: '',
    cellphone: '',
  };

  const goBack = () => {
    navigate('AuthOrOnboard');
  };

  const showError = (message) => {
    showModalMessage({
      title: 'Erro',
      description: message,
    });
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const body = {
      name: data.name,
      email: data.email,
      phone_number: `+55${maskRemoveService(data.cellphone)}`,
    };
    const username = maskRemoveService(data.cpf);
    const [errorCreate] = await SignUpService(username, data.password, body);

    if (errorCreate) {
      setLoading(false);
      showError('Tivemos um problema ao criar sua conta, tente novamente.');
    } else {
      const [errorSignIn] = await SignInService(username, data.password);

      if (errorSignIn) {
        setLoading(false);
        showError('Sua conta já foi criada mas tivemos algum problema no servidor, tente fazer o login pela tela de autenticação.');
      } else {
        const bodyDatabase = {
          input: {
            id: maskRemoveService(data.cpf),
            name: data.name,
            email: data.email,
            cellphone: maskRemoveService(data.cellphone),
            cpf: maskRemoveService(data.cpf),
            restoreId: null,
            nutritionalProfile: false,
          },
        };
        const res = await createUserDatabase({ variables: bodyDatabase });

        if (createUserError) {
          setLoading(false);
          showError('Tivemos um problema ao criar sua conta.');
        } else {
          setLoading(false);
          setUser({
            cpf: res.data.createUser.id,
          });
          navigate('OnboardSuccess');
        }
      }
    }
  };

  return (
    <FormikProvider
      initialValues={initialValues}
      validationSchema={validationSchemaOnboard}
      onSubmit={onSubmit}
    >
      <OmboardView
        loading={loading}
        goBack={goBack}
      />
    </FormikProvider>
  );
};

export default OnboardContainer;
