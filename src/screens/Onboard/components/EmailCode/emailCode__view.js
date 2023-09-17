import propTypes from 'prop-types';
import React from 'react';

import Button from '../../../../components/Button';
import TextInput from '../../../../components/TextInput';
import Title from '../../../../components/Title';
import { useFormikForm } from '../../../../providers/FormikProvider';

import styles from './styles';

const EmailCodeView = ({ resendCode, loadingButton }) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormikForm();

  return (
    <>
      <Title text={`Digite o código que foi enviado para ${values.email}`} />
      <TextInput
        label="Código"
        defaultValue={values.emailCode}
        placeholder="000000"
        onChangeText={handleChange('emailCode')}
        onBlur={handleBlur('emailCode')}
        error={touched.emailCode && errors.emailCode}
        maxLength={6}
        style={styles.textInput}
      />
      <Button
        text="Reenviar código"
        onPress={() => resendCode(values)}
        loading={loadingButton}
        style={styles.button}
      />
    </>
  );
};

EmailCodeView.propTypes = {
  resendCode: propTypes.func.isRequired,
  loadingButton: propTypes.bool.isRequired,
};

export default EmailCodeView;
