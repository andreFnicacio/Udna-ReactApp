import { StyleSheet } from 'react-native';

import colors from './colors';

export default StyleSheet.create({
  shadow1: {
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
  },
  shadow2: {
    elevation: 4,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 3.41,
  },
});
