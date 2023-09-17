import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font16,
  },
  textBlack: {
    color: colors.black,
  },
  textDisabled: {
    color: colors.gray3,
  },
  textPrimary: {
    color: colors.primary,
  },
  textRed: {
    color: colors.red1,
  },
  textWhite: {
    color: colors.white,
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
