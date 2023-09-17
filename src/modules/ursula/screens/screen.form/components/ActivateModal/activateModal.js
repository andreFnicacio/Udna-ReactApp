import propTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Modal from 'react-native-modal';

import Button from '../../../../../../components/Button';
import ButtonRound from '../../../../../../components/ButtonRound';
import colors from '../../../../../../styles/colors';

import styles from './styles';

const ActivateModal = ({
  isVisible,
  code,
  codeValidation,
  onChangeCode,
  onPress,
  onPressSecond,
}) => {
  const getRender = () => {
    switch (codeValidation) {
      case 'valid':
        return (
          <>
            <Text style={styles.text}>
              Código válido! Para finalizar a ativação, realize a compra do seu produto.
            </Text>
            <View style={styles.buttonView}>
              <ButtonRound
                text="Ok"
                onPress={onPress}
                style={styles.button}
              />
            </View>
          </>
        );

      case 'invalid':
        return (
          <>
            <Text style={styles.text}>O código digitado é inválido!</Text>
            <View style={styles.buttonView}>
              <ButtonRound
                text="Ok"
                onPress={onPress}
                style={styles.button}
              />
            </View>
          </>
        );

      default:
        return (
          <>
            <Text style={styles.text}>Digite o seu código de ativação:</Text>
            <View style={styles.textInputView}>
              <TextField
                defaultValue={code}
                placeholder="000000"
                onChangeText={onChangeCode}
                placeholderTextColor={colors.gray3}
                keyboardType="number-pad"
                maxLength={6}
                textColor={colors.primary}
                tintColor={colors.primary}
                baseColor={colors.primary}
                autoFocus
              />
            </View>
            <View style={styles.buttonView}>
              <ButtonRound
                text="Validar"
                onPress={onPress}
                style={styles.button}
              />
              <Button
                text="Cancelar"
                onPress={onPressSecond}
                style={styles.button}
              />
            </View>
          </>
        );
    }
  };

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        {getRender()}
      </View>
    </Modal>
  );
};

ActivateModal.propTypes = {
  isVisible: propTypes.bool,
  code: propTypes.string,
  codeValidation: propTypes.string,
  onChangeCode: propTypes.func.isRequired,
  onPress: propTypes.func.isRequired,
  onPressSecond: propTypes.func.isRequired,
};

ActivateModal.defaultProps = {
  isVisible: false,
  code: '',
  codeValidation: '',
};

export default ActivateModal;
