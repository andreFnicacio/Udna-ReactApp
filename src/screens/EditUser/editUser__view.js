import propTypes from 'prop-types';
import React from 'react';
import { View, Animated } from 'react-native';

import ButtonRound from '../../components/ButtonRound';
import TextInput from '../../components/TextInput';
import Container from '../../layouts/Container';
import { useFormikForm } from '../../providers/FormikProvider';
import { useKeyboardAnimation } from '../../providers/KeyboardProvider';
import { masks } from '../../services/maskService';

import styles from './styles';

const EditUserView = ({ loading, onPressBack }) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    submitForm,
  } = useFormikForm();

  const { keyboardHeight } = useKeyboardAnimation();

  return (
    <Container
      headerTitle="Pessoal"
      loading={loading}
      onPressBack={onPressBack}
    >
      <TextInput
        label="Nome"
        defaultValue={values.name}
        placeholder="João da uDNA"
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        error={touched.name && errors.name}
        style={styles.textInput}
      />
      <TextInput
        label="Email"
        defaultValue={values.email}
        placeholder="somos@udna.com.br"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        error={touched.email && errors.email}
        autoFocus={false}
        style={styles.textInput}
      />
      <TextInput
        label="Celular"
        defaultValue={values.cellphone}
        placeholder="(00) 00000-0000"
        onChangeText={handleChange('cellphone')}
        formatText={(value) => masks.cellphone(value, values.cellphone)}
        onBlur={handleBlur('cellphone')}
        error={touched.cellphone && errors.cellphone}
        autoFocus={false}
        style={styles.textInput}
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

EditUserView.propTypes = {
  loading: propTypes.bool.isRequired,
  onPressBack: propTypes.func.isRequired,
};

export default EditUserView;
