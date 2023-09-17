import propTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const List = ({ data, onPress }) => (
  <>
    {data.map((elt) => (
      <View key={elt.id} style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={() => onPress(elt)}>
          <Text style={styles.text}>{elt.displayName}</Text>
        </TouchableOpacity>
      </View>
    ))}
  </>
);

List.propTypes = {
  data: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    displayName: propTypes.string.isRequired,
  }).isRequired).isRequired,
  onPress: propTypes.func.isRequired,
};

export default List;
