import propTypes from 'prop-types';
import React, { useMemo } from 'react';
import { Text } from 'react-native';

import styles from './styles';

const Title = ({
  text, color, mode, style,
}) => {
  const getColor = useMemo(() => {
    switch (color) {
      case 'primary':
        return styles.textPrimary;
      case 'black':
        return styles.textBlack;

      default:
        return styles.textGray;
    }
  }, [color]);

  const getMode = useMemo(() => {
    switch (color) {
      case 'description':
        return styles.description;

      default:
        return styles.title;
    }
  }, [mode]);

  return (
    <Text style={[styles.text, getColor, getMode, style]}>{text}</Text>
  );
};

Title.propTypes = {
  text: propTypes.string.isRequired,
  color: propTypes.oneOf(['primary', 'black', 'gray']),
  mode: propTypes.oneOf(['title', 'description']),
  style: propTypes.shape(),
};

Title.defaultProps = {
  color: 'gray',
  mode: 'title',
  style: null,
};

export default Title;
