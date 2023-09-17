import React from 'react';
import { Text } from 'react-native';
import PasswordCondition from '../../../../components/PasswordCondition';
import TextInput from '../../../../components/TextInput';
import Title from '../../../../components/Title';
import { useFormikForm } from '../../../../providers/FormikProvider';

import styles from './styles';

const PasswordView = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormikForm();
  const password = values.password;
  const cleanPassword = password.replace(' ','');

  const passwordConfirmeted = values.passwordConfirmation;
  const cleanPasswordConfirmeted = passwordConfirmeted.replace(' ', '');

  return (
    <>
      <Text style={styles.title}>Agora precisamos que digite uma senha segura para você.</Text>
      <PasswordCondition />
      <Text style={styles.subTitle}>Senha</Text>
      <TextInput
        defaultValue={cleanPassword}
        placeholder="******"
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        error={touched.password && errors.password}
        secureTextEntry
        style={styles.textInput}
      />
      <Text style={styles.subTitle}>Confirme sua senha</Text>
      <TextInput
        defaultValue={cleanPasswordConfirmeted}
        placeholder="******"
        onChangeText={handleChange('passwordConfirmation')}
        onBlur={handleBlur('passwordConfirmation')}
        error={touched.passwordConfirmation && errors.passwordConfirmation}
        secureTextEntry
        autoFocus={false}
        style={styles.textInput}
      />
    </>
  );
};

export default PasswordView;
