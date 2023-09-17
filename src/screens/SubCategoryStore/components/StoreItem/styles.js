import { StyleSheet } from 'react-native';

import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: colors.gray3,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10,
    width: '100%',
  },
  disabled: {
    color: colors.gray3,
  },
  icon: {
    height: 40,
    width: 40,
  },
  itemView: {
    marginLeft: 5,
    width: '80%',
  },
  loading: {
    position: 'absolute',
    width: 80,
  },
  subtitle: {
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font12,
    width: '100%',
  },
  title: {
    color: colors.black,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font14,
    width: '100%',
  },
  touchable: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 15,
    width: '100%',
  },
});
