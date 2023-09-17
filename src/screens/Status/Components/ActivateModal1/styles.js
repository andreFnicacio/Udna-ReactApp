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
    width: '90%',
  },
  text: {
    color: colors.gray1,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font20,
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
  container2: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    height:220,
    backgroundColor:'#fff',
    borderRadius:20
  },

  info: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
    marginLeft:20,
    marginTop:10, 
  },
  key: {
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font14,
    width: '40%',
  },
  value: {
    color: colors.primary,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font16,
    textAlign: 'right',
    width: '50%',
    marginRight:20
  },
});
