import { useQuery } from '@apollo/react-hooks';
import React, { useState, useEffect } from 'react';
import { useNavigation } from 'react-navigation-hooks';


import { getExamsCustomized } from '../../graphql/queriesCustomized';
import { useUser } from '../../providers/UserProvider';
import { maskRemoveService } from '../../services/maskService';
import { mapShoppingService } from '../../services/shoppingService';

import ShoppingView from './shopping__view';

import pagarme from './pagarme'

import { PAYMENTS, STATUS } from '../../constants/shopping';

import moment from 'moment';
export let examData = [];

const ShoppingContainer = () => {
  const { navigate, goBack } = useNavigation();
  const [examsData, setExamsData] = useState([])
  const { user } = useUser();
  const { loading: examsLoading } = useQuery(getExamsCustomized, {
    variables:
    {
      username:
        maskRemoveService(user.cpf),
    },
  });

  const navigateGoBack = () => {
    goBack();
  };

  const goShoppingInfo = (item) => {
    navigate('ShoppingInfo', { ShoppingItem: item });
  };

  function meuPedidos(){
    pagarme.client.connect({ api_key: 'ak_live_AtbUQ7qSpyrFNR5ziHLYkxOQZ7txoi' })
    .then(client => client.transactions.all({ customer: { external_id: maskRemoveService(user.cpf) } }))
    .then(transaction => {
      console.warn(transaction[0].date_created)
      for(let i = 0; i < transaction.length; i++){
        examData.push(
          {
            id: transaction[i].id,
            examId: transaction[i].id,
            name: "Teste Genético",
            price: transaction[i].amount,
            payment: transaction[i].payment_method,
            status: {
              ...STATUS[transaction[i].status]
            },
            date: moment(transaction[i].date_created).format('DD/MM/YYYY'),
          }          
        )
      }
    })   

  }

  useEffect(() => {
    meuPedidos()
    console.warn(examData);    
  });

  return (
    <ShoppingView
      loading={examsLoading}
      data={examData && !examsLoading ? examData : []}
      onPressBack={navigateGoBack}
      onPress={goShoppingInfo}
    />
  );
};

export default ShoppingContainer;