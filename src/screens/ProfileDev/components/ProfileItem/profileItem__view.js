import propTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const ProfileItemView = ({ keyItem, valueItem, style }) => (
  <View style={[styles.container, style]}>
    {!!keyItem && <Text style={styles.textKey}>{keyItem}</Text>}
    {!!valueItem && <Text style={styles.textValue}>{valueItem}</Text>}
  </View>
);

ProfileItemView.propTypes = {
  keyItem: propTypes.string,
  valueItem: propTypes.string,
  style: propTypes.shape(),
};

ProfileItemView.defaultProps = {
  keyItem: '',
  valueItem: '',
  style: null,
};

export default ProfileItemView;
