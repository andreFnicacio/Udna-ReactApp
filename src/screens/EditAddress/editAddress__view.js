import propTypes from 'prop-types';
import React from 'react';
import { View, Animated, Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import ButtonRound from '../../components/ButtonRound';
import TextInput from '../../components/TextInput';
import states from '../../constants/states';
import Container from '../../layouts/Container';
import { useFormikForm } from '../../providers/FormikProvider';
import { useKeyboardAnimation } from '../../providers/KeyboardProvider';
import { masks } from '../../services/maskService';

import styles from './styles';

const EditAddressView = ({ loading, searchAddress, onPressBack }) => {
  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleChange,
    handleBlur,
    submitForm,
  } = useFormikForm();

  const { keyboardHeight } = useKeyboardAnimation();

  const onChangeZipCode = async (value) => {
    setFieldValue('zipCode', value);
    if (value.length === 10) {
      await searchAddress(value, setFieldValue);
    }
  };

  const onChangeState = (value, index) => {
    const state = states.filter((elt) => elt.id === index);
    setFieldValue('stateInitials', state[0].initials);
    setFieldValue('stateName', state[0].name);
  };

  return (
    <Container
      headerTitle="Endereço"
      loading={loading}
      onPressBack={onPressBack}
    >
       <Text style={styles.titleLabel}>CEP</Text>
      <TextInput
        defaultValue={values.zipCode}
        placeholder="00000-000"
        onChangeText={onChangeZipCode}
        formatText={(value) => masks.zipCode(value, values.zipCode)}
        onBlur={handleBlur('zipCode')}
        error={touched.zipCode && errors.zipCode}
        style={styles.textInput}
      />
       <Text style={styles.titleLabel}>Rua</Text>
      <TextInput
        defaultValue={values.street}
        placeholder="Rua genética 1"
        onChangeText={handleChange('street')}
        onBlur={handleBlur('street')}
        error={touched.street && errors.street}
        autoFocus={false}
        style={styles.textInput}
      />
       <Text style={styles.titleLabel}>Número</Text>
      <TextInput
        defaultValue={values.number}
        placeholder="00"
        onChangeText={handleChange('number')}
        onBlur={handleBlur('number')}
        error={touched.number && errors.number}
        keyboardType="number-pad"
        autoFocus={false}
        style={styles.textInput}
      />
       <Text style={styles.titleLabel}>Complemento</Text>
      <TextInput
        defaultValue={values.complement}
        placeholder="Casa, Apartamento, etc."
        onChangeText={handleChange('complement')}
        onBlur={handleBlur('complement')}
        error={touched.complement && errors.complement}
        autoFocus={false}
        style={styles.textInput}
      />
       <Text style={styles.titleLabel}>Bairro</Text>
      <TextInput
        defaultValue={values.neighborhood}
        placeholder="Bairro dos testes genéticos"
        onChangeText={handleChange('neighborhood')}
        onBlur={handleBlur('neighborhood')}
        error={touched.neighborhood && errors.neighborhood}
        autoFocus={false}
        style={styles.textInput}
      />
       <Text style={styles.titleLabel}>Cidade</Text>
      <TextInput
        defaultValue={values.city}
        placeholder="Bairro dos testes genéticos"
        onChangeText={handleChange('city')}
        onBlur={handleBlur('city')}
        error={touched.city && errors.city}
        autoFocus={false}
        style={styles.textInput}
      />
       <Text style={styles.titleLabel}>UF</Text>
      <Dropdown
        containerStyle={styles.dropdownContainer}
        inputContainerStyle={styles.dropdownInput}
        lineWidth={0}
        value={`${values.stateInitials} - ${values.stateName}`}
        error={touched.stateInitials && errors.stateInitials}
        data={states.map((elt) => ({
          id: elt.id,
          value: `${elt.initials} - ${elt.name}`,
        }))}
        onChangeText={onChangeState}
        rippleOpacity={0}
      />
      <View style={styles.buttonView}>
        <ButtonRound
          text="Editar"
          onPress={submitForm}
          disabled={Object.keys(errors).some(Boolean)}
        />
        <Animated.View style={[styles.animatedView, { height: keyboardHeight }]} />
      </View>
    </Container>
  );
};

EditAddressView.propTypes = {
  loading: propTypes.bool.isRequired,
  searchAddress: propTypes.func.isRequired,
  onPressBack: propTypes.func.isRequired,
};

export default EditAddressView;
