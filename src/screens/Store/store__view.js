import { useQuery } from '@apollo/react-hooks';
import propTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import {
	View,
	Text,
	Linking,
	Image,
	TouchableOpacity,
	ScrollView,
	FlatList,
} from 'react-native';
//import Category from "./components/Category/Category.js";
import { getUserCustomized } from '../../graphql/queriesCustomized';
import Container from '../../layouts/Container';
import { useUser } from '../../providers/UserProvider';
import { maskRemoveService } from '../../services/maskService';
import styles from './styles';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { mapUserService } from '../../services/userService';
import ProfileItem from './components/ProfileItem';

const Item = ({ item }) => (
	<View style={styles.item}>
		<View>
			<Text style={styles.title}>{item.title}</Text>
		</View>
	</View>
);

const StoreView = ({ loading }) => {
	const { user } = useUser();
	const [mappedUser, setMappedUser] = useState({});
	const [recomended, setRecomended] = useState([]);
	const { data: userData, loading: userLoading } = useQuery(getUserCustomized, {
		variables: { id: maskRemoveService(user.cpf) },
	});
	const { navigate } = useNavigation();

	let str;

	function Recomended() {
		let awsConfig2 = {
			region: 'us-east-1',
			accessKeyId: 'AKIA564XY3QK6GKEQWUS',
			secretAccessKey: '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',
		};

		AWS.config.update(awsConfig2);

		var params = {
			TableName: 'SubExam-esVix2021marc-dev',
			FilterExpression: 'categoryId = :this_category',
			ExpressionAttributeValues: { ':this_category': 'n-00000' },
			dynamoDbCrc32: false,
		};

		var documentClient = new AWS.DynamoDB.DocumentClient();

		documentClient.scan(params, function(err, data) {
			if (err) {
				console.log(err);
			} else {
				setRecomended(data.Items);
				console.log(data);
			}
		});
	}
	Recomended(Item);

	useEffect(() => {
		if (userData && !userLoading) {
			setMappedUser(mapUserService(userData?.getUser));
			console.warn(mappedUser)
		}
	}, [userData, userLoading]);

	const renderItem = ({ item }) => (
		<TouchableOpacity
			onPress={() => {
				const exam = {
					title: item.title,
					categoryId: item.categoryId,
					id: item.id,
					subtitle: item.subtitle,
					url: item.url,
					description: item.description,
					price: item.price,
				};
				navigate('ExamInfo3', { exam: exam });
			}}
			style={{
				flexDirection: 'row',
				justifyContent: 'space-evenly',
				height: 120,
				width: 320,
			}}>
			<View
				style={{
					backgroundColor: colors.purple,
					width: 'auto',
					height: 90,
					borderRadius: 20,
					marginRight: 5,
				}}>
				<View
					style={{
						backgroundColor: '#fff',
						width: 100,
						height: 89,
						margin: 1,
						borderRadius: 20,
						alignItems: 'center',
						flex: 1,
					}}>
					<Image
						style={{
							height: 80,
							width: 80,
							marginTop: 4,
							resizeMode: 'contain',
						}}
						source={{
							uri: item.url,
						}}
					/>
				</View>
			</View>
			<View style={{}}>
				<Text
					style={{
						color: colors.green1,
						fontFamily: fonts.family.semiBold,
						fontSize: fonts.size.font18,
						textAlign: 'justify',
					}}>
					{item.title}
				</Text>
				<Text
					style={{
						color: colors.black,
						fontFamily: fonts.family.regular,
						fontSize: fonts.size.font16,
						width: 180,
					}}>
					{item.subtitle}
				</Text>
			</View>
		</TouchableOpacity>
	);

	return (
		<Container loading={loading}>
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.positionImage}>
						<Image
							style={styles.userImage}
							source={{
								uri:
									'https://udnas3prd-prd.s3.amazonaws.com/icons/uDnaFullPurple.png',
							}}
						/>
					</View>
					<View style={styles.positionNameUser}>
						<ProfileItem keyItem=" " valueItem={" " + mappedUser.name?.split(" ", 1)} style={styles.item} />
					</View>
					<View style={styles.positionAction}>
						<TouchableOpacity
							onPress={() => navigate('Profile')}
							style={styles.borderActions}>
							<Image
								style={styles.actions}
								source={{
									uri:
										'https://udnas3prd-prd.s3.amazonaws.com/icons/perfilRoxo.png',
								}}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => {
								Linking.openURL(
									'https://api.whatsapp.com/send?phone=5527992688559&text=Queria uma ajuda. Poderia me dar um suporte?',
								);
							}}
							style={styles.borderActions}>
							<Image
								style={styles.actions}
								source={{
									uri:
										'https://udnas3prd-prd.s3.amazonaws.com/icons/appUrsulav6/icone+chat+mktp.png',
								}}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => navigate('Reports')}
							style={styles.borderActions}>
							<Image
								style={styles.actions}
								source={{
									uri:
										'https://udnas3prd-prd.s3.amazonaws.com/icons/appUrsulav6/laudo.png',
								}}
							/>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.viewScrollContainer}>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						<TouchableOpacity
							style={styles.touchableViewScroll}
							onPress={() =>
								navigate('SubCategoryStore', {
									value: '01',
									title: 'Genética Médica',
								})
							}>
							<View style={styles.ViewScroll}>
								<Image
									style={styles.imageViewScroll}
									source={{
										uri:
											'https://udnas3prd-prd.s3.amazonaws.com/icons/appUrsulav6/icone+genetica+medica.png',
									}}
								/>
								<Text
									style={{
										marginLeft: 10,
										marginRight: 10,
										marginTop: 5,
										color: '#744CB6',
										fontSize: 16,
										fontFamily: fonts.family.semiBold,
									}}>
									Genética Médica
								</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.touchableViewScroll}
							onPress={() =>
								navigate('SubCategoryStore', {
									value: '02',
									title: 'Alimentação & Saúde',
								})
							}>
							<View style={styles.ViewScroll}>
								<Image
									style={styles.imageViewScroll}
									source={{
										uri:
											'https://udnas3prd-prd.s3.amazonaws.com/icons/appUrsulav6/icone+alimentacao+e+saude.png',
									}}
								/>
								<Text
									style={{
										marginLeft: 10,
										marginRight: 10,
										marginTop: 5,
										color: '#744CB6',
										fontsize: 20,
										fontFamily: fonts.family.semiBold,
									}}>
									Alimentação & Saúde
								</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.touchableViewScroll}
							onPress={() =>
								navigate('SubCategoryStore', {
									value: '03',
									title: 'Esporte & Bem-estar',
								})
							}>
							<View style={styles.ViewScroll}>
								<Image
									style={styles.imageViewScroll}
									source={{
										uri:
											'https://udnas3prd-prd.s3.amazonaws.com/icons/appUrsulav6/i%CC%81cone+esporte+e+bem+estar.png',
									}}
								/>
								<Text
									style={{
										marginLeft: 10,
										marginRight: 10,
										marginTop: 5,
										color: '#744CB6',
										fontsize: 20,
										fontFamily: fonts.family.semiBold,
									}}>
									Esporte & Bem-estar
								</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.touchableViewScroll}
							onPress={() =>
								navigate('SubCategoryStore', {
									value: '04',
									title: 'Vínculo Genético',
								})
							}>
							<View style={styles.ViewScroll}>
								<Image
									style={styles.imageViewScroll}
									source={{
										uri:
											'https://udnas3prd-prd.s3.amazonaws.com/icons/appUrsulav6/vinculo+genetico.png',
									}}
								/>
								<Text
									style={{
										marginLeft: 10,
										marginRight: 10,
										marginTop: 5,
										color: '#744CB6',
										fontsize: 20,
										fontFamily: fonts.family.semiBold,
									}}>
									Vínculo Genético
								</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.touchableViewScroll}
							onPress={() =>
								navigate('SubCategoryStore', {
									value: '05',
									title: 'Outros produtos',
								})
							}>
							<View style={styles.ViewScroll}>
								<Image
									style={styles.imageViewScroll}
									source={{
										uri:
											'https://udnas3prd-prd.s3.amazonaws.com/icons/appUrsulav6/i%CC%81cone+outros+produtos.png',
									}}
								/>
								<Text
									style={{
										marginLeft: 10,
										marginRight: 10,
										marginTop: 5,
										color: '#744CB6',
										fontsize: 20,
										fontFamily: fonts.family.semiBold,
									}}>
									Outros produtos
								</Text>
							</View>
						</TouchableOpacity>
					</ScrollView>
				</View>

				<TouchableOpacity
					style={styles.ursula}
					onPress={() => navigate('HomeUrsula', {checkStatusDoenca: false, checkStatusGerais: true})}>
					<Image
						style={{
							height: 120,
							width: 350,
							resizeMode: 'contain',
						}}
						source={{
							uri:
								'https://udnas3prd-prd.s3.amazonaws.com/icons/card+app+avalia%C3%A7ao+udna%402x.png',
						}}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.marcketing}
					onPress={() => navigate('Paternity')}>
					<Image
						style={{
							height: 120,
							width: 350,
							resizeMode: 'contain',
						}}
						source={{
							uri:
								'https://udnas3prd-prd.s3.amazonaws.com/icons/appUrsulav6/marketing/CardPaternidade.png',
						}}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.viewMinhasAvaliacoes}
					onPress={() => navigate('Assessments')}>
					<View style={styles.meusPedidos}>
						<Text
							style={{
								marginLeft: 10,
								color: colors.purple,
								fontFamily: fonts.family.semiBold,
								fontSize: fonts.size.font16,
								width: '90%',
							}}>
							Minhas avaliações
						</Text>
						<Image
							style={{
								height: 40,
								width: 10,
								resizeMode: 'contain',
							}}
							source={{
								uri:
									'https://udnas3prd-prd.s3.amazonaws.com/icons/appUrsulav6/seta.png',
							}}
						/>
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.viewMeusPedidos}
					onPress={() => navigate('Shopping')}>
					<View style={styles.meusPedidos}>
						<Text
							style={{
								marginLeft: 10,
								color: colors.purple,
								fontFamily: fonts.family.semiBold,
								fontSize: fonts.size.font16,
								width: '90%',
							}}>
							Meus pedidos
						</Text>
						<Image
							style={{
								height: 40,
								width: 10,
								resizeMode: 'contain',
							}}
							source={{
								uri:
									'https://udnas3prd-prd.s3.amazonaws.com/icons/appUrsulav6/seta.png',
							}}
						/>
					</View>
				</TouchableOpacity>

				<Text style={styles.recommendedForYour}>Recomendados para você</Text>
				<View style={styles.viwRecommendedForYour}>
					<View>
						<FlatList
							data={recomended}
							renderItem={renderItem}
							keyExtractor={item => item.id}
						/>
					</View>
				</View>
			</View>
		</Container>
	);
};

StoreView.propTypes = {
	headerTitle: propTypes.string.isRequired,
	loading: propTypes.bool,
	categories: propTypes.arrayOf(
		propTypes.shape({
			id: propTypes.string.isRequired,
			name: propTypes.string.isRequired,
			exams: propTypes.arrayOf(
				propTypes.shape({
					id: propTypes.string,
					categoryId: propTypes.string,
					title: propTypes.string,
					description: propTypes.string,
					price: propTypes.string,
					icon: propTypes.node,
				}).isRequired,
			),
		}).isRequired,
	).isRequired,
	onChoiceItem: propTypes.func.isRequired,
	onSeeShopping: propTypes.func.isRequired,
};

StoreView.defaultProps = {
	loading: false,
};

export default StoreView;

/**{categories.map((category) => (
        <View key={category.id} style={styles.categoryView}>
          <Text style={styles.title}>{category.name}</Text>
         
        </View>
      ))} */
