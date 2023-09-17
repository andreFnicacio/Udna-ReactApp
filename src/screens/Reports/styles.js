import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginTop: 20,
    width: '100%',
  },
  switchSelector: {
    marginTop: 20,
    width: '100%',
  },
  text: {
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font16,
    marginTop: 340,
  },
  textSwitch: {
    color: colors.white,
    fontSize: fonts.size.font12,
  },
});
