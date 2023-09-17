import propTypes from "prop-types";
import React, { useMemo } from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

import colors from "../../styles/colors";

import styles from "./styles";

const ButtonRound = ({
  color,
  text,
  onPress,
  disabled,
  style,
  textButtonStyle,
  loading,
}) => {
  const getBackgroundStyle = useMemo(() => {
    if (disabled) {
      return styles.backgroundDisabled;
    }
    switch (color) {
      case "primary":
        return styles.backgroundPrimary;
      default:
        return styles.backgroundWhite;
    }
  }, [color, disabled]);

  const getButtonTextColor = useMemo(() => {
    if (disabled) {
      return styles.textWhite;
    }
    switch (color) {
      case "primary":
        return styles.textWhite;
      default:
        return styles.textPrimary;
    }
  }, [color, disabled]);

  const getShadowStyle = useMemo(() => {
    if (disabled) {
      return {};
    }
    switch (color) {
      case "primary":
        return styles.shaddowPrimary;

      default:
        return styles.shaddowGray;
    }
  }, [color, disabled]);

  return (
    <>
      {!loading ? (
        <TouchableOpacity
          onPress={onPress}
          disabled={disabled}
          style={[styles.container, getBackgroundStyle, getShadowStyle, style]}
        >
          <Text style={[styles.text, getButtonTextColor, textButtonStyle]}>
            {text}
          </Text>
        </TouchableOpacity>
      ) : (
        <ActivityIndicator size={30} color={colors.primary} />
      )}
    </>
  );
};

ButtonRound.propTypes = {
  color: propTypes.oneOf(["primary", "white"]),
  text: propTypes.string.isRequired,
  onPress: propTypes.func.isRequired,
  disabled: propTypes.bool,
  mLeft: propTypes.bool,
  style: propTypes.shape(),
  textButtonStyle: propTypes.shape(),
  loading: propTypes.bool,
};

ButtonRound.defaultProps = {
  color: "primary",
  disabled: false,
  mLeft: false,
  style: null,
  textButtonStyle: null,
  loading: false,
};

export default ButtonRound;
