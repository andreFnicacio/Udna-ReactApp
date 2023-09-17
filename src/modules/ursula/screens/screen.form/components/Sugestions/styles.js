import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../../../../../styles/colors';
import fonts from '../../../../../../styles/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    width: 333,
  },
  icon: {
    height: 50,
    width: 50,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 45,
    height: 90,
    justifyContent: 'center',
    width: 90,
  },
  itemTitle: {
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font16,
    marginTop: 5,
    textAlign: 'center',
  },
  loading: {
    position: 'absolute',
    width: 80,
  },
  scrollView: {
    paddingVertical: 30,
    
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    
  },
  title: {
    color: colors.black,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font20,
    marginLeft: 20,
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 100,
  },
});
