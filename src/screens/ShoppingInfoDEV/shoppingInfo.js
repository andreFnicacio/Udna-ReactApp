import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { useUser } from '../../providers/UserProvider';

import Container from '../../layouts/Container/container';
import { masks } from '../../services/maskService';

import styles from './styles';
const _ = require('lodash');

let responseSucces;
let responseCod;
let responseWash = 'Nothinfg';

let responseCodLab;
let responseWashId = 'Nothinfg';

function callToData(onChoiceItem) {
	var params = {
		TableName: 'PayTable-esVixmarc2021-dev',
		FilterExpression: 'itemId = :this_category',
		ExpressionAttributeValues: { ':this_category': onChoiceItem },
	};

	var documentClient = new AWS.DynamoDB.DocumentClient();

	documentClient.scan(params, function(err, data) {
		if (err) {
			console.log(err);
		} else {
			console.log(data);
			const responseSuccesAdress = JSON.stringify(data, null, 2);
			response = JSON.parse(responseSuccesAdress);
			//
			//
			responseCategory = _.get(response, 'Items[0].codHouse', 'Nothinfg');
			responseWash = responseCategory.toString();
			console.log('***********');
			console.log(responseWash);
			//
			responseId = _.get(response, 'Items[0].codLab', 'Nothinfg');
			responseWashId = responseId.toString();

			//

			//
		}
	});
}

const ShoppingInfo = () => {
	const { goBack, getParam } = useNavigation();
	const item = getParam('ShoppingItem');
	const { user } = useUser();
	const [id, setId] = useState('4422');
	const { navigate } = useNavigation();
	let CPF = user.cpf;
	let cleanCPF = CPF.replace('.', '');
	let cleanCPF2 = cleanCPF.replace('.', '');
	let cleanCPF3 = cleanCPF2.replace('-', '');

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
				}
			}
		});
	}

	const random = () => {
		aux = Math.floor(Math.random() * 10000 + 1);
		setId(aux.toString());
	};

	callToData(item.id);

	return (
		<Container headerTitle="Informações" onPressBack>
			<View style={styles.container}>
				<View style={styles.info}>
					<Text style={styles.key}>ID da compra:</Text>
					<Text style={styles.value}>{item.id}</Text>
				</View>
				<View style={styles.info}>
					<Text style={styles.key}>Nome:</Text>
					<Text style={styles.value}>{item.name}</Text>
				</View>
				<View style={styles.info}>
					<Text style={styles.key}>Valor:</Text>
					<Text style={styles.value}>{`R$ ${masks.money(item.price)}`}</Text>
				</View>
				<View style={styles.info}>
					<Text style={styles.key}>Data do pedido:</Text>
					<Text style={styles.value}>{masks.date(item.date)}</Text>
				</View>
				<View style={styles.info}>
					<Text style={styles.key}>Status:</Text>
					<Text style={styles.value}>{item.status.text}</Text>
				</View>
			</View>
			<TouchableOpacity
				style={styles.containerIcon}
				onPress={() => {
					navigate('Status', {
						title: item.name,
						username: '',
						dateUrsula: item.date,
					});
					console.tron.log(item.name);
				}}>
				<View style={{ marginTop: 55 }}>
					<Text style={styles.textIcon3}>Rastreio</Text>
					<View>
						<Text style={{}}>{item.title}</Text>
						<Text style={{}}>{item.time}</Text>
						<Text style={{}}>{item.username}</Text>
					</View>
				</View>
			</TouchableOpacity>
		</Container>
	);
};

export default ShoppingInfo;

/**
 * <View style={{ marginLeft:300 }}>
          <TouchableOpacity 
            style={styles.touchable2}
          >
            <View style={styles.iconEnter}>
              <Image
                style={{ resizeMode: 'contain', width: 50,  padding: 15, }}
              
                source={require('../../assets/images/rastreioPedido.png')}
              />

            </View>
          </TouchableOpacity>
        </View>
 */
