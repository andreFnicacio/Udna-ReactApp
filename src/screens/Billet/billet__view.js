import propTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import ButtonRound from '../../components/ButtonRound';
import Container from '../../layouts/Container/container';

import styles from './styles';

const BilletView = ({
  billet,
  onPressClipboard,
  onPressLink,
  onPressGoOut,
  
}) => (
  <Container>
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.title}>
          Este é seu código de barras, clique nele ou no botão abaixo para copiá-lo:
        </Text>
        <TouchableOpacity onPress={onPressClipboard}>
          <Text style={styles.code}>{billet.barCode}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Viewtext}>
        <Text style={styles.text}>
          Aguarde o kit de autocoleta chegar no endereço cadastrado. Caso você tenha ativado o kit, entre em contato com a nossa equipe para enviar o material para o laboratório.
        </Text>
      </View>
      <View style={styles.buttonView}>
        <ButtonRound
          text="Copiar código"
          onPress={onPressClipboard}
          style={styles.button}
        />
        <ButtonRound
          text="Abrir link"
          onPress={onPressLink}
          style={styles.button}
        />
        <ButtonRound
          color="white"
          text="Meus pedidos"
          onPress={onPressGoOut}
          style={styles.button}
        />
      </View>
    </View>
  </Container>
);

BilletView.propTypes = {
  billet: propTypes.shape({
    barCode: propTypes.string,
    url: propTypes.string,
  }),
  barCode: propTypes.string.isRequired,
  onPressClipboard: propTypes.func.isRequired,
  onPressLink: propTypes.func.isRequired,
  onPressGoOut: propTypes.func.isRequired,
};

BilletView.defaultProps = {
  billet: {
    barCode: '',
    url: '',
  },
};

export default BilletView;
