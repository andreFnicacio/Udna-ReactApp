

import LottieView from 'lottie-react-native';
import propTypes from 'prop-types';
import React, { useCallback } from 'react';
import { View, SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import DNALoading from '../../assets/lottie/DNALoading.json';
import Header from '../../components/Header';
import StatusBar from '../../components/StatusBar';
import styles from './styles';
import { useNavigation } from 'react-navigation-hooks';
import { time } from '../../utils/time';
import { useScroll } from '../../providers/ScrollProvider';

const Container = ({
	statusBarColor,
	withoutHeader,
	headerTitle,
	headerTextButton,
	onPressBack,
	onPressRight,
	children,
	loading,
	scrollEnabled,
}) => {
	const { navigate } = useNavigation();

	const { scrollViewRef } = useScroll();

	const [refreshing, setRefreshing] = React.useState(false);

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		time.wait(2000).then(() => {
			setRefreshing(false);
			navigate('Home');
		});
	}, [refreshing]);

	return (
		<>
			<StatusBar color={statusBarColor} />
			<SafeAreaView style={styles.container}>
				{!withoutHeader && (
					<Header
						title={headerTitle}
						textButton={headerTextButton}
						isToGoBack={onPressBack}
						onPressRight={onPressRight}
					/>
				)}
				<ScrollView
					ref={scrollViewRef}
					scrollEnabled={scrollEnabled}
					keyboardShouldPersistTaps="handled"
					showsVerticalScrollIndicator={false}
					style={styles.subContainerView}
					contentContainerStyle={styles.subContainerContent}
					refreshControl={
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
					}>
					{loading ? (
						<View style={styles.lottieView}>
							<LottieView
								source={DNALoading}
								autoPlay
								loop
								style={styles.lottie}
							/>
						</View>
					) : (
						children
					)}
				</ScrollView>
			</SafeAreaView>
		</>
	);
};

Container.propTypes = {
	statusBarColor: propTypes.string,
	withoutHeader: propTypes.bool,
	headerTitle: propTypes.string,
	headerTextButton: propTypes.string,
	onPressBack: propTypes.bool,
	onPressRight: propTypes.func,
	children: propTypes.node,
	loading: propTypes.bool,
	scrollEnabled: propTypes.bool,
};

Container.defaultProps = {
	statusBarColor: 'bg',
	withoutHeader: false,
	headerTitle: '',
	headerTextButton: '',
	onPressBack: null,
	onPressRight: null,
	children: null,
	loading: false,
	scrollEnabled: true,
};

export default Container;