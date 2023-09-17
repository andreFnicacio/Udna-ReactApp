import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  header:{
    backgroundColor:'#5B3D8B',
    width:450,

  },
  Main:{
    width: 390,
    height: 600,
    alignItems:'center',
    backgroundColor:'#fff',
    borderRadius:30,
    marginTop:-55,
    marginLeft:-5,
    marginBottom:-30,
  },
  widthMain:{
    width: 300,
    alignItems:'center'

  },
  button: {
    backgroundColor: '#FF1B6A',
    width: '100%',
    color: '#fff',
  },
  
  container: {
    alignItems: 'center',
    backgroundColor: colors.purple,
    flex: 1,
    justifyContent: 'space-between',
    width: 380,
    height:'100%',
  },
  description: {
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font16,
    marginTop: 10,
  },
  infoView: {
    alignItems: 'flex-start',
    width: '100%',
  },
  price: {
    color: colors.green2,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font22,
    marginTop: 10,
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
    fontSize:fonts.size.font16,
    color:`#fff`,
    textAlign:'center',
    alignItems:'center',
  },
  subTitle: {
    marginTop: 15,
    fontSize:fonts.size.font14,
    color:`#fff`,
    textAlign:'center',
    alignItems:'center',
  },
  topView: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  valueTest:{
    marginLeft:-15,
    marginTop:50,
  },
  valueTestText:{
    fontSize:40,
    color:`#fff`,
    textAlign:'center'
  },
});
