import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.purple,
    elevation: 2,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    shadowColor: colors.purple,
    shadowOffset: { height: 5, width: 0 },
    shadowOpacity: 0.5,
    width: '100%',
    zIndex: 100,
  },
  leftView: {
    alignItems: 'flex-start',
    paddingLeft: 10,
    width: '30%',
    color:'#fff'
  },
  middleView: {
    alignItems: 'center',
    width: '30%',
  },
  voltar: {
    color:'#fff',
  },
  rightView: {
    alignItems: 'flex-end',
    paddingRight: 10,
    width: '30%',
  },
  rightLeftView: {
    alignItems: 'flex-end',
    paddingRight: 10,
    width: '30%',
  },
  title: {
    color: colors.white,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font22,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    textAlign: 'justify',
    height: 50,
    width: 234,
    marginTop: 13,
  },
  goBack: {
    backgroundColor:colors.gray4,
    width:30,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20
  },
  back:{
    
  },
});
