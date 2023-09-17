import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
    
  },
  text: {
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font14,
  },
});
