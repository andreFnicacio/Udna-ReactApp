import LottieView from 'lottie-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import SuccessLottie from '../../assets/lottie/Success.json';
import ButtonRound from '../../components/ButtonRound';
import Container from '../../layouts/Container/container';

import styles from './styles';



const Success = () => {
  const { navigate, getParam } = useNavigation();
  const subtitle = getParam('subtitle');

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.topView}>
          <LottieView
            source={SuccessLottie}
            autoPlay
            loop={false}
            style={styles.lottie}
          />
          <Text style={styles.title}>Compra realizada com sucesso. Aguarde o kit de autocoleta chegar no endereço cadastrado. Caso você tenha ativado o kit, entre em contato com a nossa equipe para enviar o material para o laboratório.</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
        <ButtonRound
          style={styles.button}
          text="Ir para a loja"
          onPress={() => {
            navigate('Store');
        }}
        />
      </View>
    </Container>
  );
};

export default Success;
