import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.bg,
    flex: 1,
    justifyContent: 'center',
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
    backgroundColor: colors.bg,
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  //==background da View do App==//
  subContainerView: {
    backgroundColor: colors.bg,
    width: '100%',
    
  },
});


/*import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: colors.bg,
		flex: 1,
		justifyContent: 'center',
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
		backgroundColor: colors.bg,
		justifyContent: 'center',
		paddingHorizontal: 30,
		paddingBottom: 100,
	},
	//==background da View do App==//
	subContainerView: {
		backgroundColor: colors.bg,
		flex: 1,
		
	},
});
*/