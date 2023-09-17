import LottieView from 'lottie-react-native';
import propTypes from 'prop-types';
import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

import DNALoading from '../../assets/lottie/DNALoading.json';
import Header from '../../components/Header/index2';
import StatusBar2 from '../../components/StatusBar/index2';

import styles2 from './styles2';

const Container2 = ({
	statusBarColor,
	withoutHeader,
	headerTitle,
	headerTextButton,
	onPressBack,
	onPressRight,
	children,
	loading,
	scrollEnabled,
}) => (
	<>
		<StatusBar2 color={statusBarColor} />
		<SafeAreaView style={styles2.container}>
			{!withoutHeader && (
				<Header
					title={headerTitle}
					textButton={headerTextButton}
					isToGoBack={onPressBack}
					onPressRight={onPressRight}
				/>
			)}
			<ScrollView
				scrollEnabled={scrollEnabled}
				keyboardShouldPersistTaps="handled"
				showsVerticalScrollIndicator={false}
				style={styles2.subContainerView}
				contentContainerStyle={styles2.subContainerContent}>
				{!loading ? (
					children
				) : (
					<View style={styles2.lottieView}>
						<LottieView
							source={DNALoading}
							autoPlay
							loop
							style={styles2.lottie}
						/>
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	</>
);

Container2.propTypes = {
	statusBarColor: propTypes.string,
	withoutHeader: propTypes.bool,
	headerTitle: propTypes.string,
	headerTextButton: propTypes.string,
	onPressBack: propTypes.func,
	onPressRight: propTypes.func,
	children: propTypes.node,
	loading: propTypes.bool,
	scrollEnabled: propTypes.bool,
};

Container2.defaultProps = {
	statusBarColor: 'purple',
	withoutHeader: false,
	headerTitle: '',
	headerTextButton: '',
	onPressBack: null,
	onPressRight: null,
	children: null,
	loading: false,
	scrollEnabled: true,
};

export default Container2;
