import { StyleSheet } from 'react-native';

import colors from '../../../../styles/colors';

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 80,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.bg,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  scrollView: {
    backgroundColor: colors.white,
    borderRadius: 40,
  },
  scrollViewContent: {
    backgroundColor: colors.white,
    paddingVertical: 10,
  },
  switchView: {
    elevation: 5,
    flex: 1,
    shadowColor: colors.gray1,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    width: '100%',
  },
});
