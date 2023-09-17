import propTypes from 'prop-types';
import React, { useMemo } from 'react';
import { Text } from 'react-native';

import styles from './styles';

const TabBarLabel = ({ focused, label }) => {
  const getColor = useMemo(() => {
    if (focused) {
      return styles.textPrimary;
    }
    return styles.textBlack;
  }, [focused]);

  return <Text style={[styles.text, getColor]}>{label}</Text>;
};

TabBarLabel.propTypes = {
  focused: propTypes.bool.isRequired,
  label: propTypes.string,
};

TabBarLabel.defaultProps = {
  label: '',
};

export default TabBarLabel;
