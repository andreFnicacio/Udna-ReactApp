import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  animatedView: {
    alignItems: 'center',
    width: '100%',
  },
  biometryText: {
    color: colors.primary,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font16,
    marginLeft: 5,
  },
  buttonView: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    width: '100%',
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.bg,
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 40,
    width: '100%',
  },
  linkButton: {
    marginTop: 10,
  },
  linkTextButton: {
    fontSize: fonts.size.font14,
  },
  switchView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  textInput: {
    marginTop: 10,
  },
  title: {
    color: colors.gray1,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font16,
    marginTop: 10,
    textAlign: 'left',
    width: '100%',
  },
  topView: {
    alignItems: 'flex-start',
    width: '100%',
  },
});
