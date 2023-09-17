import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  condition: {
    color: colors.primary,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font14,
  },
  conditionTitle: {
    color: colors.primary,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font14,
  },
  conditionsView: {
    alignItems: 'flex-start',
    marginTop: 20,
  },
});
