import propTypes from "prop-types";
import React, { useMemo } from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

import colors from "../../styles/colors";

import styles from "./styles";

const Button = ({
  color,
  link,
  text,
  onPress,
  disabled,
  style,
  textButtonStyle,
  loading,
}) => {
  const getTextColor = useMemo(() => {
    if (disabled) {
      return styles.textDisabled;
    }

    switch (color) {
      case "white":
        return styles.textWhite;

      case "black":
        return styles.textBlack;

      case "red":
        return styles.textRed;

      default:
        return styles.textPrimary;
    }
  }, [color, disabled]);

  const getTextStyle = useMemo(() => {
    if (link) {
      return styles.underline;
    }
    return {};
  }, [link]);

  return (
    <>
      {!loading ? (
        <TouchableOpacity
          onPress={onPress}
          disabled={disabled}
          style={[styles.container, style]}
        >
          <Text
            style={[styles.text, getTextStyle, getTextColor, textButtonStyle]}
          >
            {text}
          </Text>
        </TouchableOpacity>
      ) : (
        <ActivityIndicator size={30} color={colors.primary} />
      )}
    </>
  );
};

Button.propTypes = {
  color: propTypes.oneOf(["primary", "white", "black", "red"]),
  link: propTypes.bool,
  text: propTypes.string.isRequired,
  onPress: propTypes.func.isRequired,
  disabled: propTypes.bool,
  style: propTypes.shape(),
  textButtonStyle: propTypes.shape(),
  loading: propTypes.bool,
};

Button.defaultProps = {
  color: "primary",
  link: false,
  disabled: false,
  style: null,
  textButtonStyle: null,
  loading: false,
};

export default Button;
