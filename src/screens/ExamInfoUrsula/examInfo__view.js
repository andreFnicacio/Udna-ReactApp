import propTypes from 'prop-types';
import React, { useState } from 'react';
import { View, Text, Animated, TextInput, Alert } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import { useNavigation } from 'react-navigation-hooks';

import ButtonRound from '../../components/ButtonRound';
import Title from '../../components/Title';
import { BILLET, CREDIT_CARD } from '../../constants/payment';
import Container from '../../layouts/Container/container';
import useModalMessage from '../../hooks/useModalMessage';
import { useKeyboardAnimation } from '../../providers/KeyboardProvider';
import { masks } from '../../services/maskService';
import { moneyMaskService, discountService } from '../../services/moneyService';
import colors from '../../styles/colors';

import Billet from './components/Billet';
import CreditCard from './components/CreditCard';
import styles from './styles';

const ExamInfoView = ({
	loading,
	exam,
	selectedPayment,
	shouldBuyKit,
	card,
	value,
	onPressBack,
	onPressChangePayment,
	onChangeCreditCard,
	onPressBuy,
}) => {
	const { keyboardHeight } = useKeyboardAnimation();
	const { navigate } = useNavigation();
	const [state, setState] = useState({});
	const [number, onChangeNumber] = useState('');
	const [values, setValues] = useState(value);
	const { showModalMessage } = useModalMessage();
	const [shouldShow, setShouldShow] = useState(true);

	const payments = [
		{
			label: BILLET,
			value: 0,
		},
		{
			label: CREDIT_CARD,
			value: 1,
		},
	];

	const getRenderPayment = () => {
		let exams = {
			categoryId: exam.categoryId,
			description: exam.description,
			id: exam.id,
			price: values,
			subtitle: exam.subtitle,
			title: exam.title,
			url: exam.price,
		};
		return (
			<CreditCard
				exam={exams}
				selectedInstallments={card.installments}
				onChange={onChangeCreditCard}
			/>
		);
	};

	const getDisabled = () => {
		if (selectedPayment === 0) {
			return false;
		}
		if (card.valid) {
			return false;
		}
		return true;
	};

	const getDiscount = value => {
		let discount = value / 100;

		let discountClean = 1.0 - discount;

		let discountCleanUp = exam.price * discountClean;

		setValues(discountCleanUp.toString());
		navigate('ExamInfoUrsula', {
			number: discountCleanUp.toString(),
			exam: exam,
			codeId: '200103',
		});
	};

	const getPay = () => {
		if (
			shouldBuyKit &&
			(selectedPayment === 0 ||
				(selectedPayment === 1 && card.installments === 1))
		) {
			return (
				<>
					<Text style={styles.price}>{`R$ ${moneyMaskService(value)}`}</Text>
				</>
			);
		}

		return <Text style={styles.price}>{`R$ ${masks.money(value)}`}</Text>;
	};

	//kit purchase//
	return (
		<Container
			loading={loading}
			scrollEnabled
			headerTitle="Informações"
			onPressBack={() => navigate('Principal')}>
			<View style={styles.container}>
				<View style={styles.topView}>
					<View style={styles.infoView}>
						<Title color="gray" text={exam.title} style={styles.title} />
						<>
							{shouldShow ? (
								<View style={styles.discont}>
									<TextInput
										style={styles.input}
										onChangeText={onChangeNumber}
										value={number}
										placeholder="Cupom de Desconto"
										placeholderTextColor={'#000'}
										clearButtonMode={true}
										type="text"
										keyboardType="email-address"
										keyboardAppearance="dark"
									/>
									<ButtonRound
										text={!shouldBuyKit ? 'Aplicar' : 'Aplicar'}
										onPress={() => {
											let awsConfig2 = {
												region: 'us-east-1',
												accessKeyId: 'AKIA564XY3QK6GKEQWUS',
												secretAccessKey:
													'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',
											};

											AWS.config.update(awsConfig2);

											var params = {
												TableName: 'UdnaDiscount-EsVix2021',
												FilterExpression: 'coupon = :this_category',
												ExpressionAttributeValues: { ':this_category': number },
											};

											var documentClient = new AWS.DynamoDB.DocumentClient();

											documentClient.scan(params, function(err, data) {
												if (err) {
													console.log(err);
												} else {
													if (data.Count === 0) {
														showModalMessage({
															title: 'Ops!',
															description:
																'Cupom não verificado, tente novamente!!',
														});
													} else {
														let state = {
															coupon: data.Items[0].coupon,
															discount: data.Items[0].discount,
														};
														showModalMessage({
															title: 'Sucesso!',
															description: 'Cupom verificado!!',
														});
														setShouldShow(false);
														getDiscount(state.discount);
													}
												}
											});
										}}
										style={styles.buttonAplic}
										disabled={!TextInput ? true : getDisabled()}
									/>
									<Animated.View style={{ height: keyboardHeight }} />
								</View>
							) : null}
						</>

						<View>{getPay()}</View>
						{!shouldBuyKit && (
							<Text style={styles.description}>{exam.description}</Text>
						)}
					</View>
					{shouldBuyKit && (
						<>
							<SwitchSelector
								options={payments}
								initial={selectedPayment}
								onPress={() =>
									Alert.alert(
										'Funcionalidade Boleto Desativada neste Produto!!! Entre em Contato com a equipe de vendas a partir da nossa loja no app ou retorne para Funcionalidade Cartão de Crédito!!',
									)
								}
								textColor={colors.white}
								selectedColor={colors.white}
								buttonColor={colors.primary}
								backgroundColor={colors.purple1}
								borderColor={colors.transparent}
								textStyle={styles.textSwitch}
								selectedTextStyle={styles.textSwitch}
								style={styles.switchSelector}
							/>
							{getRenderPayment()}
						</>
					)}
				</View>
				<ButtonRound
					text={!shouldBuyKit ? 'Escolher pagamento' : 'Comprar'}
					onPress={onPressBuy}
					style={styles.button}
					disabled={!shouldBuyKit ? false : getDisabled()}
				/>
				<Animated.View style={{ height: keyboardHeight }} />
			</View>
		</Container>
	);
};

ExamInfoView.propTypes = {
	loading: propTypes.bool.isRequired,
	exam: propTypes.shape({
		id: propTypes.string.isRequired,
		title: propTypes.string.isRequired,
		description: propTypes.string.isRequired,
		price: propTypes.string.isRequired,
	}).isRequired,
	value: propTypes.string.isRequired,
	selectedPayment: propTypes.number.isRequired,
	shouldBuyKit: propTypes.bool.isRequired,
	card: propTypes.shape({
		valid: propTypes.bool.isRequired,
		installments: propTypes.number.isRequired,
	}).isRequired,
	onPressBack: propTypes.func.isRequired,
	onPressChangePayment: propTypes.func.isRequired,
	onChangeCreditCard: propTypes.func.isRequired,
	onPressBuy: propTypes.func.isRequired,
};

export default ExamInfoView;
