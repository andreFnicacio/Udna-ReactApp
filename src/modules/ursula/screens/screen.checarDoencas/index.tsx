import AsyncStorage from '@react-native-community/async-storage';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import ButtonRound from '../../../../components/ButtonRound';
import CardSwitch from '../../../../components/Cards/CardSwitch';
import Container from '../../../../layouts/Container/container';
import { useNavigation } from "react-navigation-hooks";
import AWS from "aws-sdk";
import { onlyNumbers } from "../../../../utils/formatter"
import { useUser } from "../../../../providers/UserProvider";
import {
	ICategoryAditionalInfo,
	IResultData,
	useInformacoesAdicionais,
} from '../../hooks/useInformacoesAdicionais';
import styles from './styles';
import { useScroll } from '../../../../providers/ScrollProvider';

const NUMBER_OF_CATEGORIES = 5;
let fatorescOletados = [];

const CheckDoenca = () => {
	const { infoData, nextCategory, onFinished } = useInformacoesAdicionais();
	const [currentCategory, setCurrentCategory] = useState(1);
	const [resultData, setResultData] = useState<IResultData>({});
	const { scrollToTop } = useScroll();
	const { getParam } = useNavigation();
	const {user} = useUser();
	let parametro = getParam("parametroUser");
	let count = getParam("count");

	function sendDataUrsula(id: string ) {
		console.warn(id)
		/* This example updates an item in the Music table. It adds a new attribute (Year) and modifies the AlbumTitle attribute.  All of the attributes in the item, as they appear after the update, are returned in the response. */
		let awsConfig2 = {
		  region: "us-east-1",
		  accessKeyId: "AKIA564XY3QK6GKEQWUS",
		  dynamoDbCrc32: false,
		  secretAccessKey: "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",
		};
	
		AWS.config.update(awsConfig2);
		var dynamodb = new AWS.DynamoDB();
		var params = {
		  Key: {
		   "id": {
			 S: id
			}
		  }, 
		  TableName: "fatoresRisco"
		 };
		 dynamodb.getItem(params, function(err, data) {
		   if(err){
			 console.warn(err, err.stack)
			}else{
			 fatorescOletados.push(data.Item.name.S)
			 console.warn(fatorescOletados);
			};           // successful response
		 });    
	}


	const renderItem = (item: any) => {
		const { id, title, description, category } = item as ICategoryAditionalInfo;
		const onValueChange = (isEnabled: boolean) => {
			if (isEnabled) {
				setResultData((prev: IResultData) => {
					return {
						...prev,
						[id]: {
							id,
							title,
							description,
							category,
						},
					};
				});

			} else {
				setResultData((prev: IResultData) => {
					delete prev[id];
					return prev;
				});
				
			};
			sendDataUrsula(item.fatorID);
		};
		return (
			<CardSwitch
				key={id}
				title={title}
				description={description}
				onValueChange={onValueChange}
			/>
		);
	};
	return (
		<Container onPressBack>
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.title}>Informações adicionais</Text>
				</View>
				<Text style={styles.description}>
					Outras informações sobre sua saúde podem ser importantes para sua
					avaliação.
				</Text>
				{infoData.map(item => {
					return renderItem(item);
				})}
				<View style={styles.buttonView}>
					{currentCategory > 1 && (
						<ButtonRound
							color={'white'}
							onPress={() => {
								setCurrentCategory(prev => {
									nextCategory(String(prev - 1));
									return prev - 1;
								});
							}}
							text={'Voltar'}
						/>
					)}
					<ButtonRound
						onPress={() => {
							//identificar que acabaram as categorias
							if (currentCategory > NUMBER_OF_CATEGORIES) {
								AsyncStorage.setItem("condicoesPreexistentes", JSON.stringify(fatorescOletados))								
								onFinished(resultData);
							} else {
								setCurrentCategory(prev => {
									nextCategory(String(prev + 1));
									return prev + 1;
								});
								scrollToTop();
							}
						}}
						text={'Continuar'}
					/>
				</View>
			</View>
		</Container>
	);
};

export default CheckDoenca;
