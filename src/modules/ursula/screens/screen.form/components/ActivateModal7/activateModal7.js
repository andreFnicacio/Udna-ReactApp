import propTypes from 'prop-types';
import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Modal from 'react-native-modal';

import Button from '../../../../../../components/Button';
import ButtonRound from '../../../../../../components/ButtonRound';
import colors from '../../../../../../styles/colors';

import styles from './styles';



const ActivateModal7 = ({
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
        <Text style={styles.text}>
          Favor entrar em contato com nossa equipe para informações sobre os dos participantes!
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

ActivateModal7.propTypes = {
  isVisible: propTypes.bool,
  code: propTypes.string,
  codeValidation: propTypes.string,
  onChangeCode: propTypes.func.isRequired,
  onPress: propTypes.func.isRequired,
  onPressSecond: propTypes.func.isRequired,
};

ActivateModal7.defaultProps = {
  isVisible: false,
  code: '',
  codeValidation: '',
};

export default ActivateModal7;
