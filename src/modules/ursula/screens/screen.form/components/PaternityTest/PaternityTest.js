//import { Storage } from 'aws-amplify';
import { useQuery } from '@apollo/react-hooks';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

//import caixa from '../../../../assets/images/caixa.png';
//import carta from '../../../../assets/images/enviar.png';
//import evento from '../../../../assets/images/evento.png';
//import UDNAIcon from '../../../../assets/svg/UDNAIcon';
import {
	getUserCustomized,
	getExamsCustomized,
	listCategorysCustomized,
	listKitsCustomized,
} from '../../../../../../graphql/queriesCustomized';
import Container from '../../../../../../layouts/Container';
import { useUser } from '../../../../../../providers/UserProvider';
import { maskRemoveService } from '../../../../../../services/maskService';
//import { mapStoreService } from '../../../../services/storeService';
import { mapUserService } from '../../../../../../services/userService';

//import ButtonRound from '../../../../components/ButtonRound';

//import ActivateModal from '../ActivateModal/index';
//import MyDna from '../MyDna/index';
//import ExamCard from './components/ExamCard';
//import Sugestions from '../Sugestions/index';
//import TestDna from './components/TestDna';
//import styles from './styles';
//import ShoppingViews from '../../../Shopping/shopping__viewsCard';
//import { NUTRITIONAL_PROFILE, PROFESSIONAL_RECOMMENDATIONS, GENETIC_TESTS } from '../../../../constants/reports';

//import { mapShoppingService } from '../../../../services/shoppingService';

const PaternityTest = () => {
	const { user, setUser } = useUser();

	const { data: userData, loading: userLoading } = useQuery(getUserCustomized, {
		variables: { id: maskRemoveService(user.cpf) },
	});

	return (
		<Container headerTitle="Laudos" loading={userLoading || categoriesLoading}>
			<View>
				<Text>A Criar</Text>
			</View>
		</Container>
	);
};

export default PaternityTest;
