import React from 'react';
import { Text } from 'react-native';
import TextInput from '../../../../components/TextInput';
import Title from '../../../../components/Title';
import { useFormikForm } from '../../../../providers/FormikProvider';

import styles from './styles';

const ComplementView = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormikForm();

  return (
    <>
      <Text style={styles.title}>Se quiser, digite um complemento.</Text>
      <Text style={styles.subTitle}>Complemento</Text>
      <TextInput
        defaultValue={values.complement}
        placeholder="Casa, Apartamento, etc."
        onChangeText={handleChange('complement')}
        onBlur={handleBlur('complement')}
        error={touched.complement && errors.complement}
        style={styles.textInput}
      />
    </>
  );
};

export default ComplementView;
