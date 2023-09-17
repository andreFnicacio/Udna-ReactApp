import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  button: {
    marginBottom: 20,
    marginTop: 40,
    width: '100%',
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    borderRadius:20,
    marginBottom:10
  },
  description: {
    color: colors.black,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font16,
    width:300,
    marginTop: 50,
    textAlign:'left',
    justifyContent:'center',
    alignItems:'center',
  },
  infoView: {
    alignItems: 'center',
    width: '100%',
  },
  price: {
    color: colors.green2,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font22,
    marginTop: 30,
  },
  priceDiscount: {
    color: colors.red2,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font22,
    marginTop: 10,
    textDecorationLine: 'line-through',
  },
  switchSelector: {
    marginTop: 20,
    width: '100%',
  },
  textSwitch: {
    color: colors.white,
    fontSize: fonts.size.font14,
  },
  title: {
    marginTop: 20,
  },
  text: {
    marginTop: 20,
  },
  topView: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  buttonLK:{
    marginBottom:50,
    marginTop:50,
    marginLeft: 5,
    backgroundColor:'#5B3D8B',
    width:200,
    height:40,
    shadowColor: colors.gray3,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },

});
