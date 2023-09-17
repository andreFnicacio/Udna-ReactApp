import propTypes from 'prop-types';
import React, { useMemo } from 'react';
import {
  View,
  StatusBar as StatusBarNative,
  Platform,
} from 'react-native';

import { isIphoneXService } from '../../services/dimensionsService';
import colors from '../../styles/colors';

const StatusBar = ({ color }) => {
  const getHeight = useMemo(() => {
    if (Platform.OS === 'ios') {
      if (isIphoneXService()) {
        return 44;
      }
      return 25;
    }
    return StatusBarNative.currentHeight;
  }, [color]);

  const getStyle = useMemo(() => {
    switch (color) {
      case 'primary':
        return { backgroundColor: colors.primary, height: getHeight };
      default:
        return { backgroundColor: colors.bg, height: getHeight };
    }
  }, [color]);

  const getBackgroundColor = useMemo(() => {
    switch (color) {
      case 'primary':
        return colors.primary;
      default:
        return colors.bg;
    }
  }, [color]);

  const getBarStyle = useMemo(() => {
    switch (color) {
      case 'primary':
        return 'light-content';
      default:
        return 'dark-content';
    }
  }, [color]);

  return (
    <View style={getStyle}>
      <StatusBarNative translucent barStyle={getBarStyle} backgroundColor={getBackgroundColor} />
    </View>
  );
};
StatusBar.propTypes = {
  color: propTypes.oneOf(['bg', 'primary']),
};
StatusBar.defaultProps = {
  color: 'bg',
};
export default StatusBar;
