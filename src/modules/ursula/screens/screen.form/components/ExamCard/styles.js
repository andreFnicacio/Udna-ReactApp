import { StyleSheet } from 'react-native';

import colors from '../../../../../../styles/colors';
import fonts from '../../../../../../styles/fonts';

export default StyleSheet.create({
  button: {
    marginBottom: 20,
    marginTop: 40,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 5,
    elevation: 2,
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
    shadowColor: colors.gray3,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: '100%',
  },
  description: {
    color: colors.gray2,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font16,
    marginTop: 20,
    textAlign: 'center',
    width: '80%',
  },
  image: {
    height: 100,
    marginTop: 20,
    width: 100,
  },
  title: {
    color: colors.gray1,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font20,
  },
  topView: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
});
