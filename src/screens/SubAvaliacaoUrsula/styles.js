import { StyleSheet } from 'react-native';

import Colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  categoryView: {
    marginBottom: 15,
  },
  choiceButtons: {
    marginTop: 10,
  },
  container: {
    flex:1,
    height:'auto',
    flexDirection:'column',
    alignItems:'center',
  },
  positionImagePurple:{
    marginTop: -110,
  },
  imageViewScroll:{
    width:400,
    height:400,
    resizeMode: "contain",
    marginLeft: -300,
  },
  
  category: {
    fontFamily: fonts.family.regular,
    fontSize:fonts.size.font18,
    color: Colors.gray6,
  },
  titleCategory:{
    marginTop:20,
    color:'#5A3D8A',
    fontSize: fonts.size.font28,
    marginBottom:7,
    
  },
  categories: {
    marginTop:50,
    left:-20
  },
  piker:{
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  },
  item: {   
    width: '100%',
    height: 40,
    margin:5,
    alignItems: 'flex-start',
    
    borderRadius: 25,
    shadowColor: Colors.gray4,
    shadowOpacity: 0.1,
    
  },
  title: {
    fontSize: fonts.size.font18,
    textAlign:'center',
    marginTop:8,
    marginLeft:15,
    color: Colors.green1,
  },
});
