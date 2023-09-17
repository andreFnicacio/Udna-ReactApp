import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  button: {
    marginTop: 10,
  },
  buttonView: {
    alignItems: 'center',
    marginTop: 40,
    width: '80%',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  description: {
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font16,
    marginTop: 10,
    textAlign: 'center',
  },
  title: {
    color: colors.black,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font18,
  },  
  discount:{
    marginLeft: 50000,
  },
});
