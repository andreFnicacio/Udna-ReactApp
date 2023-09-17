import React from 'react';
import { Text, View, TouchableOpacity, Image, Linking, Button, Switch, } from 'react-native';
import Container from '../../layouts/Container/container';
import styles from './styles';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { useNavigation } from "react-navigation-hooks";



const Welcome = () => {
  const { navigate } = useNavigation();

  return (
    <Container headerTitle="Úrsula">
      <View
        style={styles.container}
      >
        <View style={styles.switchView}>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>

            <Image
              style={{ height: 400, width: 400, resizeMode: 'contain', top: -30 }}
              source={{
                uri:
                  "https://udnas3prd-prd.s3.amazonaws.com/icons/appUrsulav6/welcome.png",
              }}
            />

          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', top: -50 }}>
            <View style={{ marginTop: -10, marginBottom: 10 }}>
              <Text style={{ color: colors.purple1, fontSize: fonts.size.font18, fontFamily: fonts.family.semiBold, marginLeft: -160 }}>Olá, eu sou a Úrsula!</Text>
            </View>

            <Text style={{ marginRight: 40,color: colors.gray6, fontSize: fonts.size.font18, fontFamily: fonts.family.regular }}>
              {`Através da minha avaliação, conheça os fatores de risco que você possui e que podem se transformar em possíveis doenças. \nVamos começar?`}

            </Text>
            <TouchableOpacity onPress={() => navigate('HomeUrsula', {checkStatusDoenca: false, checkStatusGerais: false})} style={{ backgroundColor: colors.purple, borderRadius: 10, marginTop: 20, right: 95 }}>
              <Text style={{ color: colors.white, marginTop: 10, marginBottom: 10, marginLeft: 15, marginRight: 15 }}>Vamos começar</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>

    </Container>
  );
};

export default Welcome;

