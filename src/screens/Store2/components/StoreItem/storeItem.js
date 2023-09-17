import LottieView from 'lottie-react-native';
import propTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

import DNALoading from '../../../../assets/lottie/DNALoading.json';

import styles from './styles';
import { ConnectContactLens } from 'aws-sdk';

const AWS = require('aws-sdk');

const _ = require('lodash');

let categoryAux;
let titleAux;
let icon;
let subtitle;
let id;



const StoreItem2 = (elt) => {
  const [loadingIcon, setLoadingIcon] = useState(false);
  const { navigate} = useNavigation();
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');

//=======================================================//
  const docClient = new AWS.DynamoDB.DocumentClient({
    // optional tuning - 50% faster(cold) / 20% faster(hot)
    apiVersion: '2012-08-10',
    sslEnabled: false,
    paramValidation: false,
    convertResponseTypes: false
  });

  let response;
  let status;

  const scanTable = async (tableName, context, callback) => {
    let params = { TableName: tableName };

    let scanResults = [];
    let items;

    do {
        items = await docClient.scan(params).promise();
        items.Items.forEach((item) => scanResults.push(item));
        params.ExclusiveStartKey = items.LastEvaluatedKey;
    } while (typeof items.LastEvaluatedKey != "undefined");

    const responseSucces = JSON.stringify(scanResults, null, 2);
    response = JSON.parse(responseSucces)
    status = _.get(responseSucces, 'title', 'Nothinfg');
    for(var i = 0; i < response.length; i++){
      console.log(response[i].title);
      if(response[i].categoryId !== " "){
        setTitle(scanResults[1].title);
        setId(scanResults[1].id);
        id = response[i].id;
        icon = response[i].url;
        subtitle = response[i].subtitle;
      }

    }
  };

scanTable("SubExam-esVix2021marc-dev");
//===========================================================//

   return(
    <View key={id} style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
      >
        {icon && (
        <Image
          source={{ uri: icon }}
          style={styles.icon}
          resizeMode="contain"
          onLoadStart={() => setLoadingIcon(true)}
          onLoadEnd={() => setLoadingIcon(false)}
        />
        )}
        {loadingIcon && (
        <LottieView
          source={DNALoading}
          autoPlay
          loop
          style={styles.loading}
        />
        )}
        <View style={styles.itemView}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
          </Text>
        </View>
      </TouchableOpacity>
    </View>     
   );

};

StoreItem2.propTypes = {
  elt: propTypes.shape({
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    price: propTypes.string.isRequired,
    icon: propTypes.node,
  }).isRequired,
  onPress: propTypes.func.isRequired,
};

export default StoreItem2;
