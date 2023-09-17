import React from 'react';
import { Text } from 'react-native';
import TextInput from '../../../../components/TextInput';

import { useFormikForm } from '../../../../providers/FormikProvider';
import { masks } from '../../../../services/maskService';

import styles from './styles';

const CellphoneView = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormikForm();

  return (
    <>
    <Text style={styles.title}>Por fim, nos diga seu celular.</Text>
    <Text style={styles.subTitle}>Celular</Text>
      <TextInput
        defaultValue={values.cellphone}
        placeholder="(00) 00000-0000"
        onChangeText={handleChange('cellphone')}
        formatText={(value) => masks.cellphone(value, values.cellphone)}
        onBlur={handleBlur('cellphone')}
        error={touched.cellphone && errors.cellphone}
        keyboardType="number-pad"
        style={styles.textInput}
      />
    </>
  );
};

export default CellphoneView;
