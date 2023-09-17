import propTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './styles';

const ShoppingItemView = ({ name, status, onPress }) => {
  const getStatusStyle = () => ({ backgroundColor: status.color || 'white' });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.name}>{name}</Text>
      <View style={[styles.statusView, getStatusStyle(status)]}>
        <Text style={styles.status}>{status.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

ShoppingItemView.propTypes = {
  name: propTypes.string,
  status: propTypes.shape({
    text: propTypes.string,
    color: propTypes.string,
  }),
  onPress: propTypes.func.isRequired,
};

ShoppingItemView.defaultProps = {
  name: '',
  status: {
    text: '',
    color: '',
  },
};

export default ShoppingItemView;
