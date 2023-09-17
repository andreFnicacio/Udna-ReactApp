import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  backgroundDisabled: {
    backgroundColor: colors.gray3,
  },
  backgroundPrimary: {
    backgroundColor: colors.primary,
  },
  backgroundWhite: {
    backgroundColor: colors.white,
  },
  container: {
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    padding: 10,
    width: '90%',
  },
  shaddowGray: {
    elevation: 2,
    shadowColor: colors.gray3,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  shaddowPrimary: {
    elevation: 2,
    shadowColor: colors.primary,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  text: {
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font14,
  },
  textPrimary: {
    color: colors.primary,
  },
  textWhite: {
    color: colors.white,
  },
});
