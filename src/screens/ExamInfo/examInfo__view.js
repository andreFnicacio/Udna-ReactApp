//Formas de pagamentos//
import propTypes from 'prop-types';
import React, {useState} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { View, Text, Animated, TouchableOpacity, Image, TextInput } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import { useNavigation } from 'react-navigation-hooks';
import { useUser } from '../../providers/UserProvider';
import ButtonRound from '../../components/ButtonRound';
import Title from '../../components/Title';
import { BILLET, CREDIT_CARD } from '../../constants/payment';
import Container from '../../layouts/Container/container';
import { useKeyboardAnimation } from '../../providers/KeyboardProvider';
import { useModal } from '../../providers/ModalProvider';
import useModalMessage from '../../hooks/useModalMessage';
import { masks } from '../../services/maskService';
import { mapStoreService } from '../../services/storeService';
import { getUserCustomized, getExamsCustomized, listCategorysCustomized, listKitsCustomized } from '../../graphql/queriesCustomized';
import { moneyMaskService, discountService } from '../../services/moneyService';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import ActivateModal from '../../modules/ursula/screens/screen.form/components/ActivateModal';


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
  //shouldBuyKit,
  card,
  onPressChangePayment,
  onChangeCreditCard,
  onPressBuy,
  touched,
  errors,
  
  values,
}) => {

  const resourceType = 'url';

  const { keyboardHeight } = useKeyboardAnimation();
  const {navigate} = useNavigation();
  const { user, setUser } = useUser();
  const [code, setCode] = useState('');
  const [codeGet, setcode] = useState('');
  const [number, onChangeNumber] = useState("");
  const [value, setValue]=useState(exam.price);
  const nutritrionalProfileURL = 'https://';
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [style, setStyle] = useState(styles.buttonLK);
  const [shouldShow, setShouldShow] = useState(true);
  const [name, setName] = useState('Ativar Kit');
  const [disebled, setDisebled] = useState(true);
  const [disebledKit, setDisebledKit] = useState(true);
  const [codeValidation, setCodeValidation] = useState('');
  const [Exam, setExam] = useState({});
  const { showModalMessage } = useModalMessage();
  const { shouldBuyKit, setShouldBuyKit } = useState('');

  const { modalRender, showModal, hideModal } = useModal();

  const { data: categoriesData, loading: categoriesLoading } = useQuery(listCategorysCustomized);

  const { data: kitData } = useQuery(listKitsCustomized);

  const state = {
    mostrarComponente: false
  };

  

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

  const getDisabled = () => {
    if (selectedPayment === 0) {
      return false;
    }
    if (card.valid) {
      return false;
    }
    return true;
  };
 
  const getDiscount = (value) => {
    
    let discount = value/100;

    let discountClean = 1.0 - discount;

    let discountCleanUp = exam.price * discountClean;

    setValue(discountCleanUp.toString());
    navigate("ExamInfo", { number: discountCleanUp.toString(), exam: exam,codeId: "200103" });

  };

  const getPay = () => {
    if (shouldBuyKit
       && (selectedPayment === 0 || (selectedPayment === 1 && card.installments === 1))) {
      return (
        <>
          <Text style={styles.price}>
            {`R$ ${moneyMaskService(value)}`}
          </Text>
        </>
      );
    }
    
    return (
      <Text style={styles.price}>
        {`R$ ${masks.money(value)}`}
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
      headerTitle="Informações"
      onPressBack={() => navigate('Store2')}
    >
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.infoView}>
            <Title color="gray" text={exam.title} style={styles.title} />
            <>
            <View style={styles.positionTitle}>
              <Text style={styles.information}>Informações</Text>
            </View>
            {!shouldBuyKit && <Text style={styles.description}>{exam.description}</Text>}
            <View>
            { shouldShow ?(
              <View style={{right:10, top:10, }}> 
                <Text style={{ color: colors.purple}}>Cupom de Desconto</Text>
                <View style={{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', }}>
                  
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder=""
                    placeholderTextColor={'#000'}
                    clearButtonMode={true}
                    type="text"
                    keyboardType="email-address"
                    keyboardAppearance="dark"
                  />
                  <TouchableOpacity 
                    text={!shouldBuyKit ? 'Aplicar' : 'Aplicado'} 
                    onPress={() => {
                      let awsConfig2 = {
                        "region": "us-east-1",
                        "accessKeyId": "AKIA564XY3QK6GKEQWUS", "secretAccessKey": "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"
                      };
                      
                      AWS.config.update(awsConfig2);
                  
                      var params = {
                        TableName: "UdnaDiscount-EsVix2021",
                        FilterExpression: "coupon = :this_category",
                        ExpressionAttributeValues: { ":this_category": number },
                      };
                  
                      var documentClient = new AWS.DynamoDB.DocumentClient();
                  
                      documentClient.scan(params, function (err, data) {
                        if (err) {
                          console.log(err);
                        } else {
                          if(data.Count === 0){
                            showModalMessage({
                              title: 'Ops!',
                              description: 'Cupom não verificado, tente novamente!!',
                            });
                          }else{
                            let state = {coupon: data.Items[0].coupon, discount:data.Items[0].discount};
                            showModalMessage({
                              title: 'Sucesso!',
                              description: 'Cupom verificado!!',
                              onPress: styles.discount ,
                            });
                            setShouldShow(false);
                            getDiscount(state.discount);                        
                          }
                        }
                      });
                    }}
                    
                    style={styles.buttonAplic}
                  >
                    <View style={{backgroundColor: colors.white, margin:1, borderRadius:10, }}>
                      <Text style={{color: colors.blue1, textAlign: 'center', margin:5}}>Aplicar</Text>
                    </View>
                  </TouchableOpacity>
                  
                  
                  <Animated.View style={{ height: keyboardHeight }} />
                </View>
              </View>
                
              ): (
                <View style={{flexDirection: 'row', alignItems: 'center', right:100, top:10 }}>
                  <Image
                    style={{width:30,height:30,resizeMode:'contain'}}
                    source={{
                      uri:
                        "https://udnas3prd-prd.s3.amazonaws.com/icons/appUrsulav6/check.png",
                    }}
                  />
                  <Text style={{ fontFamily:fonts.family.regular, color:colors.gray5, marginLeft:10}}>Cupon verificado</Text>
                  <Animated.View style={{ height: keyboardHeight }} />
                </View>
              )
            }
            </View>
            <View style={styles.payValue}> 
              {getPay()}
            </View>
            </>
          </View>
          
          {shouldBuyKit === "0" ? (
        <>
        <SwitchSelector
        options={payments}
        initial={selectedPayment}
        onPress={onPressChangePayment}
        textColor={colors.white}
        selectedColor={colors.white}
        buttonColor={colors.primary}
        backgroundColor={colors.purple1}
        borderColor={colors.blue1}
        textStyle={styles.textSwitch}
        selectedTextStyle={styles.textSwitch}
        style={styles.switchSelector}
        />
        {getRenderPayment()}
        </>
          ) : (
            <>
            <View>
               <Text style={{}}></Text>
             </View>
             </>
          )
        }
        </View>
        <View > 
        <TouchableOpacity 
          onPress={onPressBuy}
          style={styles.buttonComprar}
        >
          <View style={{backgroundColor: colors.white, margin:1, borderRadius:10, }}>
            <Title  style={{fontSize:fonts.size.font18 ,color: colors.blue1, textAlign: 'center', margin:5}} text={!shouldBuyKit ? 'Escolher pagamento' : 'Comprar'}/>
          </View>
        </TouchableOpacity>
        <ActivateModal
          isVisible={isModalVisible}
          code={code}
          codeValidation={codeValidation}
          onChangeCode={setCode}
          onPress={kitActivation}            
          onPressSecond={() => setIsModalVisible(false)}
        />
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

//onChangeText={handleChange('cellphone')}

// <>
//<SwitchSelector
//options={payments}
//initial={selectedPayment}
//onPress={onPressChangePayment}
//textColor={colors.white}
//selectedColor={colors.white}
//buttonColor={colors.primary}
//backgroundColor={colors.purple1}
//borderColor={colors.blue1}
//textStyle={styles.textSwitch}
//selectedTextStyle={styles.textSwitch}
//style={styles.switchSelector}
///>
//{getRenderPayment()}
//</>















