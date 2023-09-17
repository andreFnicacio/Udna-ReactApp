import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { updateKitCustomized } from '../../graphql/mutationsCustomized';
import useModalMessage from '../../hooks/useModalMessage';
import { useUser } from '../../providers/UserProvider';
import { maskRemoveService } from '../../services/maskService';
import { buyExamCreditCardService } from '../../services/storeService';
import ExamInfoView from './examInfo__view';

const _ = require('lodash');

let now = new Date();

function callToData() {
	let awsConfig2 = {
		region: 'us-east-1',
		accessKeyId: 'AKIA564XY3QK6GKEQWUS',
		secretAccessKey: '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',
	};

	AWS.config.update(awsConfig2);

	var params = {
		TableName: 'timeLineUrsula-exVix2021set-prd',
		FilterExpression: 'usercpf = :this_category',
		ExpressionAttributeValues: { ':this_category': usercpfUrsula },
	};

	var documentClient = new AWS.DynamoDB.DocumentClient();

	documentClient.scan(params, function(err, data) {
		if (err) {
			console.log(err);
		} else {
			aux = data.Items;

			let awsConfig2 = {
				region: 'us-east-1',
				accessKeyId: 'AKIA564XY3QK6GKEQWUS',
				secretAccessKey: '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',
			};

			AWS.config.update(awsConfig2);

			let dynamodb = new AWS.DynamoDB();

			let auxDate = now.getDate();
			let auxMonth = now.getMonth() + 1;
			let auxYer = now.getFullYear();
			auxClean =
				auxDate.toString() +
				'-' +
				auxMonth.toString() +
				'-' +
				auxYer.toString();
			const params = {
				Item: {
					id: {
						S: aux[0].id,
					},
					maeParticipa: {
						S: aux[0].maeParticipa,
					},
					title: {
						S: aux[0].title,
					},
					usercpf: {
						S: aux[0].usercpf,
					},
					username: {
						S: aux[0].username,
					},
					time: {
						S: aux[0].time,
					},
					dateUrsula: {
						S: auxClean,
					},
					compraVerificada: {
						S: 'true',
					},
					verify: {
						S: '1',
					},
				},
				ReturnConsumedCapacity: 'TOTAL',
				TableName: 'timeLineUrsula-exVix2021set-prd',
			};

			console.log('Adding a new item...');
			dynamodb.putItem(params, function(err, data) {
				if (err) console.log(err, err.stack);
				// an error occurred
				else console.log(data); // successful response
			});
		}
	});
}

const ExamInfoContainer = () => {
	const { goBack, getParam, navigate } = useNavigation();
	const { user } = useUser();
	const exam = getParam('exam');
	const finalPrice = getParam('finalPrice');
	const number = getParam('number');
	const codeId = getParam('codeId');
	const { showModalMessage } = useModalMessage();

	const [shouldBuyKit, setShouldBuyKit] = useState(false);
	const [selectedPayment, setSelectedPayment] = useState(1);
	const [loading, setLoading] = useState(false);
	let cleanPrice = parseInt(exam.price);
	let finalPriceUrsula = cleanPrice + finalPrice;
	let value = finalPriceUrsula.toString();
	const [card, setCard] = useState({
		number: '',
		expiry: '',
		cvc: '',
		name: '',
		valid: false,
		installments: 1,
	});

	let CPF = user.cpf;
	let cleanCPF = CPF.replace('.', '');
	let cleanCPF2 = cleanCPF.replace('.', '');
	let cleanCPF3 = cleanCPF2.replace('-', '');

	const [updateKit] = useMutation(updateKitCustomized);

	const navigateGoBack = () => {
		Keyboard.dismiss();
		setTimeout(() => {
			goBack();
		}, 50);
	};

	const activateCode = async () => {
		await updateKit({
			variables: {
				input: {
					id: codeId,
					status: 'ACTIVATE',
					owner: maskRemoveService(user.cpf),
				},
			},
		});
	};

	const getDisabled = () => {
		/**
     * if (selectedPayment === 0) {
      return false;
    }
     */
		if (card.valid) {
			return false;
		}
		return true;
	};

	const getDiscount = id => {};

	if (number) {
		value = number.toString();
	}

	const buyBilletOrCard = async () => {
		setLoading(true);
		//if (selectedPayment === 0) {
		//  //let exams = {categoryId: exam.categoryId, description: exam.description, id: exam.id, price: value, subtitle: exam.subtitle, title: exam.title, url: exam.url}
		//  //const [error, res] = await buyExamBilletService(user, exams);
		////
		//  //if (error) {
		//  //  console.log(error);
		//  //  setLoading(false);
		//  //} else {
		//  //  setLoading(false);
		//  //  navigate('Billet', { billet: res.data.buyExamBillet});
		//  //}
		//  setSelectedPayment(1);
		//  return;
		//}

		let exams = {
			categoryId: exam.categoryId,
			description: exam.description,
			id: exam.id,
			price: value,
			subtitle: exam.subtitle,
			title: exam.title,
			url: exam.url,
		};
		const [error, res] = await buyExamCreditCardService(user, exams, card);

		if (exams.price === '0') {
			if (codeId) {
				await activateCode();
			}
			console.log(res);
			setLoading(false);
			/* This example adds a new item to the Music table. */
			callToData();
			Alert.alert('Compra Efetuada com Sucesso!!');
		}

		if (
			error ||
			res.data.buyExamCreditCard === null ||
			res.data.buyExamCreditCard.includes('Error')
		) {
			setLoading(false);
			setCard({
				...card,
				valid: false,
			});
			showModalMessage({
				title: 'Ops!',
				description: 'Tivemos um problema ao realizar a compra no cartão',
			});
			console.log(res);
			console.log(error);
		} else {
			if (codeId) {
				await activateCode();
			}
			console.log(res);
			setLoading(false);
			/* This example adds a new item to the Music table. */
			callToData();
			Alert.alert('Compra Efetuada com Sucesso!!');
			navigate('Reports');
		}
	};

	const buyExam = async () => {
		if (shouldBuyKit) {
			if (user.address) {
				Keyboard.dismiss();
				setTimeout(async () => {
					await buyBilletOrCard();
				}, 500);
			} else {
				showModalMessage({
					title: 'Endereço não cadastrado',
					description:
						'Para efetuar uma compra precisamos do seu endereço cadastrado. Gostaria de cadastrar agora?',
					buttonText: 'Sim',
					buttonTextSecond: 'Não',
					onPress: async () => {
						// if (codeId) {
						//   await activateCode();
						// }
						navigate('EditAddress');
					},
				});
			}
		} else {
			setShouldBuyKit(true);
		}
	};
	return (
		<ExamInfoView
			loading={loading}
			exam={exam}
			selectedPayment={selectedPayment}
			shouldBuyKit={shouldBuyKit}
			card={card}
			value={value}
			onPressBack={navigateGoBack}
			onPressChangePayment={() => {
				setSelectedPayment(1);
			}}
			onChangeCreditCard={value =>
				setCard({
					...card,
					...value,
				})
			}
			onPressBuy={buyExam}
		/>
	);
};

export default ExamInfoContainer;
