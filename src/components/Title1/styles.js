import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  description: {
    fontFamily: fonts.family.regular,
  },
  text: {
    fontSize: fonts.size.font24,
  },
  textBlack: {
    color: colors.black,
  },
  textGray: {
    color: colors.gray1,
  },
  textPrimary: {
    color: colors.primary,
  },
  title: {
    fontFamily: fonts.family.semiBold,
  },
});
