import propTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';V

import ButtonRound from '../../../../../../components/ButtonRound';

import styles from './styles';

const TestDNA = ({
  onPress, style,
}) => (
  <View style={[styles.container, style]}>
    <ButtonRound color="white" text="Acessar" onPress={onPress} style={styles.button} />
    <View style={styles.topView}>
      <Text style={styles.title}>Meus Pedidos</Text>
      <Text style={styles.description}>Acesse as suas compras na Loja.</Text>
    </View>
  </View>
);

TestDNA.propTypes = {
  onPress: propTypes.func.isRequired,
  style: propTypes.shape(),
};

TestDNA.defaultProps = {
  style: null,
};

export default TestDNA;
