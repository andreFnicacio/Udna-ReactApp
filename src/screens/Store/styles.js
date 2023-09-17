import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  categoryView: {
    marginBottom: 15,
  },
  choiceButtons: {
    marginTop: 10,
  },
  container: {
    marginTop: -7,
    width: '100%',
    alignItems:'center',
    height: '100%',
  },
  textEmpty: {
    alignSelf: 'center',
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font16,
    marginTop: 20,
  },
  title: {
    color: colors.black,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font16,
  },
  header:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center', 
    marginTop:10,
    marginBottom:-10,
    width: '90%',
    marginLeft:-30,
  },
  positionImage:{
    marginRight:5,
  },
  userImage: {
    width: 60, 
    height: 60, 
    borderRadius:15,
    resizeMode:'contain',
  },
  positionNameUser:{
    width:'75%',
    marginLeft:17, 
    marginRight:-61,
    alignItems:'center',
    justifyContent:'center'
  },
  nameUser:{
    fontSize:fonts.size.font16,
    fontFamily:fonts.family.regular,
    color:colors.gray1,
    marginRight:10,
    marginLeft:20,
    
  },
  positionAction:{
    marginLeft:-35, 
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  borderActions:{
    backgroundColor:'#E5E5E5',
    width:40,
    height:40,
    marginRight:10,
    borderRadius:25,
  },
  actions:{
    width: 30, 
    height: 30, 
    
    margin:5,
    resizeMode:'contain',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  row:{
    marginTop:30,

  },viewScrollContainer: {
    height: 130, 
    marginTop: 20
  },
  touchableViewScroll:{
    marginRight: 10, 
    marginTop:10
  },
  ViewScroll:{
    width: 110,
    height: 90,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderColor: colors.gray4,        
    borderTopWidth: 0,
    shadowColor: colors.gray4,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 0.1,
    elevation: 14,
  },
  imageViewScroll: {
    height: 30,
    width: 30,
    resizeMode: "contain",
    marginLeft: 10,
    marginTop: 10,
  },
  ursula:{
    height:'auto', 
    width:'auto', 
    borderRadius:20,
    marginTop:-20,
    marginBottom: 29,
    alignItems:"center",
    justifyContent:'center',
  },
    marcketing:{
    height:'auto', 
    width:'auto', 
    borderRadius:20,
    marginTop:-30,
    alignItems:"center",
    justifyContent:'center',
  },

  viewMinhasAvaliacoes:{
    height:50, 
    width:350, 
    backgroundColor:colors.white, 
    marginTop:10, 
    marginBottom:10,
    alignItems:'flex-start', 
    justifyContent:'center', 
    borderTopWidth: 0,
    borderRadius:10, 
    borderColor:colors.gray1, 
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity:0.1,
    elevation: 4,
  },
  viewMeusPedidos:{
    height:50, 
    width:350, 
    backgroundColor:colors.white, 
    marginTop:10, 
    marginBottom:8,
    alignItems:'flex-start', 
    justifyContent:'center', 
    borderTopWidth: 0,
    borderRadius:10, 
    borderColor:colors.gray1, 
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity:0.1,
    elevation: 4,
  },
  meusPedidos:{ 
    flex:1,
    flexDirection:'row', 
    justifyContent:'space-between',
    alignItems: 'center',
  },
  recommendedForYour:{
    marginLeft:-160,
    marginBottom:-5, 
    marginTop:10, 
    fontSize:fonts.size.font18, 
    fontFamily:fonts.family.semiBold, 
    color:colors.purple
    },
    viwRecommendedForYour:{ 
      marginTop: 20, 
      marginLeft:-60,
      alignItems: 'center',
      flexDirection:'row'
    },
});
