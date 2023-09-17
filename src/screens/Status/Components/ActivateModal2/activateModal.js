import propTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Modal from 'react-native-modal';

import Button from '../../../../components/Button';
import ButtonRound from '../../../../components/ButtonRound';
import colors from '../../../../styles/colors';

import styles from './styles';

const ActivateModal = ({
  isVisible,
  code,
  codeValidation,
  onChangeCode,
  onPress,
  onPressSecond,
}) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
      <Text style={styles.textTitle}>Informações de coleta</Text>
            <View style={styles.textInputView}>
              <Text style={styles.text}>Agora é com você! </Text>
              <Text style={styles.text}>Siga as orientações que enviamos no kit para realizar a sua coleta. Assim que terminar, entre em contato com a nossa equipe para enviar o seu material sem custo.</Text>
            </View>
            
            <View style={styles.buttonView}>
              <Button
                text="Fechar informações"
                onPress={onPressSecond}
                style={styles.button}
              />
            </View>
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


