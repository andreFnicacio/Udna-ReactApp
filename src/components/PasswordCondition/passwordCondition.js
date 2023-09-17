import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const PasswordCondition = () => (
  <View style={styles.conditionsView}>
    <Text style={styles.conditionTitle}>Sua senha deve conter:</Text>
    <Text style={styles.condition}>• Um caractere especial</Text>
    <Text style={styles.condition}>{'- Caracteres permitidos: ^ $ * . [ ] { } ( ) ? " ! @ # % & / \\ , > < \' : ; | _ ~ `) + - ='}</Text>
    <Text style={styles.condition}>• Um letra maiúscula</Text>
    <Text style={styles.condition}>• Um letra minúscula</Text>
    <Text style={styles.condition}>• Um número</Text>
  </View>
);

export default PasswordCondition;
