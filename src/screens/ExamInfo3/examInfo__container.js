import { useMutation } from "@apollo/react-hooks";
import React, { useState, useEffect } from "react";
import { Keyboard } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { updateKitCustomized } from "../../graphql/mutationsCustomized";
import useModalMessage from "../../hooks/useModalMessage";
import { useUser } from "../../providers/UserProvider";
import { maskRemoveService } from "../../services/maskService";
import { mapUserService } from '../../services/userService';
import { useQuery } from '@apollo/react-hooks';
import { getUserCustomized } from '../../graphql/queriesCustomized';
import {
  buyExamBilletService,
  buyExamCreditCardService,
} from "../../services/storeService";
import ExamInfoView from "./examInfo__view";

const ExamInfoContainer = () => {
  const { goBack, getParam, navigate } = useNavigation();
  const [mappedUser, setMappedUser] = useState({});
  const { user } = useUser();
  const { data: userData, loading: userLoading } = useQuery(getUserCustomized, {
		variables: { id: maskRemoveService(user.cpf) },
	});
  const exam = getParam("exam");
  const number = getParam("number");
  const codeId = getParam("codeId");
  const infoPaternity = getParam("infoPaternity");
  const { showModalMessage } = useModalMessage();
  let value = exam.price;
  const [shouldBuyKit, setShouldBuyKit] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(0);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
		if (userData && !userLoading) {
			setMappedUser(mapUserService(userData?.getUser));
      
		}
	}, [userData, userLoading]);


  console.warn(mappedUser.address);
  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    valid: false,
    installments: 1,
  });

  let aux;
  const random = () => {
    aux = Math.floor(Math.random() * 10000 + 1);
    console.log(aux);
  };
  random();

  let aux2 = aux.toString();

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
        price: value+"00",
        subtitle: exam.subtitle,
        title: exam.title,
        url: exam.price,
      };
      const [error, res] = await buyExamBilletService(mappedUser, exams);
      console.warn(res);

      if (error) {
        console.tron.log(error);
        setLoading(false);
        showModalMessage({
          title: "Ops!",
          description: "Tivemos um problema ao realizar a compra no boleto",
        });
      } 

      setLoading(false);
      navigate("Billet", {
        billet: res.data.buyExamBillet,
      });
      return;
    }
    let exams = {
      categoryId: exam.categoryId,
      description: exam.description,
      id: exam.id,
      price: value,
      subtitle: exam.subtitle,
      title: exam.title,
      url: exam.price,
    };
    const [error, res] = await buyExamCreditCardService(mappedUser, exams, card);

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
      console.warn(res);
      console.warn(error);
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
      if (mappedUser.address) {
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
