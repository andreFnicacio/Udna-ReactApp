import propTypes from 'prop-types';
import React, { useMemo } from 'react';
import {
  View,
  StatusBar as StatusBarNative,
  Platform,
} from 'react-native';

import { isIphoneXService } from '../../services/dimensionsService';
import colors from '../../styles/colors';

const StatusBar2 = ({ purple }) => {
  const getHeight = useMemo(() => {
    if (Platform.OS === 'ios') {
      if (isIphoneXService()) {
        return 44;
      }
      return 25;
    }
    return StatusBarNative.currentHeight;
  }, [purple]);

  const getStyle = useMemo(() => {
    switch (purple) {
      case 'purple':
        return { backgroundColor: colors.purple, height: getHeight };
      default:
        return { backgroundColor: colors.purple, height: getHeight };
    }
  }, [purple]);

  const getBackgroundColor = useMemo(() => {
    switch (purple) {
      case 'purple':
        return colors.purple;
      default:
        return colors.purple;
    }
  }, [purple]);

  const getBarStyle = useMemo(() => {
    switch (purple) {
      case 'purple':
        return 'light-content';
      default:
        return 'dark-content';
    }
  }, [purple]);

  return (
    <View style={getStyle}>
      <StatusBarNative translucent barStyle={getBarStyle} backgroundColor={getBackgroundColor} />
    </View>
  );
};
StatusBar2.propTypes = {
  color: propTypes.oneOf(['purple']),
};
StatusBar2.defaultProps = {
  color: 'purple',
};
export default StatusBar2;
