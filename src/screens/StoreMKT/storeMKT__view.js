import LottieView from 'lottie-react-native';
import propTypes from 'prop-types';
import React, { useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import Container from '../../layouts/Container/container';
import DNALoading from '../../assets/lottie/DNALoading.json';

import StoreItem2 from './components/StoreItem';
import styles from './styles';

const _ = require('lodash');

let AWS = require('aws-sdk');
let docClient = new AWS.DynamoDB.DocumentClient();


const StoreView = ({
  headerTitle,
  loading,
  categories,
  onChoiceItem,
  onSeeShopping,
  onPressBack,
}) => {

  const [loadingIcon, setLoadingIcon] = useState(false);
  const [exam, setExam] = useState([]);
  const { navigate, getParam } = useNavigation();
  const titleSub = getParam('title')
  const description = getParam('description')
  const subtitle = getParam('titleSub')
  function callToData(onChoiceItem){
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
         setExam(data)
       }
    });
  }
  callToData(onChoiceItem);

  const cleanExam = exam;

  return(
    <Container
    headerTitle={headerTitle}
    loading={loading}
    headerTextButton="Meus pedidos/frashchat"
    onPressBack={onPressBack}
  >
    <View style={styles.container}>
      <View style={styles.positionTitleProducts}>
        <Text style={styles.titleProducts}> {subtitle}</Text>
      </View>  
      <View style={styles.descriptionsProduct}>
        <Text style={styles.titleDescriptionsProduct}> {titleSub} </Text>
        <Text style={styles.descriptionsProduct}> {description} </Text>
      </View>
      <Text style={styles.nossosProdutos}> Nossos exames</Text>
      <View style={styles.flat}>
      
      <FlatList
          data={cleanExam.Items}
          renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              const exam = {
                title: item.title,
                categoryId: item.categoryId,
                id: item.id,
                subtitle: item.subtitle,
                url: item.url,
                description: item.description,
                price: item.price,
              }
              navigate('ExamInfo3', { exam: exam, codeId: item.categoryId });              
            }}
            style={styles.touchable}
            >
          <View style={styles.row}>
            {loadingIcon && (
              <LottieView
                source={DNALoading}
                autoPlay
                loop
                style={styles.loading}
                />
              )}
              <View style={styles.itemView}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>
                  {item.subtitle.slice(0, 100)}
              </Text>
              </View>
            {item.url && (
            <Image
              source={{ uri: item.url }}
              style={styles.icon}
              resizeMode="contain"
              onLoadStart={() => setLoadingIcon(true)}
              onLoadEnd={() => setLoadingIcon(false)}
            />
            )}
           
            </View>
          </TouchableOpacity>
          )}
       />
       </View>
       </View>
    </Container>
  )
};

StoreView.propTypes = {
  headerTitle: propTypes.string.isRequired,
  loading: propTypes.bool,
  categories: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    exams: propTypes.arrayOf(propTypes.shape({
      id: propTypes.string,
      categoryId: propTypes.string,
      title: propTypes.string,
      description: propTypes.string,
      price: propTypes.string,
      icon: propTypes.node,
    }).isRequired),
  }).isRequired).isRequired,
  onPressBack: propTypes.func.isRequired,
  onChoiceItem: propTypes.func.isRequired,
  onSeeShopping: propTypes.func.isRequired,
};

StoreView.defaultProps = {
  loading: false,
};

export default StoreView;