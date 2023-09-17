import { useMutation } from '@apollo/react-hooks';
import LottieView from 'lottie-react-native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from 'react-navigation-hooks';

import DNALoading from '../../assets/lottie/DNALoading.json';
import ButtonRound from '../../components/ButtonRound';
import { updateUserCustomized } from '../../graphql/mutationsCustomized';
import useModalMessage from '../../hooks/useModalMessage';
import Container from '../../layouts/Container';
import { useUser } from '../../providers/UserProvider';
import { maskRemoveService } from '../../services/maskService';

import styles from './styles';


const NutritionalProfile = () => {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(true);
  const nutritrionalProfileURL = 'https://docs.google.com/forms/d/e/1FAIpQLScI8TzEunna-FFSc77k-weWxG9YEjnAGg6U4dVyr5CveHiADA/viewform';
  const { navigate, goBack } = useNavigation();
  const { showModalMessage } = useModalMessage();

  const [editUser] = useMutation(updateUserCustomized);

  const finishAvaliation = async () => {
    setLoading(true);
    const body = {
      input: {
        id: maskRemoveService(user.cpf),
        nutritionalProfile: true,
      },
    };

    try {
      const res = await editUser({ variables: body });
      const editData = res.data.updateUser;
      setUser({
        ...user,
        nutritionalProfile: editData.nutritionalProfile,
      });
      setLoading(false);
      navigate('Home');
    } catch (error) {
      setLoading(false);
      showModalMessage({
        title: 'Ops!',
        description: 'Tivemos um problema ao enviar seu perfil, tente novamente.',
      });
    }
  };

  return (
    <Container
      headerTitle="Avaliação"
      onPressBack={() => goBack()}
    >
      {loading && (
        <View style={styles.lottieView}>
          <LottieView
            source={DNALoading}
            autoPlay
            loop
            style={styles.lottie}
          />
        </View>
      )}
      <WebView
        source={{ uri: nutritrionalProfileURL }}
        showsVerticalScrollIndicator={false}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        style={styles.container}
        keyboardDisplayRequiresUserAction={false}
      />
      <ButtonRound
        text="Preenchido"
        onPress={finishAvaliation}
        style={styles.button}
      />
    </Container>
  );
};

export default NutritionalProfile;
