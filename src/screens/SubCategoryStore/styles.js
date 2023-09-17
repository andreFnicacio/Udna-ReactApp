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
    marginTop: 10,
    width: '100%',
    height:'auto',
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
  positionCategory:{
    marginLeft:50,
    marginTop:10,
    marginBottom:3,
  },
  category: {
    fontFamily: fonts.family.regular,
    fontSize:fonts.size.font18,
    color: Colors.green3,
  },
  titleCategory:{
    color:'#5A3D8A',
    fontSize: fonts.size.font28,
    marginBottom:7,
  },
  categories: {
    
  },
  item: {   
    width: '80%',
    height: 40,
    margin:5,
    alignItems: 'flex-start',
    backgroundColor: Colors.white,
    borderRadius: 25,
    shadowColor: Colors.gray4,
    shadowOpacity: 0.1,
    
  },
  title: {
    fontSize: fonts.size.font18,
    textAlign:'center',
    marginTop:8,
    marginLeft:15,
    color: Colors.gray5,
  },
});
