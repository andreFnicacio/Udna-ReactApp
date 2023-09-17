import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    borderBottomColor: colors.gray3,
    borderBottomWidth: 1,
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font18,
  },
  touchable: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    width: '100%',
  },
});
