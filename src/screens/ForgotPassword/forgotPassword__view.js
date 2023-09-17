import propTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import ButtonRound from '../../components/ButtonRound';
import TextInput from '../../components/TextInput';
import Container from '../../layouts/Container';

import styles from './styles';

const ForgotPasswordView = ({
  onPressBack,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  submitForm,
  loading,
}) => (
  <Container
    loading={loading}
    headerTitle="Recuperação de senha"
    onPressBack={onPressBack}
  >
    <View style={styles.container}>
      <View style={styles.topView}>
        <TextInput
          label="Código recebido no email"
          defaultValue={values.code}
          placeholder="000000"
          onChangeText={handleChange('code')}
          onBlur={handleBlur('code')}
          error={touched.code && errors.code}
          maxLength={6}
        />
        <TextInput
          label="Nova senha"
          defaultValue={values.newPassword}
          placeholder="******"
          onChangeText={handleChange('newPassword')}
          onBlur={handleBlur('newPassword')}
          error={touched.newPassword && errors.newPassword}
          secureTextEntry
          autoFocus={false}
          style={styles.textInput}
        />
        <TextInput
          label="Confirmação da nova senha"
          defaultValue={values.newPasswordConfirmation}
          placeholder="******"
          onChangeText={handleChange('newPasswordConfirmation')}
          onBlur={handleBlur('newPasswordConfirmation')}
          error={touched.newPasswordConfirmation && errors.newPasswordConfirmation}
          secureTextEntry
          autoFocus={false}
          style={styles.textInput}
        />
      </View>
      <ButtonRound text="Confirmar senha" onPress={submitForm} style={styles.button} />
    </View>
  </Container>
);

ForgotPasswordView.propTypes = {
  onPressBack: propTypes.func.isRequired,
  values: propTypes.shape({
    code: propTypes.string,
    newPassword: propTypes.string,
    newPasswordConfirmation: propTypes.string,
  }),
  errors: propTypes.shape({
    code: propTypes.string,
    newPassword: propTypes.string,
    newPasswordConfirmation: propTypes.string,
  }),
  touched: propTypes.shape({
    code: propTypes.bool,
    newPassword: propTypes.bool,
    newPasswordConfirmation: propTypes.bool,
  }),
  handleChange: propTypes.func.isRequired,
  handleBlur: propTypes.func.isRequired,
  submitForm: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
};

ForgotPasswordView.defaultProps = {
  values: {
    code: '',
    newPassword: '',
    newPasswordConfirmation: '',
  },
  errors: {
    code: '',
    newPassword: '',
    newPasswordConfirmation: '',
  },
  touched: {
    code: false,
    newPassword: false,
    newPasswordConfirmation: false,
  },
};

export default ForgotPasswordView;
