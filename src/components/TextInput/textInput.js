import propTypes from 'prop-types';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {
  TextField,
} from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../styles/colors';

import styles from './styles';


const TextInput = ({
  label,
  defaultValue,
  onChangeText,
  formatText,
  onBlur,
  error,
  placeholder,
  keyboardType,
  maxLength,
  textColor,
  tintColor,
  baseColor,
  fontSize,
  lineWidth,
  activeLineWidth,
  disabledLineWidth,
  autoCapitalize,
  autoFocus,
  secureTextEntry,
  editable,
  style,
}) => {
  const [isFieldHidden, setIsFieldHidden] = useState(secureTextEntry);

  const onPressIcon = () => {
    setIsFieldHidden(!isFieldHidden);
  };

  const getRenderRightAccessory = () => {
    if (secureTextEntry) {
      return (
        <Icon
          size={25}
          color={isFieldHidden ? colors.gray3 : colors.black}
          name={isFieldHidden ? 'visibility-off' : 'visibility'}
          onPress={onPressIcon}
        />
      );
    }
    return null;
  };

  const getColor = (color) => {
    switch (color) {
      case 'primary':
        return colors.primary;

      default:
        return colors.black;
    }
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextField
        inputContainerStyle={styles.inputContainer}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        formatText={formatText}
        onBlur={onBlur}
        error={error}
        errorColor={colors.red}
        placeholder={placeholder}
        placeholderTextColor={colors.gray3}
        keyboardType={keyboardType}
        maxLength={maxLength}
        textColor={getColor(textColor)}
        tintColor={getColor(tintColor)}
        baseColor={getColor(baseColor)}
        fontSize={fontSize}
        lineWidth={lineWidth}
        activeLineWidth={activeLineWidth}
        disabledLineWidth={disabledLineWidth}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        autoFocus={autoFocus}
        secureTextEntry={isFieldHidden}
        renderRightAccessory={getRenderRightAccessory}
        editable={editable}
      />
    </View>
  );
};

TextInput.propTypes = {
  label: propTypes.string.isRequired,
  defaultValue: propTypes.string,
  onChangeText: propTypes.func.isRequired,
  formatText: propTypes.func,
  onBlur: propTypes.func,
  error: propTypes.string,
  placeholder: propTypes.string,
  keyboardType: propTypes.string,
  maxLength: propTypes.number,
  textColor: propTypes.oneOf(['primary', 'black']),
  tintColor: propTypes.oneOf(['primary', 'black']),
  baseColor: propTypes.oneOf(['primary', 'black']),
  fontSize: propTypes.number,
  lineWidth: propTypes.number,
  activeLineWidth: propTypes.number,
  disabledLineWidth: propTypes.number,
  autoCapitalize: propTypes.string,
  autoFocus: propTypes.bool,
  secureTextEntry: propTypes.bool,
  editable: propTypes.bool,
  style: propTypes.shape(),
};

TextInput.defaultProps = {
  defaultValue: '',
  formatText: null,
  onBlur: null,
  error: '',
  placeholder: '',
  keyboardType: 'default',
  maxLength: 200,
  textColor: 'black',
  tintColor: 'primary',
  baseColor: 'black',
  fontSize: 16,
  lineWidth: 0,
  activeLineWidth: 0,
  disabledLineWidth: 0,
  autoCapitalize: 'none',
  autoFocus: true,
  secureTextEntry: false,
  editable: true,
  style: null,
};

export default TextInput;
