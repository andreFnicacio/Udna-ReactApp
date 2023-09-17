import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Billet = () => (
  <View style={styles.container}>
    <Text style={styles.text}>A compra no boleto leva até 3 dias para ser confirmada.</Text>
  </View>
);

export default Billet;
