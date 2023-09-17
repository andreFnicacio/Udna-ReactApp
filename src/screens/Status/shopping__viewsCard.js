import propTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';

import Container from '../../layouts/Container';
import ButtonRound from '../../components/ButtonRound';

import ShoppingItem from './components/ShoppingItem';
import styles from './styles';
import styles_card from './styles_card';
import ShoppingInfo from '../ShoppingInfo';
import { useNavigation } from 'react-navigation-hooks';

const ShoppingViews = ({onPress, style}) => (
    <View style={[styles_card.container, style]}>
      <ButtonRound color="white" text="Acessar" onPress={onPress} style={styles_card.button} />
      <View style={styles_card.topView}>
        <Text style={styles_card.title}>Meus Pedidos</Text>
        <Text style={styles_card.description}>Acesse as suas compras na Loja.</Text>
      </View>
    </View>
);



//=============CARD=================



ShoppingViews.propTypes = {
  onPress: propTypes.func.isRequired,
  style: propTypes.shape(),
};

ShoppingViews.defaultProps = {
  style: null,
};



export default ShoppingViews;
