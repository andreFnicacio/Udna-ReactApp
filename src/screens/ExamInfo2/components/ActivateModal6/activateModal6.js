import propTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Modal from 'react-native-modal';

import Button from '../../../../components/Button';
import ButtonRound from '../../../../components/ButtonRound';
import colors from '../../../../styles/colors';

import styles from './styles';

import Sugestions2 from '../Sugestions/index2';

const ActivateModal6 = ({
  isVisible,
  code,
  codeValidation,
  onChangeCode,
  onPress,
  onPressSecond,
  textInputView,
  ScrollView
}) => {

  

  const getRender = () => {
    switch (codeValidation) {
      case 'valid':
        return (
          <>
            <Text style={styles.text}>
              Dados Preencido com sucesso.
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
            <Text style={styles.text}>Dados Incompleto, Favor preencher os dados dos participantes!</Text>
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
            <Text style={styles.text}>Dados dos Participantes:</Text>
              <View style={styles.textInputView}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={styles.scrollView}
                  contentContainerStyle={styles.scrollViewContent}
                >
                  <TextField
                  defaultValue={code}
                  placeholder="Nome"
                  onChangeText={onChangeCode}
                  placeholderTextColor={colors.gray3}
                  textInputView
                  maxLength={24}
                  textColor={colors.primary}
                  tintColor={colors.primary}
                  baseColor={colors.primary}
                  autoFocus
                />
                </ScrollView>
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

ActivateModal6.propTypes = {
  isVisible: propTypes.bool,
  code: propTypes.string,
  codeValidation: propTypes.string,
  onChangeCode: propTypes.func.isRequired,
  onPress: propTypes.func.isRequired,
  onPressSecond: propTypes.func.isRequired,
};

ActivateModal6.defaultProps = {
  isVisible: false,
  code: '',
  codeValidation: '',
};

export default ActivateModal6;


/**
 * 
 *            <TextField
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
 */