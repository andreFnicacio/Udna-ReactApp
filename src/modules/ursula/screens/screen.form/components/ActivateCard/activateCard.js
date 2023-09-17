import propTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';

import ButtonRound from '../../../../../../components/ButtonRound';

import styles from './styles';

const ActivateCard = ({
  name, onPress, style,
}) => (
  <View style={[styles.container, style]}>
    <View style={styles.topView}>
      <Text style={styles.title}>{`Bem vindo(a), ${name}!`}</Text>
      <Text style={styles.description}>Aqui é onde você poderá ativar o seu kit.</Text>
    </View>

    <ButtonRound text="Ativar" onPress={onPress} style={styles.button} />
  </View>
);

ActivateCard.propTypes = {
  name: propTypes.string,
  // image: propTypes.number.isRequired,
  onPress: propTypes.func.isRequired,
  style: propTypes.shape(),
};

ActivateCard.defaultProps = {
  name: '',
  style: null,
};

export default ActivateCard;
