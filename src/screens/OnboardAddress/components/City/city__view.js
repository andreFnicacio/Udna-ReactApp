import React from 'react';
import { Text } from 'react-native';

import TextInput from '../../../../components/TextInput';
import Title from '../../../../components/Title';
import { useFormikForm } from '../../../../providers/FormikProvider';

import styles from './styles';

const CityView = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormikForm();

  return (
    <>
      
      <Text style={styles.title}>Em qual cidade você mora?</Text>
      <Text style={styles.subTitle}>Cidade</Text>
      <TextInput
        defaultValue={values.city}
        placeholder="Vitória"
        onChangeText={handleChange('city')}
        onBlur={handleBlur('city')}
        error={touched.city && errors.city}
        autoCapitalize="sentences"
        style={styles.textInput}
      />
    </>
  );
};

export default CityView;
