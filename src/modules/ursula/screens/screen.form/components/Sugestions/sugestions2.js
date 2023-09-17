/* eslint-disable react-native/no-inline-styles */
import LottieView from 'lottie-react-native';
import propTypes from 'prop-types';
import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';

const Sugestions2 = () => {
  
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
      </ScrollView>
    </View>
  );
};

Sugestions2.propTypes = {
  sugestions: propTypes.arrayOf(propTypes.shape({
    title: propTypes.string,
    icon: propTypes.number,
    onPress: propTypes.func,
  })),
};

Sugestions2.defaultProps = {
  
};

export default Sugestions2;
