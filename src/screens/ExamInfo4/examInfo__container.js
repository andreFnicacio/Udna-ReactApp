import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { getExamsCustomized } from '../../graphql/queriesCustomized';
import { updateKitCustomized } from '../../graphql/mutationsCustomized';
import useModalMessage from '../../hooks/useModalMessage';
import { useUser } from '../../providers/UserProvider';
import { maskRemoveService } from '../../services/maskService';
import { mapShoppingService } from '../../services/shoppingService';
import { buyExamBilletService, buyExamCreditCardService } from '../../services/storeService';
import { useQuery } from '@apollo/react-hooks';


import ExamInfoView from './examInfo__view';

const _ = require('lodash');

const ExamInfoContainer = () => {
  const { goBack, getParam, navigate } = useNavigation();
  const { user } = useUser();
  const exam = getParam('exam');
  const number = getParam('number');
  const codeId = getParam('codeId');
  const { showModalMessage } = useModalMessage();

  const [shouldBuyKit, setShouldBuyKit] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(0);
  const [loading, setLoading] = useState(false);
  let value = exam.price;
  const [card, setCard] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    valid: false,
    installments: 1,
  });

  let CPF = user.cpf;
  let cleanCPF = CPF.replace('.', '');
  let cleanCPF2 = cleanCPF.replace('.', '');
  let cleanCPF3 = cleanCPF2.replace('-', '');


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
          status: 'ACTIVATE',
          owner: maskRemoveService(user.cpf),
        },
      },
    });
  };

  const getDisabled = () => {
    if (selectedPayment === 0) {
      return false;
    }
    if (card.valid) {
      return false;
    }
    return true;
  };

  const getDiscount = (id) => {
    


  };

  if(number){
    value = number.toString();
  }

  const buyBilletOrCard = async () => {
    setLoading(true);
    if (selectedPayment === 0) {  
      let exams = {categoryId: exam.categoryId, description: exam.description, id: exam.id, price: value, subtitle: exam.subtitle, title: exam.title, url: exam.url} 
      const [error, res] = await buyExamBilletService(user, exams);

      if (error) {
        console.log(error);
        setLoading(false);
      } else {       
        setLoading(false);      
        navigate('Billet', { billet: res.data.buyExamBillet});
      }
      return;
    }
    let exams = {categoryId: exam.categoryId, description: exam.description, id: exam.id, price: value, subtitle: exam.subtitle, title: exam.title, url: exam.url}  
    const [error, res] = await buyExamCreditCardService(user, exams, card);

    if (error || res.data.buyExamCreditCard === null || res.data.buyExamCreditCard.includes('Error')) {
      setLoading(false);
      setCard({
        ...card,
        valid: false,
      });
      showModalMessage({
        title: 'Ops!',
        description: 'Tivemos um problema ao realizar a compra no cartão',
      });
      console.log(res);
      console.log(error);
    } else {
      if (codeId) {
        await activateCode();
      }
      console.log(res);
      setLoading(false);
      let awsConfig2 = {
        region: "us-east-1",
        accessKeyId: "AKIA564XY3QK6GKEQWUS",
        secretAccessKey: "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",
      };
      AWS.config.update(awsConfig2);
    
      let dynamodb = new AWS.DynamoDB();

      let date = new Date().getDate();
      let month = new Date().getMonth() + 1;
      let year = new Date().getFullYear();
      const params = {
        "Item": {
         "id": {
           S: aux2
          }, 
          "qtdFilhos": {
            S: "1"
           }, 
           "name": {
             S: items.name
            }, 
           "qtdFilhote": {
            S: "Nothinfg"
           },          
         "maeParticip": {
           S: "Nothinfg"
          },
          "mtrColetado": {
           S: "Nothinfg"
          },
          "kitExtra": {
           S: "Nothinfg"
          },    
          "dispJudiciais": {
           S: "Nothinfg"
          },
          "userID":{
            S: cleanCPF3
          },
          "price":{
            S: exam.price
          },
          "date":{
            S: date + '-' + month + '-' + year
          }
        }, 
        ReturnConsumedCapacity: "TOTAL", 
        TableName: "InfoPaternity-exVix2021marc-dev"
       };
       dynamodb.putItem(params, function(err, data) {
         if (err) console.log(err, err.stack); // an error occurred
         else     console.log(data);           // successful response
       });
      /* This example adds a new item to the Music table. */
      navigate('Success');
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
          title: 'Endereço não cadastrado',
          description: 'Para efetuar uma compra precisamos do seu endereço cadastrado. Gostaria de cadastrar agora?',
          buttonText: 'Sim',
          buttonTextSecond: 'Não',
          onPress: async () => {
            // if (codeId) {
            //   await activateCode();
            // }
            navigate('EditAddress');
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
      onChangeCreditCard={(value) => setCard({
        ...card,
        ...value,
      })}
      onPressBuy={buyExam}
    />
  );
};

export default ExamInfoContainer;