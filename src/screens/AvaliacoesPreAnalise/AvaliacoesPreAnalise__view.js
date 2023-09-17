import propTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';

import Container from '../../layouts/Container/container';

import ShoppingItem from './components/AssessmentsItem';
import styles from './styles';
import Style from './Style';
import colors from '../../styles/colors';

export let dataText;

//==============CARD=================
const ShoppingView = ({ loading, onPressBack, onPress, style }) => {
	return (
		<Container loading={loading} headerTitle="" onPressBack={onPressBack}>
			<View style={styles.container}>
				<View style={Style.timeLine}>
					<Text
						style={{
							color: colors.purple,
							fontSize: 26,
							right: 100,
							marginTop: 40,
						}}>
						Avaliação
					</Text>
				</View>
				<View style={{}}>
					<ShoppingItem />
				</View>
			</View>
		</Container>
	);
};

ShoppingView.propTypes = {
	loading: propTypes.bool,
	data: propTypes.arrayOf(
		propTypes.shape({
			id: propTypes.string.isRequired,
			name: propTypes.string.isRequired,
			status: propTypes.shape({
				text: propTypes.string.isRequired,
				color: propTypes.string.isRequired,
			}).isRequired,
		}).isRequired,
	).isRequired,
	onPressBack: propTypes.func.isRequired,
	onPress: propTypes.func.isRequired,
};

ShoppingView.defaultProps = {
	loading: false,
};

export default ShoppingView;
