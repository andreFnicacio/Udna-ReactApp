import { StyleSheet } from 'react-native';

import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    elevation: 2,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    shadowColor: '#fff',
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
    width: '100%',
    marginLeft:-50,
    marginTop:20,
  },
  voltar: {
    marginLeft:10,
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
    color: colors.purple,
    fontFamily: "MontSerrat-SemiBold",
    fontSize: fonts.size.font16,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: 50,
    width: 234,
    
  },
});
