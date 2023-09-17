import { StyleSheet } from 'react-native';

import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginLeft:-40
  },
  textKey: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font16,
    width: '30%',
    marginLeft:-60,
  },
  textValue: {
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font16,
    width: '50%',
    marginTop:10,
    marginLeft:-20
  },
  ola: {
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font16,
    
    marginTop:10,
  }
});
