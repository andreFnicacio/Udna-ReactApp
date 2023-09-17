import React from 'react';
import { Text } from 'react-native';
import TextInput from '../../../../components/TextInput';
import Title from '../../../../components/Title';
import { useFormikForm } from '../../../../providers/FormikProvider';

import styles from './styles';

const EmailView = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormikForm();

  return (
    <>
      <Title text="" />
      <Text style={styles.title}>E qual é o seu email ?</Text>
      <Text style={styles.subTitle}>Email</Text>
      <TextInput
        defaultValue={values.email}
        placeholder="udna@udna.com.br"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        error={touched.email && errors.email}
        style={styles.textInput}
      />
      <Text style={styles.subTitle}>Confirmação do email</Text>
      <TextInput
        defaultValue={values.emailConfirmation}
        placeholder="udna@udna.com.br"
        onChangeText={handleChange('emailConfirmation')}
        onBlur={handleBlur('emailConfirmation')}
        error={touched.emailConfirmation && errors.emailConfirmation}
        autoFocus={false}
        style={styles.textInput}
      />
    </>
  );
};

export default EmailView;
