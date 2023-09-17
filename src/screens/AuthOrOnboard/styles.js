import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.bg,
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  topView: {
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  udna:{
    marginTop: '60%',
  },
  description: {
    color: colors.gray1,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font18,
    marginTop: '20%',
    textAlign: 'center',
    width: '80%',
    
  },
  buttonView: {
    alignItems: 'center',
    width: '100%',
    
  },
  borderButtonView:{
    backgroundColor:colors.blue1,
    borderRadius:20,
    marginTop:10,
    marginBottom:10,
  },
  button: {
    margin:1
  },
});
