import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import DNALoading from '../../assets/lottie/DNALoading.json';
import { useUser } from '../../providers/UserProvider';
import { GetCurrentSessionService } from '../../services/userService';

import styles from './styles';

const AuthOrHome = () => {
  const { setUser } = useUser();
  const { navigate } = useNavigation();

  const verifySession = async () => {
    const [error, res] = await GetCurrentSessionService();

    if (error) {
      navigate('AuthOrOnboard');
    } else {
      setUser({ cpf: res.idToken.payload['cognito:username'] });
      navigate('Home');
    }
  };

  useEffect(() => {
    verifySession();
  });

  return (
    <View style={styles.lottieView}>
      <LottieView
        source={DNALoading}
        autoPlay
        loop
        style={styles.lottie}
      />
    </View>
  );
};

export default AuthOrHome;
