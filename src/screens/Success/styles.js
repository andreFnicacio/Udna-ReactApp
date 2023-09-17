import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  button: {
    marginBottom: 20,
    marginTop: 20,
    width: '100%',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    width: '90%',
    backgroundColor:colors.white
  },
  lottie: {
    width: 200,
  },
  subtitle: {
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font18,
    marginTop: 10,
    textAlign: 'center',
  },
  title: {
    color: colors.primary,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font24,
    marginTop: 20,
  },
  topView: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
});
