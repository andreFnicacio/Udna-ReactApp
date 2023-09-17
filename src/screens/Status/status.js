import propTypes from 'prop-types';
import React, { useState } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	Alert,
	Linking,
} from 'react-native';
import Container from '../../layouts/Container/container';
import ActivateModal1 from './Components/ActivateModal1';
import ActivateModal2 from './Components/ActivateModal2';
import ActivateModal3 from './Components/ActivateModal3';
import styles from './styles';
import Style from './Style';
import { useNavigation } from 'react-navigation-hooks';
import { cleanCPF3 } from '../../modules/ursula/screens/screen.form';
import colors from '../../styles/colors';

export let dataText;

let responseWash = 'https://google.com';
let pdf = 'https://google.com';

//==============CARD=================
const StatusView = ({ loading, onPressBack }) => {
	const { navigate } = useNavigation();
	const [isModalVisible1, setIsModalVisible1] = useState(false);
	const [isModalVisible2, setIsModalVisible2] = useState(false);
	const [isModalVisible3, setIsModalVisible3] = useState(false);
	const [disebled, setDisebled] = useState(true);
	const [disebled1, setDisebled1] = useState(true);
	const [codHome, setCodHome] = useState(true);
	const [disebled3, setDisebled3] = useState(true);
	const [disebled4, setDisebled4] = useState(true);
	const [disebled5, setDisebled5] = useState(true);
	const [code, setCode] = useState('');
	const [statusStyle1, setStatusStyle1] = useState(Style.lineResultTimeLine);
	const [statusStyle2, setStatusStyle2] = useState(Style.lineResultTimeLine);
	const [statusStyle3, setStatusStyle3] = useState(Style.lineResultTimeLine);
	const [statusStyle4, setStatusStyle4] = useState(Style.lineResultTimeLine);
	const [statusStyle5, setStatusStyle5] = useState(
		Style.lineResultTimeLineLaudo,
	);
	const [codeValidation, setCodeValidation] = useState('');
	const { getParam } = useNavigation();
	let title = getParam('title');
	let username = getParam('username');
	let dateUrsula = getParam('dateUrsula');

	function callToData(cleanCPF3) {
		let awsConfig2 = {
			region: 'us-east-1',
			accessKeyId: 'AKIA564XY3QK6GKEQWUS',
			secretAccessKey: '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',
		};

		AWS.config.update(awsConfig2);

		var params = {
			TableName: 'StatusEsvix-2021',
			FilterExpression: 'userid = :this_category',
			ExpressionAttributeValues: { ':this_category': cleanCPF3 },
		};

		var documentClient = new AWS.DynamoDB.DocumentClient();

		documentClient.scan(params, function(err, data) {
			if (err) {
				console.log(err);
			} else {
				console.log(data.Items[0].statusJourney);
				switch (data.Items[0].statusJourney) {
					case '2':
						setDisebled1(false);
						setCodHome(data.Items[0].codHouse);
						setStatusStyle1(Style.lineResultTimeLineReports);
						break;
					case '3':
						setDisebled3(false);
						setCodHome(data.Items[0].codLab);
						setStatusStyle3(Style.lineResultTimeLineReports);
						break;
					case '4':
						setDisebled4(false);
						setStatusStyle4(Style.lineResultTimeLineReports);
						break;
					case '5':
						setDisebled5(false);
						setStatusStyle5(Style.lineResultTimeLineReports);
						break;
				}
			}
		});
	}

	callToData(cleanCPF3);

	const kitActivation = () => {
		switch (codeValidation) {
			case 'valid':
				setIsModalVisible(false);
				setCode('');
				setCodeValidation('');
				setName('Aguardando Resultado');
				setDisebled(false);
				setDisebledKit(true);
				setStyle(styles.buttonLKs);
				navigate('ExamInfo', { exam: exam });
				break;

			case 'invalid':
				setIsModalVisible(false);
				setCode('');
				setCodeValidation('');
				break;

			default:
				//validateCode();
				break;
		}
	};
	return (
		<Container
			loading={loading}
			headerTitle="Status"
			onPressBack={() => {
				teste();
			}}>
			<View style={styles.container}>
				<View style={Style.timeLine}>
					<View style={{ marginBottom: 10 }}>
						<Text style={{ marginBottom: 10, color: colors.green1 }}>
							{dateUrsula}
						</Text>
						<View style={Style.containerTime}>
							<View style={Style.lineResultTimeLineReports}>
								<View style={{}}>
									<Text style={Style.titleTime}>{title}</Text>
									<Text style={Style.clockTime}> </Text>
									<Text style={Style.idTime1}>{username}</Text>
								</View>
								<View style={{ marginRight: 20 }}>
									<Image
										style={Style.imageIconTime}
										source={{
											uri:
												'https://udnas3prd-prd.s3.amazonaws.com/icons/appUrsulav6/icone+teste+paternidade.png',
										}}
									/>
								</View>
							</View>
						</View>
					</View>
				</View>

				<View style={{ marginBottom: 10 }}>
					<Text style={{ marginBottom: 10, color: colors.green1 }} />
					<View style={Style.containerTime}>
						<View style={Style.lineResultTimeLineReports}>
							<View style={{ marginLeft: 15 }}>
								<Text style={Style.titleTime}>Pedido</Text>
								<Text style={Style.clockTime}> </Text>
								<TouchableOpacity
									style={Style.borderButton}
									onPress={() => navigate('Shopping')}>
									<View style={Style.borderButtonOne}>
										<Text style={Style.idTime2}>Comprovante de Compra</Text>
									</View>
								</TouchableOpacity>
							</View>
							<View style={{ marginRight: 30 }}>
								<Image
									style={Style.imageIconTime}
									source={{
										uri:
											'https://udnas3prd-prd.s3.amazonaws.com/icons/appUrsulav6/icone+modal+agora+e%CC%81+com+voce.png',
									}}
								/>
							</View>
							<ActivateModal1
								isVisible={isModalVisible1}
								code={code}
								codeValidation={codeValidation}
								onChangeCode={setCode}
								onPress={kitActivation}
								onPressSecond={() => setIsModalVisible1(false)}
							/>
						</View>
					</View>
				</View>

				<View style={{ marginBottom: 10 }}>
					<Text style={{ marginBottom: 10, color: colors.green1 }} />
					<View style={Style.containerTime}>
						<View style={statusStyle1}>
							<View style={{ marginLeft: 15 }}>
								<Text style={Style.titleTime}>Seu kit está a caminho</Text>
								<Text style={Style.clockTime}> </Text>
								<TouchableOpacity
									disabled={disebled1}
									style={Style.borderButton}
									onPress={() => Linking.openURL(codHome)}>
									<View style={Style.borderButtonOne}>
										<Text style={Style.idTimeUdna}>Rastrear kit</Text>
									</View>
								</TouchableOpacity>
							</View>
							<View style={{ marginRight: 30 }}>
								<Image
									style={Style.imageIconTime}
									source={{
										uri:
											'https://udnas3prd-prd.s3.amazonaws.com/icons/appUrsulav6/i%CC%81cone+aviao+kit+a+caminho.png',
									}}
								/>
							</View>
						</View>
					</View>
				</View>

				<View style={{ marginBottom: 10 }}>
					<Text style={{ marginBottom: 10, color: colors.green1 }} />
					<View style={Style.containerTime}>
						<View style={statusStyle3}>
							<View style={{ marginRight: -15 }}>
								<Text style={Style.titleTime}>Seu kit chegou!</Text>
								<Text style={Style.clockTime}> </Text>
								<TouchableOpacity
									style={Style.borderButton}
									disabled={disebled3}
									onPress={() =>
										Alert.alert(
											'Entre em contato com nossa equipem de vendas!!',
										)
									}>
									<View style={Style.borderButtonOne}>
										<Text style={Style.idTimeUdna}>
											{' '}
											Informações de coleta{' '}
										</Text>
									</View>
								</TouchableOpacity>
							</View>
							<View style={{ marginRight: 10 }}>
								<Image
									style={Style.imageIconTime}
									source={{
										uri:
											'https://udnas3prd-prd.s3.amazonaws.com/icons/appUrsulav6/i%CC%81cone+seu+kit+chegou.png',
									}}
								/>
							</View>
							<ActivateModal2
								isVisible={isModalVisible2}
								code={code}
								codeValidation={codeValidation}
								onChangeCode={setCode}
								onPress={kitActivation}
								onPressSecond={() => setIsModalVisible2(false)}
							/>
						</View>
					</View>
				</View>

				<View style={{ marginBottom: 10 }}>
					<Text style={{ marginBottom: 10, color: colors.green1 }} />
					<View style={Style.containerTime}>
						<View style={statusStyle3}>
							<View style={{ marginLeft: -8 }}>
								<Text style={Style.titleTime}>Envio para laboratório</Text>
								<Text style={Style.clockTime}> </Text>
								<TouchableOpacity
									disabled={disebled3}
									style={Style.borderButton}
									onPress={() => () => Linking.openURL(codHome)}>
									<View style={Style.borderButtonOne}>
										<Text style={Style.idTimeUdna}>Rastrear kit</Text>
									</View>
								</TouchableOpacity>
							</View>
							<View style={{ marginLeft: -5 }}>
								<Image
									style={Style.imageIconTime}
									source={{
										uri:
											'https://udnas3prd-prd.s3.amazonaws.com/icons/appUrsulav6/i%CC%81cone+envio+para+laboratorio.png',
									}}
								/>
							</View>
						</View>
					</View>
				</View>

				<View style={{ marginBottom: 10 }}>
					<Text style={{ marginBottom: 10, color: colors.green1 }} />
					<View style={Style.containerTime}>
						<View style={statusStyle4}>
							<View style={{ marginLeft: 20, marginRight: -15 }}>
								<Text style={Style.titleTime}>Laboratorio em analise</Text>
								<Text style={Style.clockTime}> </Text>
								<TouchableOpacity
									style={Style.borderButton}
									disabled={disebled4}
									onPress={() =>
										Alert.alert(
											'Assim que esta informação estiver disponivel, nossa equipe de vendas vai entrar em contato!!',
										)
									}>
									<View style={Style.borderButtonOne}>
										<Text style={Style.idTimeUdna}>
											Informações sobre analise
										</Text>
									</View>
								</TouchableOpacity>
							</View>
							<View style={{ marginRight: 40 }}>
								<Image
									style={Style.imageIconTime}
									source={{
										uri: 'https://udnas3prd-prd.s3.amazonaws.com/icons/dna.png',
									}}
								/>
							</View>
							<ActivateModal3
								isVisible={isModalVisible3}
								code={code}
								codeValidation={codeValidation}
								onChangeCode={setCode}
								onPress={kitActivation}
								onPressSecond={() => setIsModalVisible3(false)}
							/>
						</View>
					</View>
				</View>

				<View style={{ marginBottom: 10 }}>
					<Text style={{ marginBottom: 10, color: colors.green1 }} />
					<View style={Style.containerTime}>
						<View style={statusStyle5}>
							<View>
								<Text style={Style.titleTime}>Seu laudo</Text>
								<Text style={Style.clockTime}> </Text>
								<TouchableOpacity
									disabled={disebled5}
									style={Style.borderButton}
									onPress={() =>
										Alert.alert(
											'Assim que esta informação estiver disponivel, nossa equipe de vendas vai entrar em contato!!',
										)
									}>
									<View style={Style.borderButtonOne}>
										<Text style={Style.idTimeUdna}>Abrir laudo</Text>
									</View>
								</TouchableOpacity>
							</View>
							<View style={{ marginRight: 10 }}>
								<Image
									style={Style.imageIconTime}
									source={{
										uri:
											'https://udnas3prd-prd.s3.amazonaws.com/icons/appUrsulav6/icone+seu+laudo.png',
									}}
								/>
							</View>
						</View>
					</View>
				</View>
			</View>
		</Container>
	);
};

StatusView.propTypes = {
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

StatusView.defaultProps = {
	loading: false,
};

export default StatusView;

//<Text style={Style.calendarTime}>  </Text>//
