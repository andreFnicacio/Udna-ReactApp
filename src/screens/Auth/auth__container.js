import AsyncStorage from '@react-native-community/async-storage';
import { useFormik } from 'formik';
import React, { useState, useEffect } from 'react';
import ReactNativeBiometrics from 'react-native-biometrics';
import { useNavigation } from 'react-navigation-hooks';

import useModalMessage from '../../hooks/useModalMessage';
import { useUser } from '../../providers/UserProvider';
import { maskRemoveService, masks } from '../../services/maskService';
import { SignInService, ForgotPasswordService } from '../../services/userService';
import { validationSchemaAuth } from '../../services/validationService/validationAuthService';

import AuthView from './auth__view';

const AuthContainer = () => {
  const { navigate } = useNavigation();
  const { setUser } = useUser();
  const [loading, setLoading] = useState(false);
  const [hasSavedPassword, setHasSavedPassword] = useState(false);
  const [hasBiometry, setHasBiometry] = useState(false);
  const [biometryState, setBiometryState] = useState(false);
  const [biometryText, setBiometryText] = useState('');
  const { showModalMessage } = useModalMessage();

  const [initialValues] = useState({
    cpf: '',
    password: '',
  });

  useEffect(() => {
    getSavedUsername();
    getSensorAvailable();
    getSavedPassword();
  }, []);

  const onClose = () => {
    navigate('AuthOrOnboard');
  };

  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleChange,
    handleBlur,
    submitForm,
  } = useFormik({
    initialValues,
    validationSchema: validationSchemaAuth,
    onSubmit,
    validateOnChange: true,
    validateOnMount: true,
  });

  async function getSensorAvailable() {
    try {
      const { available, biometryType } = await ReactNativeBiometrics.isSensorAvailable();

      if (available) {
        setHasBiometry(true);
        if (biometryType === ReactNativeBiometrics.TouchID) {
          setBiometryText('Touch Id');
          return;
        }
        if (biometryType === ReactNativeBiometrics.FaceID) {
          setBiometryText('Face Id');
          return;
        }
        if (biometryType === ReactNativeBiometrics.Biometrics) {
          setBiometryText('Biometria');
          return;
        }
        return;
      }
      setHasBiometry(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function getSavedUsername() {
    const savedUsername = await AsyncStorage.getItem('username');
    if (savedUsername) {
      setFieldValue('cpf', masks.cpf(savedUsername));
    }
  }

  async function getSavedPassword() {
    const savedPassword = await AsyncStorage.getItem('password');
    if (savedPassword) {
      setHasSavedPassword(true);
      setBiometryState(true);
      setFieldValue('password', savedPassword);
    }
  }

  const SignIn = async (username, password) => {
    const [errorSignIn] = await SignInService(username, password.replace(' ', ''));


    if (errorSignIn) {
      setLoading(false);
      showModalMessage({
        title: 'Ops!',
        description: 'Tivemos um problema ao fazer login, tente novamente.',
      });
    } else {
      AsyncStorage.setItem('username', username);
      if (biometryState) AsyncStorage.setItem('password', password);
      setUser({ cpf: username });
      setLoading(false);
      navigate('Home');
    }
  };

  const SignInWithBiometrics = async (username, password) => {
    const { success } = await ReactNativeBiometrics.simplePrompt({ promptMessage: 'Confirme sua biometria' });

    if (success) {
      SignIn(username, password);
    }
  };

  async function onSubmit(data) {
    setLoading(true);

    const username = maskRemoveService(data.cpf);

    if (biometryState) {
      SignInWithBiometrics(username, data.password);
    } else {
      SignIn(username, data.password);
    }
  }

  const onForgotPassword = async () => {
    setLoading(true);
    const [error] = await ForgotPasswordService(maskRemoveService(values.cpf));
    if (error) {
      setLoading(false);
      showModalMessage({
        title: 'Ops',
        description: 'Tivemos um problema ao enviar seu código.',
      });
    } else {
      setUser({ cpf: values.cpf });
      setLoading(false);
      navigate('ForgotPassword');
    }
  };

  const onChangeBiometryState = (state) => {
    if (!state) {
      setFieldValue('password', '');
      AsyncStorage.removeItem('password');
      setHasSavedPassword(false);
    } else {
      showModalMessage({
        title: 'Biometria ativada',
        description: 'Agora você já pode fazer login sem digitar a senha.',
      });
    }
    setBiometryState(state);
  };

  return (
    <AuthView
      values={values}
      errors={errors}
      touched={touched}
      handleChange={handleChange}
      handleBlur={handleBlur}
      submitForm={submitForm}
      onPressClose={onClose}
      onPressForgotPassword={onForgotPassword}
      loading={loading}
      hasSavedPassword={hasSavedPassword}
      hasBiometry={hasBiometry}
      biometryState={biometryState}
      biometryText={biometryText}
      onChangeBiometryState={onChangeBiometryState}
    />
  );
};
export default AuthContainer;
