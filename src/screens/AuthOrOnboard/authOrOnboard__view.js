import propTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';

import UDNA from '../../assets/svg/UDNA';
import ButtonRound from '../../components/ButtonRound';
import Container from '../../layouts/Container';

import styles from './styles';

const AuthOrOnboardView = ({ onPressSignIn, onPressSignUp }) => (
  <Container withoutHeader>
    <View style={styles.container}>
      <View style={styles.topView}>
        <UDNA style={styles.udna} />

        <Text style={styles.description}>
          Descubra o que é único em você. Saiba mais sobre sua saúde!
        </Text>
      </View>

      <View style={styles.buttonView}>
        <View style={styles.borderButtonView}> 
        <ButtonRound
          text="Entrar"
          color="white"
          onPress={onPressSignIn}
          style={styles.button}
        />
        </View>
        <View style={styles.borderButtonView}> 
        <ButtonRound
          color="white"
          text="Criar conta"
          onPress={onPressSignUp}
          style={styles.button}
        />
        </View>
      </View>

    </View>
  </Container>
);


AuthOrOnboardView.propTypes = {
  onPressSignIn: propTypes.func.isRequired,
  onPressSignUp: propTypes.func.isRequired,
};

export default AuthOrOnboardView;
