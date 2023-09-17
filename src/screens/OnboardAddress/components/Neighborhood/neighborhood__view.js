import React from 'react';
import { Text } from 'react-native';
import TextInput from '../../../../components/TextInput';
import { useFormikForm } from '../../../../providers/FormikProvider';
import styles from './styles';

const NeighborhoodView = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormikForm();

  return (
    <>
      <Text style={styles.title}>Em qual bairro você mora?</Text>
      <Text style={styles.subTitle}>Bairro</Text>
      <TextInput
        defaultValue={values.neighborhood}
        placeholder="São Francisco"
        onChangeText={handleChange('neighborhood')}
        onBlur={handleBlur('neighborhood')}
        error={touched.neighborhood && errors.neighborhood}
        autoCapitalize="sentences"
        style={styles.textInput}
      />
    </>
  );
};

export default NeighborhoodView;
