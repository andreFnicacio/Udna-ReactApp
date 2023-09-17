import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
  button: {
    marginBottom: 20,
    marginTop: 20,
    width: '100%',
  },
  container: {
    flex: 1,
    position: 'relative',
    width: Dimensions.get('window').width,
  },
  lottie: {
    width: 200,
  },
  lottieView: {
    alignItems: 'center',
    backgroundColor: colors.transparent,
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1000,
  },
});
