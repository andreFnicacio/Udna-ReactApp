import {StyleSheet, StatusBar} from 'react-native'
import Colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create ({
  safeAreaView:{
    width: '100%', 
    height: '100%', 
    display: 'flex', 
    flex: 1, 
    backgroundColor: '#f9f9f9', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    flexDirection:'column-reverse',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  containerProfiles: {
    flex: 1,
    marginTop:50,
  },
  
  item: {
    backgroundColor: '#f9f9f9',
    padding: 5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius:20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  iconAvatar:{
    alignItems:'center'
  },
  avatar: {
    marginTop: 20,
    width: 150, 
    height: 150, 
    borderRadius:75,
    resizeMode:'contain',
  },
  iconAvatar:{
    alignItems:'center'
  },
  icon: {
    width: 50, 
    height: 50, 
    borderRadius:75,
    resizeMode:'contain',
  },
  title: {
    fontSize: fonts.size.font16,
    textAlign:'center',
    color: Colors.purple,
  },
  verify: {
    fontSize: fonts.size.font10,
    textAlign:'center',
    color: Colors.purple,
    fontFamily:'MontSerrat-SemiBold',
  },
  positSubTitle: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  subTitle: {
    fontSize: fonts.size.font12,
    textAlign:'center',
    color: Colors.purple,
    margin:5,
  },
  button: {
    marginTop:30,
    padding:10,
    backgroundColor:Colors.purple,
    borderRadius:25,  
},
  buttonText: {
    fontSize:fonts.size.font12, 
    fontFamily:'MontSerrat-Regular',
    color:Colors.gray,
  
  },
  input: {
    marginTop:20,
    width: '90%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor:'#333',
  },
})

export default styles;