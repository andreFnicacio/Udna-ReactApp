import React from 'react';
import { Text } from 'react-native';
import TextInput from '../../../../components/TextInput';
import Title from '../../../../components/Title';
import { useFormikForm } from '../../../../providers/FormikProvider';

import styles from './styles';

const StreetView = () => {
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
      <Text style={styles.title}>Em qual rua você mora?</Text>
      <Text style={styles.subTitle}>Rua</Text>
      <TextInput
        label="Rua"
        defaultValue={values.street}
        placeholder="Avenida Gerônimo Monteiro"
        onChangeText={handleChange('street')}
        onBlur={handleBlur('street')}
        error={touched.street && errors.street}
        autoCapitalize="sentences"
        style={styles.textInput}
      />
    </>
  );
};

export default StreetView;
