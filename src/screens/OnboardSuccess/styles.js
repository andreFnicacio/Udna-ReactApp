import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  button: {
   margin:1
  },
  buttonView: {
    
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  subButtonView: {
    alignItems: 'center',
    justifyContent:'center',
    flex:1,
    marginBottom: 10,
    backgroundColor: colors.blue1,
    borderRadius:20
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
  },
  description: {
    color: colors.purple,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font16,
    marginTop: 20,
    textAlign: 'center',
  },
  lottie: {
    marginTop:'30%',
    marginBottom:'5%',
    width: 50,
    height:50,
    resizeMode:'contain'
  },
  textView: {
    width: '90%',
  },
  title: {
    color: colors.primary,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font24,
    marginTop: 20,
    textAlign: 'center',
  },
  topView: {
    alignItems: 'center',
    width: '100%',
  },
});
