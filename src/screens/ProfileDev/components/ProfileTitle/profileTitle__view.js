import propTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';

import Button from '../../../../components/Button';

import styles from './styles';

const ProfileTitleView = ({ text, onPress, style }) => (
  <View style={[styles.container, style]}>
    <Text style={styles.title}>{text}</Text>
    <Button color="green" text="Editar" onPress={onPress} />
  </View>
);

ProfileTitleView.propTypes = {
  text: propTypes.string.isRequired,
  onPress: propTypes.func.isRequired,
  style: propTypes.shape(),
};

ProfileTitleView.defaultProps = {
  style: null,
};

export default ProfileTitleView;
