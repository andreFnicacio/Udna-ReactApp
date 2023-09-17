import { StyleSheet } from 'react-native';

import colors from '../../../../../../styles/colors';
import fonts from '../../../../../../styles/fonts';

export default StyleSheet.create({
  button: {
    marginBottom: 20,
    marginTop: 50,
    marginLeft: 19,
    backgroundColor:'#FF1B6A'
  },
  container: {
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    borderRadius: 5,
    elevation: 2,
    justifyContent: 'space-between',
    marginTop: 15,
    paddingHorizontal: 20,
    shadowColor: colors.gray3,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: 360,
    height:525,
  },
  description: {
    color: '#fff',
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font28,
    marginBottom: 20,
    marginTop: -2,
    marginLeft: 5,
    textAlign: 'left',
    width: '98%',
    borderRadius:20,
    backgroundColor:'#5b3d8b',
  },
  description2: {
    color: colors.primary,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font24,
    marginBottom: 20,
    marginTop: -180,
    marginLeft: 100,
    textAlign: 'left',
    width: '98%',
  },
  image: {
    height: 100,
    marginTop: 20,
    width: 100,
  },
  title: {
    color: colors.primary,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font20,
    textAlign: 'center',
  },
  topView: {
    marginTop: 20,
    width: '100%',
  },
});
