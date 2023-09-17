import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  categoryView: {
    marginBottom: 10,
  },
  choiceButtons: {
    marginTop: 10,
  },
  row: {
    alignItems: 'center',
    borderBottomColor: colors.gray3,
    borderBottomWidth: 1,
    borderRadius:10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop:-5,
    width: '100%',
    backgroundColor:'#fff',
  },
  textEmpty: {
    alignSelf: 'center',
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font16,
    marginTop: 10,
  },
  title: {
    color: colors.black,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font16,
    marginLeft: 6,
  },
  Image:{
    width:39, 
    height:30,
  },
  touchable: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 15,
    width: '100%',
  },
  icon: {
    height: 40,
    width: 40,
    marginBottom:10,
    marginLeft: 10,
    marginTop: 5,
  },  
  subtitle: {
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font12,
    marginBottom: 9,
    marginLeft: 5,
    width: '100%',
  },
  itemView: {
    marginLeft: 10,
    marginTop: 5,
    width: '80%',
  },
  loading: {
    position: 'absolute',
    width: 80,
  },

});
