import { useQuery } from "@apollo/react-hooks";
import { Storage } from "aws-amplify";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import caixa from "../../../../assets/images/caixa.png";
import carta from "../../../../assets/images/enviar.png";
import evento from "../../../../assets/images/evento.png";
import {
  GENETIC_TESTS,
  NUTRITIONAL_PROFILE,
  PROFESSIONAL_RECOMMENDATIONS,
} from "../../../../../../constants/reports";
import {
  getUserCustomized,
  listCategorysCustomized,
  listKitsCustomized,
} from "../../../../../../graphql/queriesCustomized";
import Container from "../../../../../../layouts/Container";
import { useUser } from "../../../../../../providers/UserProvider";
import { maskRemoveService } from "../../../../../../services/maskService";
import { mapStoreService } from "../../../../../../services/storeService";

const Results = () => {
  const { user, setUser } = useUser();
  const { navigate, goBack } = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [code, setCode] = useState("");
  const [codeValidation, setCodeValidation] = useState("");
  const [exam, setExam] = useState({});

  const { data: userData, loading: userLoading } = useQuery(getUserCustomized, {
    variables: { id: maskRemoveService(user.cpf) },
  });

  const { data: kitData } = useQuery(listKitsCustomized);

  const { data: categoriesData, loading: categoriesLoading } = useQuery(
    listCategorysCustomized
  );
  const [selectedType, setSelectedType] = useState(0);
  const [reports] = useState([
    {
      type: NUTRITIONAL_PROFILE,
      list: [],
    },
    {
      type: PROFESSIONAL_RECOMMENDATIONS,
      list: [],
    },
    {
      type: GENETIC_TESTS,
      list: [],
    },
  ]);
  const [loading, setLoading] = useState(true);
  const username = maskRemoveService(user.cpf);

  const validateCode = () => {
    if (kitData) {
      const codes = kitData.listKits.items;
      const validCodes = codes.map((elt) => {
        if (elt.status !== "ACTIVATE") {
          return elt.id;
        }
        return "";
      });
      if (validCodes.includes(code) && categoriesData) {
        const selectedCode = codes.filter((elt) => elt.id === code)[0];
        const selectedCategory = mapStoreService(categoriesData, user).filter(
          (elt) => elt.id === selectedCode.categoryId
        )[0];
        const selectedExam = selectedCategory.exams.filter(
          (elt) => elt.id === selectedCode.examId
        )[0];
        setExam({
          ...selectedExam,
          price: (Number(selectedExam.price) - 49.0).toFixed(2).toString(),
        });
        setCodeValidation("valid");
        return;
      }
      setCodeValidation("invalid");
    }
  };

  const kitActivation = () => {
    switch (codeValidation) {
      case "valid":
        setIsModalVisible(false);
        setCode("");
        setCodeValidation("");
        navigate("ExamInfo", { exam, codeId: code });
        break;

      case "invalid":
        setIsModalVisible(false);
        setCode("");
        setCodeValidation("");
        break;

      default:
        validateCode();
        break;
    }
  };

  const sugestions = [
    {
      title: "Fale conosco",
      icon: carta,
    },
    {
      title: "Ativar Kit",
      icon: caixa,
      onPress: () => setIsModalVisible(true),
    },
    {
      title: "Agendamento",
      icon: evento,
      onPress: () => navigate("Consultation"),
    },
  ];

  const goToReport = async (report) => {
    setLoading(true);
    try {
      const url = await Storage.get(
        `Reports/${username}/${reports[selectedType].type}/${report.name}`
      );
      setLoading(false);
      navigate("ReportInfo", { source: url });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Container headerTitle="Laudos" loading={userLoading || categoriesLoading}>
      <View>
        <Text>laudos</Text>
      </View>
    </Container>
  );
};

export default Results;
