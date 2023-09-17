import LottieView from 'lottie-react-native';
import propTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import PDFView from 'react-native-view-pdf';

import DNALoading from '../../assets/lottie/DNALoading.json';
import Container from '../../layouts/Container';

import styles from './styles';

const KnowMore = ({
  loading,
  source,
  onPressBack,
  onLoad,
  onError,
}) => (
  <Container
    headerTitle="Saiba Mais"
    onPressBack={onPressBack}
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
    <PDFView
      fadeInDuration={250.0}
      style={styles.container}
      resource={source}
      resourceType="url"
      onLoad={onLoad}
      onError={onError}
    />

  </Container>
);

KnowMore.propTypes = {
  loading: propTypes.bool.isRequired,
  source: propTypes.string.isRequired,
  onPressBack: propTypes.func.isRequired,
  onLoad: propTypes.func.isRequired,
  onError: propTypes.func.isRequired,
};

export default KnowMore;
