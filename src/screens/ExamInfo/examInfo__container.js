import { useMutation } from "@apollo/react-hooks";
import React, { useState } from "react";
import { Keyboard } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { getExamsCustomized } from "../../graphql/queriesCustomized";
import { updateKitCustomized } from "../../graphql/mutationsCustomized";
import useModalMessage from "../../hooks/useModalMessage";
import { useUser } from "../../providers/UserProvider";
import { maskRemoveService } from "../../services/maskService";
import { mapShoppingService } from "../../services/shoppingService";
import {
  buyExamBilletService,
  buyExamCreditCardService,
} from "../../services/storeService";
import { useQuery } from "@apollo/react-hooks";
import styles from "./styles";

import ExamInfoView from "./examInfo__view";

const _ = require("lodash");

const ExamInfoContainer = () => {
  const { goBack, getParam, navigate } = useNavigation();
  const { user } = useUser();
  const exam = getParam("exam");
  const number = getParam("number");
  let value = exam.price;
  const codeId = getParam("codeId");
  const { showModalMessage } = useModalMessage();
  const [style, setStyle] = useState("");
  const [shouldBuyKit, setShouldBuyKit] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(0);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({});
  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    valid: false,
    installments: 1,
  });

  const [updateKit] = useMutation(updateKitCustomized);

  const navigateGoBack = () => {
    Keyboard.dismiss();
    setTimeout(() => {
      goBack();
    }, 50);
  };

  const activateCode = async () => {
    await updateKit({
      variables: {
        input: {
          id: codeId,
          status: "ACTIVATE",
          owner: maskRemoveService(user.cpf),
        },
      },
    });
  };

  if (number) {
    value = number.toString();
  }

  const buyBilletOrCard = async () => {
    setLoading(true);
    if (selectedPayment === 0) {
      let exams = {
        categoryId: exam.categoryId,
        description: exam.description,
        id: exam.id,
        price: value,
        subtitle: exam.subtitle,
        title: exam.title,
        url: exam.price,
      };
      const [error, res] = await buyExamBilletService(user, exams);

      if (error) {
        console.tron.log(error);
        setLoading(false);
        showModalMessage({
          title: "Ops!",
          description: "Tivemos um problema ao realizar a compra no boleto",
        });
      } else {
        setLoading(false);
        navigate("Billet", { billet: res.data.buyExamBillet });
      }
      return;
    }
    if (number === "undefined") {
      value = exam.price;
    } else {
      value = number;
    }
    let exams = {
      categoryId: exam.categoryId,
      description: exam.description,
      id: exam.id,
      price: exam.price,
      subtitle: exam.subtitle,
      title: exam.title,
      url: exam.price,
    };
    const [error, res] = await buyExamCreditCardService(user, exams, card);

    if (
      error ||
      res.data.buyExamCreditCard === null ||
      res.data.buyExamCreditCard.includes("Error")
    ) {
      setLoading(false);
      setCard({
        ...card,
        valid: false,
      });
      showModalMessage({
        title: "Ops!",
        description: "Tivemos um problema ao realizar a compra no cartão",
      });
      console.log("=======");
      console.log(res);
      console.log(error);
      console.log("=======");
      console.log(exams);
    } else {
      if (codeId) {
        await activateCode();
      }
      console.log(res);
      setLoading(false);

      /* This example adds a new item to the Music table. */
      navigate("Success");
    }
  };

  const buyExam = async () => {
    if (shouldBuyKit) {
      if (user.address) {
        Keyboard.dismiss();
        setTimeout(async () => {
          await buyBilletOrCard();
        }, 500);
      } else {
        showModalMessage({
          title: "Endereço não cadastrado",
          description:
            "Para efetuar uma compra precisamos do seu endereço cadastrado. Gostaria de cadastrar agora?",
          buttonText: "Sim",
          buttonTextSecond: "Não",
          onPress: async () => {
            // if (codeId) {
            //   await activateCode();
            // }
            navigate("EditAddress");
            setStyle(buttonLK2);
          },
        });
      }
    } else {
      setShouldBuyKit(true);
    }
  };
  return (
    <ExamInfoView
      loading={loading}
      exam={exam}
      selectedPayment={selectedPayment}
      shouldBuyKit={shouldBuyKit}
      card={card}
      style={style}
      onPress={() => setShouldShow(!shouldShow)}
      onPressBack={navigateGoBack}
      onPressChangePayment={setSelectedPayment}
      onChangeCreditCard={(value) =>
        setCard({
          ...card,
          ...value,
        })
      }
      onPressBuy={buyExam}
    />
  );
};

export default ExamInfoContainer;
