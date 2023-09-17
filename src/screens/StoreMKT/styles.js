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
  container:{
    height: '100%',
  },
  positionTitleProducts:{
    marginTop: 70,
  },
  titleProducts:{
    fontSize: fonts.size.font24,
    color: colors.purple2,
    fontFamily: fonts.family.semiBold,
  },
  descriptionsProduct:{
    marginTop: 10,
    fontSize: fonts.size.font18,
    color: colors.gray6,
    fontFamily: fonts.family.regular,

  },
  titleDescriptionsProduct:{
    
    fontSize: fonts.size.font20,
    color: colors.purple1,
    fontFamily: fonts.family.semiBold,
  },
  nossosProdutos:{
    marginTop:15,
    fontSize: fonts.size.font20,
    color: colors.purple1,
    fontFamily: fonts.family.semiBold,
  },
  flat: {
    marginTop:15,
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
    height:'auto',
    borderRadius:20,
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
    color: colors.purple1,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font18,
    marginLeft: 6,
    marginTop: 5,
    marginBottom: 8,
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
    marginLeft: 30,
    marginTop: 5,
  },  
  subtitle: {
    color: colors.gray6,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font14,
    marginBottom: 10,
    marginLeft: 5,
    width: '100%',
  },
  itemView: {
    marginLeft: 10,
    marginTop: 5,
    width: '70%',
  },
  loading: {
    position: 'absolute',
    width: 80,
  },

});
