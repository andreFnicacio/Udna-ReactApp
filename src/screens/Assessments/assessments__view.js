import propTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Container from '../../layouts/Container/container';

import ShoppingItem from './components/AssessmentsItem';
import styles from './styles';
import Style from './Style';

export let dataText;

//==============CARD=================
const ShoppingView = ({ loading, onPressBack }) => {
	return (
		<Container
			loading={loading}
			headerTitle="Avaliações"
			onPressBack={onPressBack}>
			<View style={styles.container}>
				<View style={Style.timeLine} />
				<ShoppingItem />
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
	onPressBack: propTypes.bool.isRequired,
	onPress: propTypes.func.isRequired,
};

ShoppingView.defaultProps = {
	loading: false,
};

export default ShoppingView;
