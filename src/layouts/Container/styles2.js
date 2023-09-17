import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.purple,
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
  },
  lottie: {
    width: 200,
  },
  lottieView: {
    flex: 1,
    justifyContent: 'center',
  },
  //==background do corpo do App==//
  subContainerContent: {
    alignItems: 'center',
    backgroundColor: colors.purple,
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
  },
  //==background da View do App==//
  subContainerView: {
    backgroundColor: colors.purple,
    width: '100%',
  },
});
