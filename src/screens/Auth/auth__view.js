import propTypes from 'prop-types';
import React from 'react';
import {
  Animated,
  View,
  Text,
  Switch,
} from 'react-native';

import Button from '../../components/Button';
import ButtonRound from '../../components/ButtonRound';
import TextInput from '../../components/TextInput';
import Container from '../../layouts/Container';
import { useKeyboardAnimation } from '../../providers/KeyboardProvider';
import { masks } from '../../services/maskService';
import colors from '../../styles/colors';

import styles from './styles';

const AuthView = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  submitForm,
  onPressClose,
  onPressForgotPassword,
  loading,
  hasSavedPassword,
  hasBiometry,
  biometryState,
  biometryText,
  onChangeBiometryState,
}) => {
  const { keyboardHeight } = useKeyboardAnimation();


  return (
    <Container loading={loading} onPressBack={!loading ? onPressClose : null}>
      <View style={styles.container}>

        <View style={styles.topView}>
          <Text style={styles.title}>Entrar</Text>

          <TextInput
            label="CPF"
            defaultValue={values.cpf}
            placeholder="Por favor entre com seu CPF"
            onChangeText={handleChange('cpf')}
            formatText={(value) => masks.cpf(value, values.cpf)}
            onBlur={handleBlur('cpf')}
            error={touched.cpf && errors.cpf}
            style={styles.textInput}
          />

          {!hasSavedPassword && (
          <TextInput
            label="Senha"
            defaultValue={values.password}
            placeholder="Por favor entre com sua senha"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            error={touched.password && errors.password}
            secureTextEntry
            autoFocus={false}
            style={styles.textInput}
          />
          )}

          <Button
            text="Esqueceu sua senha?"
            onPress={onPressForgotPassword}
            link
            disabled={values.cpf.length !== 14}
            style={styles.linkButton}
            textButtonStyle={styles.linkTextButton}
          />

          {hasBiometry && (
          <View style={styles.switchView}>
            <Switch
              value={biometryState}
              thumbColor={colors.white}
              trackColor={{ true: colors.primary }}
              onValueChange={onChangeBiometryState}
            />
            <Text style={styles.biometryText}>{biometryText}</Text>
          </View>
          )}

        </View>

        <View style={styles.buttonView}>
          <ButtonRound
            text="Entrar"
            onPress={submitForm}
            disabled={Object.keys(errors).some(Boolean)}
          />
          <Animated.View style={[styles.animatedView, { height: keyboardHeight }]} />
        </View>


      </View>
    </Container>
  );
};

AuthView.propTypes = {
  values: propTypes.shape({
    cpf: propTypes.string,
    password: propTypes.string,
  }),
  errors: propTypes.shape({
    cpf: propTypes.string,
    password: propTypes.string,
  }),
  touched: propTypes.shape({
    cpf: propTypes.bool,
    password: propTypes.bool,
  }),
  handleChange: propTypes.func.isRequired,
  handleBlur: propTypes.func.isRequired,
  submitForm: propTypes.func.isRequired,
  onPressClose: propTypes.func.isRequired,
  onPressForgotPassword: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
  hasSavedPassword: propTypes.bool.isRequired,
  hasBiometry: propTypes.bool.isRequired,
  biometryState: propTypes.bool.isRequired,
  biometryText: propTypes.string,
  onChangeBiometryState: propTypes.func.isRequired,
};

AuthView.defaultProps = {
  values: {
    cpf: '',
    password: '',
  },
  errors: {
    cpf: '',
    password: '',
  },
  touched: {
    cpf: false,
    password: false,
  },
  biometryText: '',
};

export default AuthView;
