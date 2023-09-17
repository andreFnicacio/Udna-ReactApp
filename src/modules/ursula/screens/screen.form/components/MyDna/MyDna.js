import propTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';

import ButtonRound from '../../../../../../components/ButtonRound';

import styles from './styles';

const Laudo = ({
  onPress, style,
}) => (
  <View style={[styles.container, style]}>
    <ButtonRound text="Acessar" onPress={onPress} style={styles.button} />
    <View style={styles.topView}>
      <Text style={[styles.title, styles.description]}>Meu DNA</Text>
      
    </View>
  </View>
);

Laudo.propTypes = {
  onPress: propTypes.func.isRequired,
  style: propTypes.shape(),
};

Laudo.defaultProps = {
  style: null,
};

export default Laudo;
