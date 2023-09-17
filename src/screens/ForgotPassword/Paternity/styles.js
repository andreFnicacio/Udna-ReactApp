import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  button: {
    marginBottom: 20,
    marginTop: 40,
    width: '100%',
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
  },
  description: {
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font16,
    marginTop: 10,
  },
  infoView: {
    alignItems: 'flex-start',
    width: '100%',
  },
  price: {
    color: colors.green2,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font22,
    marginTop: 10,
  },
  priceDiscount: {
    color: colors.red2,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font22,
    marginTop: 10,
    textDecorationLine: 'line-through',
  },
  switchSelector: {
    marginTop: 20,
    width: '100%',
  },
  textSwitch: {
    color: colors.white,
    fontSize: fonts.size.font14,
  },
  title: {
    marginTop: 20,
  },
  topView: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
});
