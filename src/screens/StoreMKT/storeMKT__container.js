import propTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import React, {useState} from 'react';
import { useNavigation } from 'react-navigation-hooks';

import { listCategorysCustomized } from '../../graphql/queriesCustomized';
import { mapStoreService } from '../../services/storeService';

import StoreView from './storeMKT__view';


const StoreContainer = (
  onPressBack
) => {
  const { navigate, state , getParam} = useNavigation();

  const { data: categoriesData, loading: categoriesLoading } = useQuery(listCategorysCustomized);

  const goExamInfo = (exam) => {
    navigate('ExamInfo', { exam });
  };

  const goShopping = () => {
    navigate('Shopping');
  };

  const [codeID, setCode] = useState(""); 
  
  const title = getParam('categoryId');

  function callToData(onChoiceItem){
    let awsConfig2 = {
      "region": "us-east-1",
      "accessKeyId": "AKIA564XY3QK6GKEQWUS", "secretAccessKey": "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",
    };

    AWS.config.update(awsConfig2);
    var params = {
      TableName : 'SubExam-esVix2021marc-dev',
      FilterExpression : 'categoryId = :this_category',
      ExpressionAttributeValues : {':this_category' : onChoiceItem}
    };
    
    var documentClient = new AWS.DynamoDB.DocumentClient();
    
    documentClient.scan(params, function(err, data) {
       if (err){
         console.log(err)
       }else{
         setCode(data.Items[0].categoryId);
       }
    });
  }
  console.log(codeID);
  callToData(title);
  return (
    <>
      {categoriesData && (
      <StoreView
        headerTitle={state.params?.storeTitle || 'Exames'}
        loading={categoriesLoading}
        categories={mapStoreService(categoriesData, state.params?.storeType || 2)}
        onChoiceItem={codeID}
        onPressBack={onPressBack}
      />
      )}
    </>
  );
};

StoreContainer.propTypes = {
  onPressBack: propTypes.func.isRequired,
  };

export default StoreContainer;
