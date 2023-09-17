import LottieView from 'lottie-react-native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from 'react-navigation-hooks';

import DNALoading from '../../assets/lottie/DNALoading.json';
import Container from '../../layouts/Container';

import styles from './styles';

const Consultation = () => {
  const [loading, setLoading] = useState(true);
  const nutritrionalProfileURL = 'https://calendly.com/udna';
  const { goBack } = useNavigation();

  return (
    <Container
      headerTitle="Consulta"
      onPressBack={() => goBack()}
    >
      {loading && (
        <View style={styles.lottieView}>
          <LottieView
            source={DNALoading}
            autoPlay
            loop
            style={styles.lottie}
          />
        </View>
      )}
      <WebView
        source={{ uri: nutritrionalProfileURL }}
        showsVerticalScrollIndicator={false}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        style={styles.container}
        keyboardDisplayRequiresUserAction={false}
      />
    </Container>
  );
};

export default Consultation;
