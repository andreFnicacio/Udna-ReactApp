import { StyleSheet } from 'react-native';

import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowColor: colors.gray3,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: '100%',
  },
  name: {
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font14,
    width: '50%',
  },
  status: {
    color: colors.white,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font14,
  },
  statusView: {
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    padding: 2,
    width: '50%',
  },
});
