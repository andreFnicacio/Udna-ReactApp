import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';
import Colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';
import styled from 'styled-components/native';

export const AvoidingViewContainer = styled.KeyboardAvoidingView.attrs({
	behavior: 'position',
	contentContainerStyle: { flex: 1 },
})`
	flex: 1;
`;

const styles = StyleSheet.create({
	safeAreaView: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flex: 1,
		backgroundColor: '#f9f9f9',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	positionTitulo: {
		width: '100%',
		alignItems: 'flex-start',
		marginBottom: 10,
	},
	textBackButton: {
		margin: 3,
		color: Colors.blue1,
	},
	titulo: {
		fontSize: fonts.size.font16,
		color: Colors.purple,
		textAlign: 'left',
	},
	description: {
		fontSize: 20,
		fontWeight: '600',
		textAlign: 'center',
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
	logo: {
		width: '100%',
		alignItems: 'flex-start',
	},
	logImage: {
		width: 80,
		height: 80,
		marginLeft: 10,
		marginBottom: 20,
		borderRadius: 75,
	},
	button: {
		alignItems: 'flex-end',
		marginTop: 40,
		marginLeft: 160,
		marginBottom: 250,
		width: 'auto',
		height: 23,
	},
	touchable: {
		marginTop: 20,
	},
	viewTouchableButton: {
		marginTop: 10,
		marginBottom: 30,
		marginLeft: 130,
		alignItems: 'center',
		backgroundColor: colors.primary,
		borderRadius: 10,
	},
	touchableButton: {
		margin: 1,
		padding: 10,
		borderRadius: 10,
		width: 200,
		backgroundColor: '#fff',
	},
	textTouchableButton: {
		color: Colors.primary,
		fontSize: fonts.size.font16,
		textAlign: 'center',
		justifyContent: 'center',
	},
	input: {
		height: 35,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 20,
	},
});

export default styles;
