import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  button: {
    marginBottom: 20,
    marginTop: 20,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  titleLabel:{
    marginRight:'70%',
    color:colors.purple,
    fontSize:fonts.size.font16,
  },
  item: {
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    marginTop: 40,
  },
  topView: {
    alignItems: 'center',
    width: '100%',
  },
});
