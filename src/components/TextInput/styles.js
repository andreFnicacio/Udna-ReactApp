import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 20,
    elevation: 2,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: colors.gray3,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: '100%',
  },
  inputContainer: {
    height: 30,
    justifyContent: 'center',
    marginTop: 10,
    paddingTop: 0,
    width: '100%',
  },
  label: {
    color: colors.gray2,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font14,
  },
});
