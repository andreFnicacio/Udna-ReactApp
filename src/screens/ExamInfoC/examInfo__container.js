import { useMutation } from "@apollo/react-hooks";
import React, { useState } from "react";
import { Keyboard } from "react-native";
import { useNavigation } from "react-navigation-hooks";

import { updateKitCustomized } from "../../graphql/mutationsCustomized";
import useModalMessage from "../../hooks/useModalMessage";
import { useUser } from "../../providers/UserProvider";
import { maskRemoveService } from "../../services/maskService";
import {
  buyExamBilletService,
  buyExamCreditCardService,
} from "../../services/storeService";

import ExamInfoView from "./examInfo__view";

const ExamInfoContainer = () => {
  const { goBack, getParam, navigate } = useNavigation();
  const { user } = useUser();
  const exam = getParam("exam");
  const codeId = getParam("codeId");
  const { showModalMessage } = useModalMessage();

  const [shouldBuyKit, setShouldBuyKit] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(0);
  const [loading, setLoading] = useState(false);
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

  const buyBilletOrCard = async () => {
    setLoading(true);
    if (selectedPayment === 0) {
      console.log(exam);
      const [error, res] = await buyExamBilletService(user, exam);

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
    const [error, res] = await buyExamCreditCardService(user, exam, card);

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
      console.log(res);
      console.log(error);
    } else {
      if (codeId) {
        await activateCode();
      }
      console.log(res);
      setLoading(false);
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
