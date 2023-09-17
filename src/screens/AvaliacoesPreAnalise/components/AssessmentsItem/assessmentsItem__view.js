import { useQuery } from '@apollo/react-hooks';
import propTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, Image, FlatList } from 'react-native';

import { useUser } from '../../../../providers/UserProvider';
import { maskRemoveService } from '../../../../services/maskService';
import { mapUserService } from '../../../../services/userService';
import { getUserCustomized } from '../../../../graphql/queriesCustomized';
import { useNavigation } from 'react-navigation-hooks';
import { verify } from '../../../../modules/ursula/screens/screen.form';

import styles from './styles';
import Style from '../../Style';

const DATA = [
	{
		id: '1',
		title: 'Doenças ou Condições',
		description: 'teste',
	},
	{
		id: '2',
		title: 'Medicamento contínuo',
		description: 'teste2',
	},
	{
		id: '3',
		title: 'Suplemento contínuo',
		description: 'teste3',
	},

	{
		id: '4',
		title: 'Doenças autoimunes',
		description: 'teste4',
	},
	{
		id: '5',
		title: 'Características do sono',
		description: 'teste5',
	},
	{
		id: '6',
		title: 'Histórico familiar',
		description: 'teste6',
	},
];

const ShoppingItemView = ({ name, status, onPress }) => {
	let verifyUrsula = verify;
	const navigation = useNavigation();
	const { navigate } = useNavigation();
	const getStatusStyle = () => ({ backgroundColor: status.color || 'white' });
	const { user, setUser } = useUser('');
	const [userName, setUserName] = useState([]);
	const [sortItems, setSortItems] = useState([]);

	const { data: userData, loading: userLoading } = useQuery(getUserCustomized, {
		variables: { id: maskRemoveService(user.cpf) },
	});

	useEffect(() => {
		if (userData) {
			const mappedUser = mapUserService(userData.getUser);
			setUser(mappedUser);
		}
	}, [userData]);

	function ReadToDataUrsula(
		verify,
		compraVerificada,
		finalPrice,
		dateUrsula,
		username,
		title,
	) {
		let awsConfig2 = {
			region: 'us-east-1',
			accessKeyId: 'AKIA564XY3QK6GKEQWUS',
			secretAccessKey: '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',
		};

		AWS.config.update(awsConfig2);

		var params = {
			TableName: 'produtosUrsula',
			FilterExpression: 'verify = :this_category',
			ExpressionAttributeValues: { ':this_category': verify },
		};

		var documentClient = new AWS.DynamoDB.DocumentClient();

		documentClient.scan(params, function(err, data) {
			if (err) {
				console.log(err);
			} else {
				console.log(data.Items);
				dataItems = data.Items;

				items1 = data.Items[2];
				items2 = data.Items[3];
				items3 = data.Items[1];
				items4 = data.Items[0];

				if (compraVerificada === 'true') {
					navigation.navigate('SubCategoyyAvaliacaoUrsula');
					console.tron.log('teste');
				} else {
					navigation.navigate('SubCategoyyAvaliacaoUrsula');
				}
			}
		});
	}

	function timeLine(id) {
		let awsConfig2 = {
			region: 'us-east-1',
			accessKeyId: 'AKIA564XY3QK6GKEQWUS',
			secretAccessKey: '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',
		};

		AWS.config.update(awsConfig2);

		var params = {
			TableName: 'checkSection',
			FilterExpression: 'id = :this_category',
			ExpressionAttributeValues: { ':this_category': id },
			dynamoDbCrc32: false,
		};

		var documentClient = new AWS.DynamoDB.DocumentClient();

		documentClient.scan(params, function(err, data) {
			if (err) {
				console.log(err);
			} else {
				setUserName(data.Items);
			}
		});
	}

	timeLine(user.cpf);

	function compare(a, b) {
		if (a.time < b.time) {
			return 1;
		}
		if (a.time > b.time) {
			return -1;
		}
		return 0;
	}

	const renderItem = ({ item }) => (
		<View>
			<Text style={Style.titleTimeUrsula}>{item.dateUrsula}</Text>
			<TouchableOpacity
				style={styles.container}
				onPress={() => {
					navigate('TipoFatorRiscoList');
				}}>
				<View>
					<Image
						style={Style.imageIconTime}
						source={{
							uri:
								'https://udnas3prd-prd.s3.amazonaws.com/icons/appUrsulav6/avaliacao.png',
						}}
					/>
				</View>
				<View style={{ marginLeft: -50, marginLeft: -100 }}>
					<Text style={Style.titleTime}>{item.title}</Text>
					<Text style={Style.titleTime}>{item.time}</Text>
					<Text style={Style.idTime}>{item.username}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);

	return (
		<View>
			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			/>
		</View>
	);
};

ShoppingItemView.propTypes = {
	name: propTypes.string,
	status: propTypes.shape({
		text: propTypes.string,
		color: propTypes.string,
	}),
	onPress: propTypes.func.isRequired,
};

ShoppingItemView.defaultProps = {
	name: '',
	status: {
		text: '',
		color: '',
	},
};

export default ShoppingItemView;
