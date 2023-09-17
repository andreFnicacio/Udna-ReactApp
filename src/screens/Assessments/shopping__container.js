import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { useNavigation } from 'react-navigation-hooks';

import { getExamsCustomized } from '../../graphql/queriesCustomized';
import { useUser } from '../../providers/UserProvider';
import { maskRemoveService } from '../../services/maskService';
import { mapShoppingService } from '../../services/shoppingService';

import ShoppingView from './assessments__view';

const ShoppingContainer = () => {
	const { navigate, goBack } = useNavigation();
	const { user } = useUser();
	const { data: examsData, loading: examsLoading } = useQuery(
		getExamsCustomized,
		{
			variables: {
				username: maskRemoveService(user.cpf),
			},
		},
	);

	const goShoppingInfo = item => {
		navigate('ShoppingInfo', { ShoppingItem: item });
	};
	return (
		<ShoppingView
			loading={examsLoading}
			data={examsData && !examsLoading ? mapShoppingService(examsData) : []}
			onPressBack={true}
			onPress={goShoppingInfo}
		/>
	);
};

export default ShoppingContainer;
