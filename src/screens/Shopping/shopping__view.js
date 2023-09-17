import propTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';

import Container from '../../layouts/Container/container';

import ShoppingItem from './components/ShoppingItem';
import styles from './styles';


//==============CARD=================
const ShoppingView = ({loading, data, onPressBack, onPress, style}) => {
    return(
      <Container
      loading={loading}
      headerTitle="Pedidos"
      onPressBack={onPressBack}
    >
      <View style={styles.container}>
        {data.length !== 0 ? data.map((elt) => (
          <ShoppingItem
            key={elt.id}
            name={elt.name}
            status={elt.status}
            onPress={() => onPress(elt)}
          />
        )) : <Text style={styles.text}>Você não possui pedidos no momento.</Text>}
      </View>
    </Container>
    )
};

ShoppingView.propTypes = {
  loading: propTypes.bool,
  data: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    status: propTypes.shape({
      text: propTypes.string.isRequired,
      color: propTypes.string.isRequired,
    }).isRequired,
  }).isRequired).isRequired,
  onPressBack: propTypes.func.isRequired,
  onPress: propTypes.func.isRequired,
};

ShoppingView.defaultProps = {
  loading: false,
};


export default ShoppingView;
