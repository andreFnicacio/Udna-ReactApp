import { StyleSheet } from 'react-native';

import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export default StyleSheet.create({
  button: {
    marginTop: 10,
  },
  buttonView: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
  text: {
    color: colors.gray1,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font20,
    marginBottom:10,
  },
  subText: {
    color: colors.gray1,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font16,
    textAlign:'center',
  },
  textInput: {
    fontSize: 20,
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
  },
  textInputView: {
    width: '80%',
  },
});
