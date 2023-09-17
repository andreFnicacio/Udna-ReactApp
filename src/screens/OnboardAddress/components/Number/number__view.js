import React from 'react';
import { Text } from 'react-native';
import TextInput from '../../../../components/TextInput';
import Title from '../../../../components/Title';
import { useFormikForm } from '../../../../providers/FormikProvider';

import styles from './styles';

const NumberView = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormikForm();

  return (
    <>
      <Text style={styles.title}>E qual o número da sua casa ?</Text>
      <Text style={styles.subTitle}>Número</Text>
      <TextInput
        defaultValue={values.number}
        placeholder="00"
        onChangeText={handleChange('number')}
        onBlur={handleBlur('number')}
        error={touched.number && errors.number}
        keyboardType="number-pad"
        style={styles.textInput}
      />
    </>
  );
};

export default NumberView;
