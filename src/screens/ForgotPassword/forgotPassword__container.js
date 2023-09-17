/* eslint-disable max-len */
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigation } from 'react-navigation-hooks';

import useModalMessage from '../../hooks/useModalMessage';
import { useUser } from '../../providers/UserProvider';
import { maskRemoveService } from '../../services/maskService';
import { ForgotPasswordSubmitService } from '../../services/userService';
import { validationSchemaForgotPassword } from '../../services/validationService/validationAuthService';

import ForgoPasswordView from './forgotPassword__view';

const ForgotPasswordContainer = () => {
  const { user } = useUser();
  const { goBack } = useNavigation();
  const [loading, setLoading] = useState(false);
  const { showModalMessage } = useModalMessage();
  const [initialValues] = useState({
    code: '',
    newPassword: '',
    newPasswordConfirmation: '',
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    submitForm,
  } = useFormik({
    initialValues,
    validationSchema: validationSchemaForgotPassword,
    onSubmit,
    validateOnChange: true,
    validateOnMount: true,
  });

  async function onSubmit(data) {
    setLoading(true);
    const [error] = await ForgotPasswordSubmitService(maskRemoveService(user.cpf), data.code, data.newPassword);
    if (error) {
      setLoading(false);
      showModalMessage({
        title: 'Ops!',
        description: 'Tivemos um problema ao alterar sua senha, verifique se o código digitado está correto e tente novamente.',
      });
    } else {
      setLoading(false);
      goBack();
    }
  }

  const navigateGoBack = () => {
    goBack();
  };

  return (
    <ForgoPasswordView
      onPressBack={navigateGoBack}
      values={values}
      errors={errors}
      touched={touched}
      handleChange={handleChange}
      handleBlur={handleBlur}
      submitForm={submitForm}
      loading={loading}
    />
  );
};

export default ForgotPasswordContainer;
