import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import Container from '../../layouts/Container';
import { masks } from '../../services/maskService';

import styles from './styles';

const ShoppingInfo = () => {
  const { goBack, getParam } = useNavigation();
  const item = getParam('ShoppingItem');

  return (
    <Container headerTitle="Informações" onPressBack={() => goBack()}>
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.key}>ID da compra:</Text>
          <Text style={styles.value}>{item.id}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.key}>Nome:</Text>
          <Text style={styles.value}>{item.name}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.key}>Valor:</Text>
          <Text style={styles.value}>{`R$ ${item.price}`}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.key}>Método de pagamento:</Text>
          <Text style={styles.value}>{item.payment}</Text>
        </View>
        {item.installments && (
        <View style={styles.info}>
          <Text style={styles.key}>Número de parcelas</Text>
          <Text style={styles.value}>{item.installments}</Text>
        </View>
        )}
        <View style={styles.info}>
          <Text style={styles.key}>Data do pedido:</Text>
          <Text style={styles.value}>{masks.date(item.date)}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.key}>Status:</Text>
          <Text style={styles.value}>{item.status.text}</Text>
        </View>
      </View>
    </Container>
  );
};

export default ShoppingInfo;
