import { StyleSheet } from 'react-native';

import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    height:'100%',
    
    borderRadius:20
  },
  viewHeader:{
    alignItems: 'center',
    justifyContent: 'center',

  },
  viewScrollContainer:{
    height: 130,
    width:'auto',
    marginTop: 20,
  },
  touchableViewScroll:{
    height: 'auto',
    marginLeft: 20,
  },
  ViewScroll:{
    height: 90,
    width:110,
    backgroundColor:colors.white,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  imageViewScroll:{
    height: 10,
    width: 10,
  },
  switchView:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    width:300,
  },
  biometryText:{
    fontSize: fonts.size.font16,
    fontFamily: fonts.family.regular,
    color: colors.green3,
    marginLeft:8,
    marginTop:5,
    textAlign: 'left',
  },
});
