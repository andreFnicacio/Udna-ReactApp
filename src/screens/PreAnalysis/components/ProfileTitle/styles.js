import { StyleSheet } from 'react-native';

import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.pinkChock,
    borderRadius: 6,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: colors.gray3,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: '100%',
  },
  title: {
    color: colors.white,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font20,
  },
});
