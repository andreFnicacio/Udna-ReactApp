import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import Container from "../../layouts/Container/container";
import Style from "./styles";

const PreAnalisys = () => {
  const {navigate} = useNavigation();


  return (
    <Container
      headerTitle=""
      headerTextButton="Fale conosco"
      onPressBack
    >
      <Text style={Style.title}>Pré-Análise</Text>
      <View style={Style.nextSteps}>
        <View>
          <Text style={Style.titleNextSteps}>Próximos passos</Text>
        </View>
        <View>
          <Text style={Style.descriptionNextSteps}>
            Logo abaixo está o resultado da sua pré-análise, com o teste e os
            serviços mais indicados para o seu caso. Após escolher e comprar a
            opção ideal, enviaremos um kit de autocoleta para o seu endereço.
            Você recebe o kit, faz a coleta da saliva dos participantes e envia
            o material para o nosso laboratório parceiro, onde a análise de
            vínculo genético será realizada. Simples, seguro e indolor. Em caso
            de dúvidas, entre em contato com nossa equipe de suporte.
          </Text>
        </View>
      </View>
      <View style={Style.recommendations}>
        <View>
          <Text style={Style.titleNextSteps}>
            Aqui está o que você precisa:
          </Text>
        </View>
        <View style={Style.products}>
          <View style={Style.subProducts}>
            <View style={Style.backProducts}>
              <Text style={Style.titleProduct}>Saúde</Text>
              <View style={Style.infoProducts}>
                <View style={Style.positionProducts}>
                  <Text style={Style.subPositionProducts}> 1 </Text>
                </View>
                <View style={Style.positionDescription}>
                  <Text style={Style.description}>Fatores de risco e doenças que estão relacionados à sua saúde em geral.</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigate("FatorRiscoList", {
                    tipofatorRisco: "saude",
                    title: "Saúde",
                  });
                }}
                style={Style.positionButtonPay}
              >
                <Text style={Style.textButtonPay}>Acessar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Style.products}>
          <View style={Style.subProducts}>
            <View style={Style.backProducts}>
              <Text style={Style.titleProduct}>Alimentação</Text>
              <View style={Style.infoProducts}>
                <View style={Style.positionProducts}>
                  <Text style={Style.subPositionProducts}> 2 </Text>
                </View>
                <View style={Style.positionDescription}>
                  <Text style={Style.description}>Fatores de risco que podem ser ocasionados por maus hábitos alimentares.</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigate("FatorRiscoList", {
                    tipofatorRisco: "alimentacao",
                    title: "Alimentação",
                  });
                }}
                style={Style.positionButtonPay}
              >
                <Text style={Style.textButtonPay}>Acessar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Style.products}>
          <View style={Style.subProducts}>
            <View style={Style.backProducts}>
              <Text style={Style.titleProduct}>Medicamentos</Text>
              <View style={Style.infoProducts}>
                <View style={Style.positionProducts}>
                  <Text style={Style.subPositionProducts}> 3 </Text>
                </View>
                <View style={Style.positionDescription}>
                  <Text style={Style.description}>O uso de alguns medicamentos pode ser fator de risco para algumas doenças.</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigate("FatorRiscoList", {
                    tipofatorRisco: "medicamentos",
                    title: "Medicamentos",
                  });
                }}
                style={Style.positionButtonPay}
              >
                <Text style={Style.textButtonPay}>Acessar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Style.products}>
          <View style={Style.subProducts}>
            <View style={Style.backProducts}>
              <Text style={Style.titleProduct}>Hábitos</Text>
              <View style={Style.infoProducts}>
                <View style={Style.positionProducts}>
                  <Text style={Style.subPositionProducts}> 4 </Text>
                </View>
                <View style={Style.positionDescription}>
                  <Text style={Style.description}>Seus hábitos também são importantes para indicar fatores de risco.</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigate("FatorRiscoList", {
                    tipofatorRisco: "habitos",
                    title: "Hábitos",
                  });
                }}
                style={Style.positionButtonPay}
              >
                <Text style={Style.textButtonPay}>Acessar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Style.products}>
          <View style={Style.subProducts}>
            <View style={Style.backProducts}>
              <Text style={Style.titleProduct}>Características pessoais</Text>
              <View style={Style.infoProducts}>
                <View style={Style.positionProducts}>
                  <Text style={Style.subPositionProducts}> 5 </Text>
                </View>
                <View style={Style.positionDescription}>
                  <Text style={Style.description}>Características pessoais também podem ser fatores de risco para algumas doenças.</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigate("FatorRiscoList", {
                    tipofatorRisco: "caracteristicasPessoais",
                    title: "Características pessoais",
                  });
                }}
                style={Style.positionButtonPay}
              >
                <Text style={Style.textButtonPay}>Acessar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Style.products}>
          <View style={Style.subProducts}>
            <View style={Style.backProducts}>
              <Text style={Style.titleProduct}>Características pessoais</Text>
              <View style={Style.infoProducts}>
                <View style={Style.positionProducts}>
                  <Text style={Style.subPositionProducts}> 6 </Text>
                </View>
                <View style={Style.positionDescription}>
                  <Text style={Style.description}>Características pessoais também podem ser fatores de risco para algumas doenças.</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigate("FatorRiscoList", {
                    tipofatorRisco: "condicoesPreexistentes",
                    title: "Condições preexistentes",
                  });
                }}
                style={Style.positionButtonPay}
              >
                <Text style={Style.textButtonPay}>Acessar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default PreAnalisys;
