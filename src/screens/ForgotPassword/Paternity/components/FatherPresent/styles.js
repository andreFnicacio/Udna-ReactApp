import { StyleSheet } from 'react-native';

import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    width: '90%',
  },
  text: {
    color: colors.black,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font16,
    textAlign: 'center',
  },
});
