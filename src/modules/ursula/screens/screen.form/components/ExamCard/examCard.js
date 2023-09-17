import propTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';

import ButtonRound from '../../../../../../components/ButtonRound';

import styles from './styles';

const ExamCard = ({
  name, onPress, style,
}) => (
  <View style={[styles.container, style]}>
    <View style={styles.topView}>
      <Text style={styles.title}>{`Bem vindo(a), ${name}!`}</Text>
      <Text style={styles.description}>
        Faça a reserva do seu teste rápido e agende a sua aplicação.
      </Text>
    </View>

    <ButtonRound text="Comprar" onPress={onPress} style={styles.button} />
  </View>
);

ExamCard.propTypes = {
  name: propTypes.string,
  onPress: propTypes.func.isRequired,
  style: propTypes.shape(),
};

ExamCard.defaultProps = {
  name: '',
  style: null,
};

export default ExamCard;
