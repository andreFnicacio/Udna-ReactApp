import AsyncStorage from '@react-native-community/async-storage';
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Container from '../../../../layouts/Container/container';
import Style from './styles';
import { useNavigation } from 'react-navigation-hooks';
import CardText from '../../../../components/Cards/CardText';

const FatorRiscoList = () => {
	const { navigate, getParam } = useNavigation();
	const description = getParam('description');
	const [infodata, setInfoData] = useState();
	console.warn(getParam("parametroUser"));


	async function fatoresDeRisco() {
		const fatoresDeRisco = await AsyncStorage.getItem(getParam("tipofatorRisco"));
		console.warn(fatoresDeRisco)
		setInfoData(JSON.parse(fatoresDeRisco))
	}
	
	fatoresDeRisco();	

	return (
		<Container onPressBack>
			<View style={Style.container}>
				<View style={Style.header}>
					<Text style={Style.title}>{getParam('title')}</Text>
				</View>
				<View style={Style.nextSteps}>
					<Text style={Style.descriptionNextSteps}>{description}</Text>
				</View>
				<View style={Style.recommendations}>
					{
						!infodata ? (
							<Text>Você não possui um Fator de Risco nessa categoria!.</Text>
						) : (
							infodata.map((item, index) => {
								return (
									<CardText
										key={index}
										onPress={() => {
											navigate('FatorRisco', {
												fatorRisco: item,
												title: item,
											});
										}}
										text={item}
									/>
								);
							})
						)
					}
				</View>
			</View>
		</Container>
	);
};

export default FatorRiscoList;
