import propTypes from 'prop-types';
import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Modal from 'react-native-modal';

import Button from '../../../../components/Button';
import ButtonRound from '../../../../components/ButtonRound';
import colors from '../../../../styles/colors';

import styles from './styles';



const ActivateModal5 = ({
  isVisible,
  onChangeCode,
  
  onPressSecond,
}) => {

  const [isModalVisible5, setIsModalVisible5] = useState(false);
  const [code, setCode] = useState('');
  const [codeValidation, setCodeValidation] = useState('');


  const [posit, setPosit] = useState(0);
  const getRender = () => {
    return (
      <>
      <Text style={styles.text}>Teste de Paternidade ou Maternidade</Text>
        <Text style={styles.subText}>
        Aqui você pode simular e comprar um teste de paternidade ou maternidade DUO. O teste sempre é feito entre um suposto pai ou mãe e um suposto filho/filha e/ou sua mãe biológica. Qualquer uma dessas combinações é válida.
        Para comprar o teste, é só você responder as perguntas da calculadora e clicar no botão COMPRAR. A compra do teste já inclui um kit de autocoleta.
        </Text>
        <View style={styles.buttonView}>
          <ButtonRound
            text="Ok"
            onPress={onPressSecond}
            
            style={styles.button}
          />
        </View>
      </>
    );
  };

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        {getRender()}
      </View>
    </Modal>
  );
};

ActivateModal5.propTypes = {
  isVisible: propTypes.bool,
  code: propTypes.string,
  codeValidation: propTypes.string,
  onChangeCode: propTypes.func.isRequired,
  onPress: propTypes.func.isRequired,
  onPressSecond: propTypes.func.isRequired,
};

ActivateModal5.defaultProps = {
  isVisible: false,
  code: '',
  codeValidation: '',
};

export default ActivateModal5;
