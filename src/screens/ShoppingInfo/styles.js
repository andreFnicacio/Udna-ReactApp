import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  button: {
    marginTop: 40,
  },
  container: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  info: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },
  key: {
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font14,
    width: '50%',
  },
  value: {
    color: colors.primary,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font16,
    textAlign: 'right',
    width: '50%',
  },
});
