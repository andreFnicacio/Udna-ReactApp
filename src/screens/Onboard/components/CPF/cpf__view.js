import React from 'react';
import { Text } from 'react-native';

import TextInput from '../../../../components/TextInput';
import Title from '../../../../components/Title';
import { useFormikForm } from '../../../../providers/FormikProvider';
import { masks } from '../../../../services/maskService';

import styles from './styles';

const CPFView = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormikForm();

  return (
    <>
      <Text style={styles.title}>Para começar, nos diga qual é o seu cpf.</Text>
      <Text style={styles.subTitle}>CPF</Text>
      <TextInput
        defaultValue={values.cpf}
        placeholder="111.222.333-44"
        onChangeText={handleChange('cpf')}
        formatText={(value) => masks.cpf(value, values.cpf)}
        onBlur={handleBlur('cpf')}
        error={touched.cpf && errors.cpf}
        keyboardType="number-pad"
        style={styles.textInput}
      />
    </>
  );
};

export default CPFView;
