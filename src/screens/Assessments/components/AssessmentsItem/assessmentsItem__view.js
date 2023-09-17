import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Image, FlatList } from 'react-native';

import { useUser } from '../../../../providers/UserProvider';
import { useNavigation } from 'react-navigation-hooks';

import { onlyNumbers } from "../../../../utils/formatter";

import styles from './styles';
import Style from '../../Style';

const ShoppingItemView = () => {
	const navigation = useNavigation();
	const { user } = useUser();
	const [assessmentsItems, setAssessmentsItems] = useState([]);

	function ReadToDataUrsula(parametroUser) {

	}

	let awsConfig2 = {
		region: 'us-east-1',
		accessKeyId: 'AKIA564XY3QK6GKEQWUS',
		secretAccessKey: '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',
	};

	AWS.config.update(awsConfig2);

	var params = {
		TableName: 'timeLineUrsula-exVix2021set-prd',
		FilterExpression: 'usercpf = :this_category',
		ExpressionAttributeValues: { ':this_category': onlyNumbers(user.cpf) },
		dynamoDbCrc32: false,
	};

	var documentClient = new AWS.DynamoDB.DocumentClient();

	documentClient.scan(params, function (err, data) {
		if (err) {
			console.log(err);
		} else {
			setAssessmentsItems(data.Items);
		}
	});



	function compare(a, b) {
		if (a.time < b.time) {
			return -1;
		}
		if (a.time > b.time) {
			return 1;
		}
		return 0;
	}

	const renderItem = item => (
		<View key={item.id}>
			<Text style={Style.titleTimeUrsula}>{item.dateUrsula}</Text>
			<TouchableOpacity
				style={styles.container}
				onPress={() => navigation.navigate('TipoFatorRiscoList', { parametroUser: item.parametroUser })}>
				<View>
					<Text style={Style.titleTime}>{item.title}</Text>
					<Text style={Style.titleTime}>{item.time}</Text>
					<Text style={Style.idTime}>{item.username}</Text>
				</View>
				<View>
					<Image
						style={Style.imageIconTime}
						source={{
							uri:
								'https://udnas3prd-prd.s3.amazonaws.com/icons/appUrsulav6/icone+teste+paternidade.png',
						}}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);

	console.warn(assessmentsItems);

	return (
		<View>
			{
				assessmentsItems.length === 0 ? (
					<Text style={Style.textoNullo}>Você não possui Avaliações!</Text>
				) : (
					assessmentsItems.sort(compare).map(item => {
						return renderItem(item);
					})
				)
			}
		</View>
	);
};

export default ShoppingItemView;
