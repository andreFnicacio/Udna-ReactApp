import React from "react";
import { Text, View } from "react-native";
import CardInfo from "../../components/Cards/CardInfo";
import Container from "../../layouts/Container/container";
import Style from "./styles";
import { useNavigation } from "react-navigation-hooks";

const TipoFatorRiscoList = () => {
  const { navigate, getParam } = useNavigation();
  const parametroUser = "user"+getParam("parametroUser");
  
  const data = [
    {
      id: 1,
      title: "Saúde",
      categoria: "saude",
      description:
        "Fatores de risco e doenças que estão relacionados à sua saúde em geral.",
    },
    {
      id: 2,
      title: "Alimentação",
      categoria: "alimentacao",
      description:
        "Fatores de risco que podem ser ocasionados por maus hábitos alimentares.",
    },
    {
      id: 3,
      title: "Medicamentos",
      categoria: "medicamentos",
      description:
        "O uso de alguns medicamentos pode ser fator de risco para algumas doenças.",
    },
    {
      id: 4,
      title: "Hábitos",
      categoria: "habitos",
      description:
        "Seus hábitos também são importantes para indicar fatores de risco.",
    },
    {
      id: 5,
      title: "Características pessoais",
      categoria: "caracteristicasPessoais",
      description:
        "Características pessoais também podem ser fatores de risco para algumas doenças. ",
    },
    {
      id: 5,
      title: "Condições preexistentes",
      categoria: "condicoesPreexistentes",
      description:
        "Aqui você saberá se alguma condição preexistente pode ser um fator de risco.",
    },
  ];
  return (
    <Container onPressBack>
      <View style={Style.container}>
        <View style={Style.header}>
          <Text style={Style.title}>Conheça sua avaliação</Text>
        </View>
        <View style={Style.nextSteps}>
          <Text style={Style.descriptionNextSteps}>
          Que bom que você chegou até aqui!! Essa avaliação revela um panorama sobre seus hábitos, sua alimentação e saúde em geral. Através das suas respostas ao nosso questionário, identificamos fatores de risco, ou seja, situações ou condições que aumentam a probabilidade de ocorrência de uma doença, agravo ou condição de saúde. 
          </Text>
          <Text style={Style.descriptionNextSteps}>
          Clique em cada categoria e saiba mais sobre a relação entre os fatores de risco e as doenças avaliadas.
          </Text>
          <Text style={Style.titleNextSteps}>
            Essa avaliação revela um panorama sobre sua saúde e qualidade de
            vida.
          </Text>
        </View>
        <View style={Style.recommendations}>
          {data.map((item, index) => {
            return (
              <CardInfo
                key={index}
                onPress={() => {
                  navigate("FatorRiscoList", {
                    tipofatorRisco: item.categoria,
                    title: item.title,
                    parametroUser: parametroUser,
                  });
                }}
                circleText={`${index + 1}`}
                title={item.title}
                description={item.description}
              />
            );
          })}
          <View>
            <View style={Style.info}>
              <Text style={Style.descutionDuvida}>
                Esta é uma análise exclusivamente de fatores que podem indicar o
                risco para o desenvolvimento de algumas doenças/condições e não
                substitui o atendimento ou diagnóstico de um profissional
                especializado.
              </Text>
              <Text style={Style.descutionDuvida}>
                Além disso, você pode ter alguma condição ou doença que não está
                presente nesta avaliação.{" "}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default TipoFatorRiscoList;
