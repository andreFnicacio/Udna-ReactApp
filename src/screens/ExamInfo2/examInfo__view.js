import propTypes from 'prop-types';
import React, {useState} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { View, Text, Animated, TouchableOpacity, Linking } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import { useNavigation } from 'react-navigation-hooks';
import { useUser } from '../../providers/UserProvider';
import ButtonRound from '../../components/ButtonRound';
import Title from '../../components/Title';
import { BILLET, CREDIT_CARD } from '../../constants/payment';
import Container from '../../layouts/Container/container';
import { useKeyboardAnimation } from '../../providers/KeyboardProvider';
import { masks } from '../../services/maskService';
import { mapStoreService } from '../../services/storeService';
import { getUserCustomized, getExamsCustomized, listCategorysCustomized, listKitsCustomized } from '../../graphql/queriesCustomized';
import { moneyMaskService, discountService } from '../../services/moneyService';
import colors from '../../styles/colors';
import ActivateModal from '../../modules/ursula/screens/screen.form/components/ActivateModal';

import Knowmore from './ knowmore.js'
import PDFView from 'react-native-view-pdf'


import Billet from './components/Billet';
import CreditCard from './components/CreditCard';
import styles from './styles';

const resources = {
  file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
  url: '',
  base64: 'JVBERi0xLjMKJcfs...',
};

const ExamInfoView = ({
  loading,
  exam,
  selectedPayment,
  shouldBuyKit,
  card,
  navigateGoBack,
  onPressChangePayment,
  onChangeCreditCard,
  onPressBuy,
  source,
  error,
}) => {

  const resourceType = 'url';

  const { keyboardHeight } = useKeyboardAnimation();
  const {navigate} = useNavigation();
  const { user, setUser } = useUser();
  const [code, setCode] = useState('');
  const [codeGet, setcode] = useState('');
  const nutritrionalProfileURL = 'https://';
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [style, setStyle] = useState(styles.buttonLK);
  const [name, setName] = useState('Ativar Kit');
  const [disebled, setDisebled] = useState(true);
  const [disebledKit, setDisebledKit] = useState(true);
  const [codeValidation, setCodeValidation] = useState('');
  const [Exam, setExam] = useState({});

  let stateCode = "";

  const { data: categoriesData, loading: categoriesLoading } = useQuery(listCategorysCustomized);

  const { data: kitData } = useQuery(listKitsCustomized);

  const validateCode = () => {
    if (kitData) {
      const codes = kitData.listKits.items;
      const validCodes = codes.map((elt) => {
        if (elt.status !== 'ACTIVATE') {
          return elt.id;
        }
        return '';
      });
      function callToData(value) {
        let awsConfig2 = {
          "region": "us-east-1",
          "accessKeyId": "AKIA564XY3QK6GKEQWUS", "secretAccessKey": "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",
        };
    
        AWS.config.update(awsConfig2);
    
        var params = {
          TableName: "Kit-3tn77dv2gbag7ibwijizdpc7sa-prd",
          FilterExpression: "id = :this_category",
          ExpressionAttributeValues: { ":this_category": value },
        };
    
        var documentClient = new AWS.DynamoDB.DocumentClient();
    
        documentClient.scan(params, function (err, data) {
          if (err) {
            console.log(err);
          } else {

            if(data.Count !== 0){
              setCodeValidation('valid');
            }else{
              setCodeValidation('invalid');
            }

          }
        });
      }
      
      callToData(code);
    }
  };

  const kitActivation = () => {
    switch (codeValidation) {
      case 'valid':
        setIsModalVisible(false);
        setCode('');
        setCodeValidation('');
        setName('Aguardando Resultado')
        setDisebled(false)
        setDisebledKit(true)
        setStyle(styles.buttonLKs)
        navigate('ExamInfo', {exam:exam})
        break;

      case 'invalid':
        setIsModalVisible(false);
        setCode('');
        setCodeValidation('');
        break;

      default:
        validateCode();
        break;
    }
  };

  const payments = [{
    label: BILLET,
    value: 0,
  }, {
    label: CREDIT_CARD,
    value: 1,
  }];

  const getRenderPayment = () => {
    if (selectedPayment === 0) {
      return (
        <Billet />
      );
    }
    return (
      <CreditCard
        exam={exam}
        selectedInstallments={card.installments}
        onChange={onChangeCreditCard}
      />
    );
  };



  const getDiscount = () => {
    if (shouldBuyKit
       && (selectedPayment === 0 || (selectedPayment === 1 && card.installments === 1))) {
      return (
        <>
          <Text style={styles.price}>
            {`R$ ${moneyMaskService(exam.price)}`}
          </Text>
        </>
      );
    }
    return (
      <Text style={styles.price}>
        {`R$ ${masks.money(exam.price)}`}
      </Text>
    );
  };





  let url = "";

  function callToUrl(value) {
    let awsConfig2 = {
      "region": "us-east-1",
      "accessKeyId": "AKIA564XY3QK6GKEQWUS", "secretAccessKey": "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",
    };

    AWS.config.update(awsConfig2);

    var params = {
      TableName: "SubExam-esVix2021marc-dev",
      FilterExpression: "id = :this_category",
      ExpressionAttributeValues: { ":this_category": value },
    };

    var documentClient = new AWS.DynamoDB.DocumentClient();

    documentClient.scan(params, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        url = data.Items[0].urlSaibaMais;
      }
    });
  }
  
  callToUrl(exam.id);

  console.log(url);

  return (
    <Container
      loading={loading}
      scrollEnabled
      headerTitle="Painel"
      onPressBack={() => navigate('Store2')}
    >
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.infoView}>
            <View style={styles.positionTitle}>
              <Text style={styles.title}>{exam.title}</Text>
            </View>
            <View style={styles.positionTitle}>
              <Text style={styles.information}>Informações</Text>
            </View>
            <View style={{marginTop: 20,backgroundColor: colors.white, borderRadius:10, padding:10}}>
              {!shouldBuyKit && <Text style={styles.description}>{exam.description}</Text>}
            </View>
            
            <View>
            <View style={styles.payValue}> 
            {getDiscount()}
            </View>
              <TouchableOpacity 
              style={{marginTop:50, backgroundColor: colors.blue1, borderRadius:10, white:'auto',padding:1}}
              onPress={() => Linking.openURL(url)}
              >
                <View style={{backgroundColor: colors.white,  borderRadius:10,}}>
                  <Text style={{color:colors.blue1, marginLeft:10, marginRight:10, marginTop:3, marginBottom:3}} >SAIBA MAIS</Text>
                </View>
              </TouchableOpacity>
              <View style={{ marginTop:10,}}>
                <TouchableOpacity 
                  style={{ backgroundColor: colors.blue1, borderRadius:10, white:'auto',padding:1}}
                  onPress={() => {navigate('ExamInfo', {exam:exam})}}
                >
                <View style={{backgroundColor: colors.white,  borderRadius:10,}}>
                  <Text style={{color:colors.blue1, marginLeft:10, marginRight:10, marginTop:3, marginBottom:3}}> COMPRAR</Text>
                </View>
              </TouchableOpacity>
            </View>
            </View>
          </View>
          {shouldBuyKit && (
            <>
              <SwitchSelector
                options={payments}
                initial={selectedPayment}
                onPress={onPressChangePayment}
                textColor={colors.white}
                selectedColor={colors.white}
                buttonColor={colors.primary}
                backgroundColor={colors.purple1}
                borderColor={colors.transparent}
                textStyle={styles.textSwitch}
                selectedTextStyle={styles.textSwitch}
                style={styles.switchSelector}
              />
              {getRenderPayment()}
            </>
          )}
        </View>
        
        <Animated.View style={{ height: keyboardHeight }} />
      </View>
    </Container>
  );
};

ExamInfoView.propTypes = {
  loading: propTypes.bool.isRequired,
  exam: propTypes.shape({
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    price: propTypes.string.isRequired,
  }).isRequired,
  selectedPayment: propTypes.number.isRequired,
  shouldBuyKit: propTypes.bool.isRequired,
  card: propTypes.shape({
    valid: propTypes.bool.isRequired,
    installments: propTypes.number.isRequired,
  }).isRequired,
  onPressBack: propTypes.func.isRequired,
  onPressChangePayment: propTypes.func.isRequired,
  onChangeCreditCard: propTypes.func.isRequired,
  onPressBuy: propTypes.func.isRequired,
};

export default ExamInfoView;
