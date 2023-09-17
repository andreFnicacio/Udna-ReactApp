import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  text: {
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font14,
  },
});
