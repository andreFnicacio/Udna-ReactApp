import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
  button: {
    marginBottom: 20,
    marginTop: 20,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.bg,
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  textInput: {
    marginTop: 10,
  },
  topView: {
    alignItems: 'center',
    width: '100%',
  },
});
