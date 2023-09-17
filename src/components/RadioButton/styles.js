import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  label: {
    color: colors.primary,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font16,
  },
  radioButton: {
    marginBottom: 10,
  },
});
