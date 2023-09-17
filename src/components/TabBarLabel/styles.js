import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font14,
    marginBottom: 10,
  },
  textBlack: {
    color: colors.black,
  },
  textPrimary: {
    color: colors.primary,
  },
});
