import propTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';

import TextInput from '../../../../components/TextInput';
import Title from '../../../../components/Title';
import { useFormikForm } from '../../../../providers/FormikProvider';
import { masks } from '../../../../services/maskService';

import styles from './styles';

const ZipCodeView = ({ searchAddress }) => {
  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleBlur,
  } = useFormikForm();

  const onChangeText = async (value) => {
    setFieldValue('zipCode', value);
    if (value.length === 10) {
      await searchAddress(value, setFieldValue);
    }
  };

  return (
    <>  
      <Text style={styles.title}>Agora precisamos dos seus dados de endereço, começando pelo seu cep.</Text>
      <Text style={styles.subTitle}>CEP</Text>
      <TextInput
        defaultValue={values.zipCode}
        placeholder="00.000-000"
        onChangeText={onChangeText}
        formatText={(value) => masks.zipCode(value, values.zipCode)}
        onBlur={handleBlur('zipCode')}
        error={touched.zipCode && errors.zipCode}
        keyboardType="number-pad"
        style={styles.textInput}
      />
    </>
  );
};

ZipCodeView.propTypes = {
  searchAddress: propTypes.func.isRequired,
};

export default ZipCodeView;
