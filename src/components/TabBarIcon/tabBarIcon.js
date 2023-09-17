import propTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import SvgUri from 'react-native-svg';

// import colors from '../../styles/colors';

import styles from './styles';

const TabBarIcon = ({ name }) => (
  <Image source={name} style={styles.image} />
);

TabBarIcon.propTypes = {
  name: propTypes.number,
};

TabBarIcon.defaultProps = {
  name: null,
};

export default TabBarIcon;

/**
  <Icon size={30} color={focused ? colors.primary : colors.black} name={name} />
  <Image source={name} style={focused ? styles.image : styles.imageFocused} />
*/
