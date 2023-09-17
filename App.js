import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import { YellowBox } from 'react-native';
import { IS_STORYBOOK } from 'react-native-dotenv';
import { ErrorBoundary } from './src/modules/global/screens/ErrorBoundary';
import AppNavigator from './src/navigation/AppNavigator';
import { KeyboardProvider } from './src/providers/KeyboardProvider';
import { ModalProvider } from './src/providers/ModalProvider';
import { UserProvider } from './src/providers/UserProvider';
import { ScrollProvider } from './src/providers/ScrollProvider';
import { UrsulaSectionProvider } from './src/modules/ursula/hooks/useUrsulaSections';

import { udnaAPI } from './src/services/udnaAPIService';

YellowBox.ignoreWarnings([
	'Warning: componentWillReceiveProps',
	'RCTUIManager',
	'No stops in gradient',
	'Warning: componentWillUpdate has been renamed',
]);

const IS_STORYBOOK_ONLINE = IS_STORYBOOK === 'true';

let ChooseApp = AppNavigator;
if (__DEV__ && IS_STORYBOOK_ONLINE) {
	import('./storybook').then(module => {
		ChooseApp = module.default;
	});
}

const App = () => (
	<ErrorBoundary>
		<ApolloProvider client={udnaAPI}>
			<KeyboardProvider>
				<UserProvider>
					<ScrollProvider>
						<ModalProvider>
							<UrsulaSectionProvider>
								<ChooseApp />
							</UrsulaSectionProvider>
						</ModalProvider>
					</ScrollProvider>
				</UserProvider>
			</KeyboardProvider>
		</ApolloProvider>
	</ErrorBoundary>
);

export default App;
