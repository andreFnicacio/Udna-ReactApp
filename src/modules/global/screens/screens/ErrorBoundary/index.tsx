import { Container, Subtitle, Title, Button,ButtonText} from './styled';

import RNRestart from 'react-native-restart';
import React from 'react';
import { StatusBar } from 'react-native';
import colors from "../../../../styles/colors"

export class ErrorBoundary extends React.Component<any, any> {
	state = {
		error: false,
	};

	static getDerivedStateFromError(): { error: boolean } {
		return { error: true };
	}

	componentDidCatch(error: Error): void {
		const message = error?.message || 'global-error-boundary';
		console.error(message);
		console.tron.log("Olá")
	}

	restart = async (): Promise<void> => {
		RNRestart.Restart();
	};

	render() {
		if (this.state.error) {
			return (
				<Container>
					<StatusBar
						backgroundColor={colors.white}
						barStyle={'dark-content'}
					/>
					<Title>Ops, aconteceu um erro inesperado</Title>
					<Subtitle>Recarregue o aplicativo para tentar novamente.</Subtitle>
					<Button onPress={this.restart}>
					<ButtonText>Recarregar</ButtonText>					
					</Button>
				</Container>
			);
		} else {
			return this.props.children;
		}
	}
}

export default ErrorBoundary;
