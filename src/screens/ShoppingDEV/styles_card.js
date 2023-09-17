import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  button: {
    marginBottom: 20,
    marginTop: 30,
  },
  container: {
    alignItems: 'flex-end',
    backgroundColor: colors.primary,
    borderRadius: 5,
    elevation: 2,
    justifyContent: 'space-between',
    margin: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
    shadowColor: colors.gray3,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: '50%',
    minHeight: 230,
  },
  description: {
    color: colors.gray4,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font14,
    marginBottom: 20,
    marginTop: 10,
    textAlign: 'right',
    width: '98%',
  },
  image: {
    height: 100,
    marginTop: 20,
    width: 100,
  },
  title: {
    color: colors.gray4,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font20,
    textAlign: 'right',
  },
  topView: {
    marginTop: 20,
    width: '100%',
  },
});
