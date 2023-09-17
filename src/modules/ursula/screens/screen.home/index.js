import AWS from 'aws-sdk';
import React, { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import ButtonRound from '../../../../components/ButtonRound';
import CardIllustration from '../../../../components/Cards/CardIllustration';
import Container from '../../../../layouts/Container/container';
import styles from './styles';
let dadosBasicos = false;
let disabledInfosBasicos = true;
let disabledSaude = true;
let disabledHabitos = true;
let disabledAlimentacao = true;
let disabledCheckbox = true;
const HomeUrsula = () => {
	const { navigate, getParam } = useNavigation();
	const [parametroUser, setparametroUser] = useState("");
	
	let aux = getParam("ursula");
	let randomUser;
	
	console.warn(aux);
	switch (aux) {
		case "dadosBasicos":
			disabledInfosBasicos = false;
			dadosBasicos = true;
		  break;

		case "infos":
			 dadosBasicos = true;
			 disabledInfosBasicos = true;
			 disabledSaude = false;
			 disabledHabitos = true;
			 disabledAlimentacao = true;
			 disabledCheckbox = true;
		  break;

		case "saude":
			disabledHabitos = true;
			dadosBasicos = true;
			disabledInfosBasicos = true;
			disabledSaude = true;
			disabledHabitos =false;
			disabledAlimentacao = true;
			disabledCheckbox = true;
		  break;

		case "habitosIntent":
			disabledHabitos = true;
			dadosBasicos = true;
			disabledInfosBasicos = true;
			disabledSaude = true;
			disabledHabitos =true;
			disabledAlimentacao = false;
			disabledCheckbox = true;
		  break;

		case "alimentacao":
			disabledHabitos = true;
			dadosBasicos = true;
			disabledInfosBasicos = true;
			disabledSaude = true;
			disabledHabitos =true;
			disabledAlimentacao = true;
			disabledCheckbox = false;
		  break;

		default:
			dadosBasicos = getParam("checkStatusDoenca");
			disabledInfosBasicos = getParam("checkStatusGerais");
			disabledSaude = getParam("checkStatusGerais");
			disabledHabitos = getParam("checkStatusGerais");
			disabledAlimentacao = getParam("checkStatusGerais");
			disabledCheckbox = getParam("checkStatusGerais");        
		  break;
	}


	const sectionListData = [
		{
			title: 'Dados básicos',
			imageURL:
				'https://udnas3prd-prd.s3.amazonaws.com/icons/ursula/dadospessoais2+blob.png',
			onPress: () => {
				randomUser = Math.floor(Math.random() * 10000 + 1);
				navigate('FormUrsula', {
					ursula: 'dadosBasicos',
					contexto: 'Ursula',
					alias: 'aliasUrsula',
					parametroUser: randomUser.toString(),
				});
			},
			disabled: dadosBasicos,
		},
		{
			title: 'Condições Previas',
			onPress: () => {
				navigate('FormUrsula', {
					ursula: 'infos',
					contexto: 'infos',
					alias: 'infos',
					parametroUser: getParam("parametro"),
				});
			},
			imageURL:
				'https://udnas3prd-prd.s3.amazonaws.com/icons/ursula/condi%C3%A7oespreexistentes2+blob.png',
			disabled: disabledInfosBasicos,
		},
		{
			title: 'Saúde',
			onPress: () => {
				navigate('FormUrsula', {
					ursula: 'saude',
					contexto: 'saude',
					alias: 'saude',
					parametroUser: getParam("parametro"),
				});
			},
			imageURL:
				'https://udnas3prd-prd.s3.amazonaws.com/icons/ursula/saude2+blob.png',
			disabled: disabledSaude,
		},
		{
			title: 'Hábitos',
			onPress: () => {
				navigate('FormUrsula', {
					ursula: 'habitosIntent',
					contexto: 'habitoIntent',
					alias: 'habitosIntent',
					parametroUser: getParam("parametro"),
				});
			},
			imageURL:
				'https://udnas3prd-prd.s3.amazonaws.com/icons/ursula/habitos2+blob.png',
			disabled: disabledHabitos,
		},
		{
			title: 'Alimentação',
			onPress: () => {
				navigate('FormUrsula', {
					ursula: 'alimentacao',
					contexto: 'alimentacao',
					alias: 'alimentacao',
					parametroUser: getParam("parametro"),
				});
			},
			imageURL:
				'https://udnas3prd-prd.s3.amazonaws.com/icons/ursula/alimentacao2+blob.png',
			disabled: disabledAlimentacao,
		},
		{
			title: 'Informações adicionais',
			onPress: () => {
				navigate('CheckDoenca', {parametroUser: getParam("parametro"), count:getParam("count")});
			},
			imageURL:
				'https://udnas3prd-prd.s3.amazonaws.com/icons/ursula/infosadicionais2+blob.png',
			disabled: disabledCheckbox,
		},
	];	
	
	
	return (
		<Container onPressBack={true}>
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.title}>Faça sua avaliação</Text>
				</View>
				<Text style={styles.description}>
					Identificamos fatores de riscos para o desenvolvimento de doenças.
				</Text>
				<Text style={styles.description2}>
					Estes são os formulários para a avaliação da Úrsula:
				</Text>
				{sectionListData.map(({ onPress, title, imageURL, disabled }) => {
					return (
						<CardIllustration
							key={title}
							onPress={onPress}
							title={title}
							imageURL={imageURL}
							disabled={disabled}
						/>
					);
				})}
			</View>
		</Container>
	);
	console.warn(parametroUser);
};
export default HomeUrsula;
