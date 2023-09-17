import propTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import ActivateModal5 from "./components/ActivateModal5";
import ActivateModal6 from "../../modules/ursula/screens/screen.form/components/ActivateModal6";
import ActivateModal7 from "../../modules/ursula/screens/screen.form/components/ActivateModal7";
import { set } from "react-native-reanimated";
import SwitchSelector from "react-native-switch-selector";

import ButtonRound from "../../components/ButtonRound";
import Container from "../../layouts/Container/container2";
import { useKeyboardAnimation } from "../../providers/KeyboardProvider";
import colors from "../../styles/colors";

import styles from "./styles";
import { Switch } from "react-native-gesture-handler";

const _ = require("lodash");

let responseSuccesUser;
let responseSucces;

let responseTitle;
let responseWashTitle;

let responseCategory;
let responseWashCategory;

let responseDescription;
let responseWashDescription;

let responseId;
let responseWashId;

let responsePrice;
let responseWashPrice;
let responseWashPriceString;

let responseSubTitle;
let responseWashSubTitle;

let responseUrl;
let responseWashUrl;

function cognitoListUser(id) {
  let awsConfig2 = {
    region: "us-east-1",
    accessKeyId: "AKIA564XY3QK6GKEQWUS",
    secretAccessKey: "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",
  };
  AWS.config.update(awsConfig2);

  const docClient = new AWS.DynamoDB.DocumentClient();
  const fetchOneByKeyAdress = function() {
    var params = {
      TableName: "SubExam-esVix2021marc-dev",
      Key: {
        id: id,
      },
    };
    docClient.get(params, function(err, data) {
      if (err) {
        const responseError = typeof JSON.stringify(err, null, 2);
        console.log(responseError);
      } else {
        const responseSuccesAdress = JSON.stringify(data, null, 2);
        responseSucces = JSON.parse(responseSuccesAdress);
        //
        responseTitle = _.get(responseSucces, "Item.title", "Nothinfg");
        responseWash = responseTitle.toString();
        //
        responseDescription = _.get(
          responseSucces,
          "Item.description",
          "Nothinfg"
        );
        responseWashDescription = responseDescription.toString();
        //
        responseCategory = _.get(responseSucces, "Item.categoryId", "Nothinfg");
        responseWashresponseWashCategory = responseCategory.toString();
        //
        responseId = _.get(responseSucces, "Item.id", "Nothinfg");
        responseWashId = responseId.toString();
        //
        responsePrice = _.get(responseSucces, "Item.price", "Nothinfg");
        responseWashPrice = responsePrice / 100.0;
        //
        responseSubTitle = _.get(responseSucces, "Item.subtitle", "Nothinfg");
        responseWashSubTitle = responseSubTitle.toString();
        //
        responseUrl = _.get(responseSucces, "Item.url", "Nothinfg");
        responseWashSubTitle = responseSubTitle.toString();
      }
    });
  };

  function fetchOneByKeyUser() {
    var params = {
      TableName: "Exam-vs3khp2fljhzzmyboctd6n6gbm-dev",
      Key: {
        id: id,
      },
    };
    docClient.get(params, function(err, data) {
      if (err) {
        console.log(JSON.stringify(err, null, 2));
      } else {
        const ResponseSuccesUser = JSON.stringify(data, null, 2);
        responseSuccesUser = JSON.parse(ResponseSuccesUser);
      }
    });
  }
  fetchOneByKeyAdress();
  fetchOneByKeyUser();
}

cognitoListUser("f-02");

const Paternity = ({ loading }) => {
  const _ = require("lodash");
  const [isModalVisible5, setIsModalVisible5] = useState(false);
  const [isModalVisible6, setIsModalVisible6] = useState(false);
  const [isModalVisible7, setIsModalVisible7] = useState(false);
  const [code, setCode] = useState("");
  const [codeValidation, setCodeValidation] = useState("");

  const kitActivation5 = () => {
    switch (codeValidation) {
      case "valid":
        setIsModalVisible5(false);
        setCode("");
        setCodeValidation("");
        navigate("Paternity", { exam, codeId: code });
        break;
    }
  };
  //const kitActivation6 = () => {
  //  switch (codeValidation) {
  //    case "valid":
  //      setIsModalVisible6(false);
  //      setCode("");
  //      setCodeValidation("");
  //      navigate("ExamInfo", { exam, codeId: code });
  //      break;
  //  }
  //};
  //const kitActivation7 = () => {
  //  switch (codeValidation) {
  //    case "valid":
  //      setIsModalVisible7(false);
  //      setCode("");
  //      setCodeValidation("");
  //      navigate("ExamInfo", { exam, codeId: code });
  //     break;
  //  }
  //};

  const {} = useKeyboardAnimation();
  const [isAux, setIsAux] = useState(responseWashPrice);
  const [isCalculator, setIsCalculator] = useState(false);
  const { navigate, goBack } = useNavigation();
  const [exam, setExam] = useState({});
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(true);
  const [check3, setCheck3] = useState(true);
  const [checkState, setCheckState] = useState(false);
  const [checkState2, setCheckState2] = useState(false);
  const [checkState3, setCheckState3] = useState(false);
  const [checkState4, setCheckState4] = useState(false);
  const [status, setStatus] = useState("");
  const [statusCategoryId, setStatusCategoryId] = useState("");
  const [statusDescription, setStatusDescription] = useState("");
  const [statusId, setStatusId] = useState("");
  const [statusProce, setStatusPrice] = useState("");
  const [statusSubtitle, setStatusSubtitle] = useState("");
  const [statusUrl, setStatusUrl] = useState("");
  const [cont, setCont] = useState(true);
  const [cont2, setCont2] = useState(true);
  const [checkModal, setCheckModal] = useState(true);
  const [posit, setPosit] = useState(false);


  const [qtdFilhos, setqtdFilhos] = useState("1");
  const [maeParticip, setMaeParticip] = useState("Sim");
  const [materialToColect, setMaterialToColect] = useState("Saliva");
  const [kitExtra, setKitExtra] = useState("Não");
  const [disputsJudiciais, setDisputsJudicias] = useState("Não");
  

  let aux = 0;
  let conti = 0;

  return (
    <Container
      loading={loading}
      scrollEnabled
      headerTitle="Paternidade"
      onPressBack
    >
      <View style={styles.container}>
        <ActivateModal5
          isVisible={isModalVisible5}
          code={code}
          codeValidation={codeValidation}
          onChangeCode={setCode}
          onPress={kitActivation5}
          onPressSecond={() => {
            setIsModalVisible5(false);
          }}
        />
        <View style={styles.header}>
          <Text style={styles.subTitle}>Valor do Teste</Text>
          <Text style={styles.valueTestText}>R${isAux.toString() + ",00"}</Text>

          <View style={Style.positionButton}>
            <TouchableOpacity style={Style.touchable} onPress={() => {}}>
              <View style={Style.Button}>
                <ButtonRound
                  text="Comprar"
                  textButtonStyle={colors.gray1}
                  style={styles.button}
                  
                  onPress={() => {
                    const examPaternity = {
                      title: responseWash,
                      categoryId: responseWashCategory,
                      id: responseWashId,
                      subtitle: responseWashSubTitle,
                      url: responseWashUrl,
                      description: responseWashDescription,
                      price: isAux.toString() + "00",
                      
                    };

                    const infoPaternity = {
                      qtdFilhos: qtdFilhos,
                      maeParticip: maeParticip,
                      materialToColect: materialToColect,
                      kitExtra: kitExtra,
                      disputsJudiciais: disputsJudiciais,
                      price: isAux.toString() + ",00",
                    }
                    navigate("ExamInfo3", {
                      exam: examPaternity,
                      codeId: "200103",
                      infoPaternity: infoPaternity,
                    });
                  }}
                  disabled={posit}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.Main]}>
          <View style={{ width: 300, marginTop: 5 }}>
            <Text
              style={{
                fontSize: 16,
                color: "#5b3d8b",
                marginBottom: 12,
                marginTop: 15,
              }}
            >
              Quantos(as) filhos(as) irão fazer o teste?
            </Text>
            <SwitchSelector
              initial={0}
              onPress={(value) => {
                if (value === "one") {
                  aux = responseWashPrice;
                  setIsAux(aux);
                  setqtdFilhos("1");
                  
                }
                if (value === "two") {
                  aux = responseWashPrice + 112;
                  setIsAux(aux);
                  setqtdFilhos("2");
                }
                if (value === "three") {
                  aux = responseWashPrice + 224;
                  setIsAux(aux);
                  setqtdFilhos("3");
                }
                if (value === "four") {
                  aux = responseWashPrice + 336;
                  setIsAux(aux);
                  setqtdFilhos("4");
                }
              }}
              textColor={colors.purple}
              selectedColor={colors.white}
              buttonColor={colors.purple}
              borderColor={`#fff`}
              hasPadding
              options={[
                { label: "1", value: "one" },
                { label: "2", value: "two" },
                { label: "3", value: "three" },
                { label: "4", value: "four" },
              ]}
              testID="gender-switch-selector"
              accessibilityLabel="gender-switch-selector"
            />

            <Text
              style={{
                fontSize: 16,
                color: "#5b3d8b",
                marginBottom: 12,
                marginTop: 15,
              }}
            >
              A mãe do(a) filho(a) investigante irá participar?
            </Text>
            <SwitchSelector
              initial={0}
              textColor={colors.purple}
              selectedColor={colors.white}
              buttonColor={colors.purple}
              borderColor={colors.purple}
              borderRadius={5}
              hasPadding
              onPress={(value) => {
                  if (value === "S"){
                    setMaeParticip("Sim");
                  }else{
                    setMaeParticip("Não");
                  }
              }}
              options={[
                { label: "Sim", value: "S" },
                { label: "Não", value: "N" },
              ]}
              testID="gender-switch-selector"
              accessibilityLabel="gender-switch-selector"
            />

            <Text
              style={{
                fontSize: 16,
                color: "#5b3d8b",
                marginBottom: 12,
                marginTop: 15,
              }}
            >
              Para os participantes, qual material deseja coletar?
            </Text>
            <SwitchSelector
              initial={0}
              onPress={(value) => {
                if (value === "S" && isAux >= 749 && check1 === true) {
                  aux = isAux - 455;
                  setIsAux(aux);
                  setMaterialToColect("Saliva");
                  setCheck1(true);
                  setCheck2(true);
                  setCheck3(true);
                }
                if (value === "U" && isAux < 750) {
                  aux = isAux + 455;
                  setIsAux(aux);
                  setMaterialToColect("Unha");
                  setCheck2(false);
                  setCheck3(false);
                  setCheckState(true);
                }
                if (value === "C" && isAux < 750) {
                  aux = isAux + 455;
                  setIsAux(aux);
                  setMaterialToColect("Cabelo");
                  setCheck2(false);
                  setCheck3(false);
                  setCheckState(true);
                }
              }}
              textColor={colors.purple}
              selectedColor={colors.white}
              buttonColor={colors.purple}
              borderColor={colors.purple}
              borderRadius={5}
              hasPadding
              options={[
                { label: "Saliva", value: "S" },
                { label: "Unha", value: "U" },
                { label: "Cabelo", value: "C" },
              ]}
              testID="gender-switch-selector"
              accessibilityLabel="gender-switch-selector"
            />

            <Text
              style={{
                fontSize: 16,
                color: "#5b3d8b",
                marginBottom: 12,
                marginTop: 15,
              }}
            >
              Necessário mais de um kit para coleta (participantes em mais de
              uma cidade)?
            </Text>
            <SwitchSelector
              initial={1}
              onPress={(value) => {
                if (value === "N" && cont === false && isAux > 395) {
                  aux = isAux - 87;
                  setIsAux(aux);
                  setCont(true);
                  setKitExtra("Não");
                }
                if (value === "S" && cont === true) {
                  aux = isAux + 87;
                  setIsAux(aux);
                  setCont(false);
                  setCheckState(true);
                  setKitExtra("Sim");
                }
              }}
              textColor={colors.purple}
              selectedColor={colors.white}
              buttonColor={colors.purple}
              borderColor={colors.purple}
              borderRadius={5}
              hasPadding
              options={[
                { label: "Sim", value: "S" },
                { label: "Não", value: "N" },
              ]}
              testID="gender-switch-selector"
              accessibilityLabel="gender-switch-selector"
            />
            <Text
              style={{
                fontSize: 16,
                color: "#5b3d8b",
                marginBottom: 12,
                marginTop: 15,
              }}
            >
              {" "}
              Precisa do teste para possíveis disputas judiciais?
            </Text>
            <SwitchSelector
              initial={1}
              onPress={(value) => {
                if (value === "N" && cont2 === false && isAux > 395) {
                  aux = isAux - 100;
                  setIsAux(aux);
                  setCont2(true);
                  setDisputsJudicias("Não");
                  
                }
                if (value === "S" && cont2 === true) {
                  aux = isAux + 100;
                  setIsAux(aux);
                  setCont2(false);
                  setCheckState(true);
                  setDisputsJudicias("Sim");
                  
                }
              }}
              textColor={colors.purple}
              selectedColor={colors.white}
              buttonColor={colors.purple}
              borderColor={colors.purple}
              borderRadius={5}
              hasPadding
              options={[
                { label: "Sim", value: "S" },
                { label: "Não", value: "N" },
              ]}
              testID="gender-switch-selector"
              accessibilityLabel="gender-switch-selector"
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

Paternity.propTypes = {
  loading: propTypes.bool.isRequired,
  paternity: propTypes.shape({
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    price: propTypes.string.isRequired,
  }).isRequired,
};

const Style = StyleSheet.create({
  Button: {
    width: 120,
    height: 40,
    marginBottom: 80,
    marginTop: 10,
    alignItems: "center",
  },
  touchable: {
    marginLeft: 10,
  },
  positionButton: {
    alignItems: "center",
  },
  boxTextHeader: {
    backgroundColor: `#f2f2f2`,
    marginTop: 10,
    marginBottom: 10,
    width: 320,
    height: 140,
    borderRadius: 10,
    textAlign: `center`,
    alignItems: `center`,
  },
});

export default Paternity;

/**
 * 

//  <ActivateModal6
      //    isVisible={isModalVisible6}
      //    code={code}
      //    codeValidation={codeValidation}
      //    onChangeCode={setCode}
      //    onPress={kitActivation6}
      //    onPressSecond={() => {
      //      setIsModalVisible6(false);
      //    }}
      //  />
      //  <ActivateModal7
      //    isVisible={isModalVisible7}
      //    code={code}
      //    codeValidation={codeValidation}
      //    onChangeCode={setCode}
      //    onPress={kitActivation7}
      //    onPressSecond={() => {
      //      setIsModalVisible7(false);
      //    }}
      //  />
      









import React, { Component } from 'react';

import SwitchSelector from 'react-native-switch-selector';



import ButtonRound from '../../components/ButtonRound';
import Title from '../../components/Title';
import { BILLET, CREDIT_CARD, FATHER_PRESENT, NO_FATHER_PRESENT } from '../../constants/father';
import Container from '../../layouts/Container';
import { useKeyboardAnimation } from '../../providers/KeyboardProvider';
import { masks } from '../../services/maskService';
import { moneyMaskService, discountService } from '../../services/moneyService';
import colors from '../../styles/colors';

import FatherPresent from './components/FatherPresent';
import NoFatherPresent from './components/NoFatherPresent';
import styles from './styles';


import { Platform, StyleSheet, View, TextInput, TouchableOpacity, Alert, Text } from 'react-native';

export default class App extends Component {

  constructor(){
    super();
    this.state={
      TextInput_Data : ''
    }
  }

  checkSwitch=(param)=>{
    switch(param) {
      case 'Pai Presente':
        this.FatherPresent();
        break;
      case '2':
        this.Two();
        break;
      case '3':
        this.Three();
        break;
      case '4':
        this.Four();
        break;
      case '5':
        this.Five();
        break;
      default:
        Alert.alert("NUMBER NOT FOUND");
      }
  }

  FatherPresent=()=>{
    Alert.alert("Pai Presente");
  }
  Two=()=>{
    Alert.alert("Two");
  }
  Three=()=>{
    Alert.alert("Three");
  }
  Four=()=>{
    Alert.alert("Four");
  }
  Five=()=>{
   Alert.alert("Five");
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <SwitchSelector
            initial={0}
            onPress={value => this.setState({ gender: value })}
            textColor={colors.purple} //'#7a44cf'
            selectedColor={colors.white}
            buttonColor={colors.purple}
            borderColor={colors.purple}
            hasPadding
            options={[
              { label: "Pai Presente", value: "FatherPresent" },
              { label: "Pai Não Presente", value: "P.N.A" } //images.masculino = require('./path_to/assets/img/masculino.png')
            ]}
            testID="gender-switch-selector"
            accessibilityLabel="gender-switch-selector"
          />
        <TextInput
          onChangeText={data => this.setState({ TextInput_Data: data })}
          style={styles.textInputStyle}
          keyboardType = {"numeric"}
        />
        <TouchableOpacity onPress={this.checkSwitch.bind(this, this.state.TextInput_Data)} activeOpacity={0.6} style={styles.button} >
          <Text style={styles.TextStyle}> Calcular </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    height: 40,
    width: '80%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#008b8b',
    marginBottom: 15
  },
  button: {
    width: '80%',
    padding: 8,
    backgroundColor: '#008b8b',
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextStyle:{
      color:'#fff',
  }
});


========================== Paternity 1.0.0 ========================
<ActivateModal5
          isVisible={isModalVisible5}
          code={code}
          codeValidation={codeValidation}
          onChangeCode={setCode}
          onPress={kitActivation5}
          onPressSecond={() => {
            setIsModalVisible5(false)
          }}
        />
        <ActivateModal6
          isVisible={isModalVisible6}
          code={code}
          codeValidation={codeValidation}
          onChangeCode={setCode}
          onPress={kitActivation6}
          onPressSecond={() => {
            setIsModalVisible6(false)
          }}
        />
        <ActivateModal7
          isVisible={isModalVisible7}
          code={code}
          codeValidation={codeValidation}
          onChangeCode={setCode}
          onPress={kitActivation7}
          onPressSecond={() => {
            setIsModalVisible7(false)
          }}
        />

        ==== Primeira View ====
        <View style={styles.topView}>

          <View style={Style.boxTextHeader}>
            <Text style={{fontSize:18, color:'#5b3d8b', marginBottom:5,marginTop: 10, textAlign:`center`,}}>O teste de paternidade é feito entre um suposto pai e filho(a), ou entre um suposto pai, filho(a) e sua mãe biológica.</Text>
            <Text style={{fontSize:18, color:'#5b3d8b', marginBottom:5, textAlign:`center`,}}>Monte aqui o seu teste.</Text>
          </View>
          
          
          <Text style={{fontSize:16, color:'#5b3d8b', marginBottom:12, marginTop:15,}}>O suposto pai irá participar do teste?</Text>
          <SwitchSelector
            initial={0}
            onPress={(value) => {
              if (value === "S"){
                setPosit(false);
              }
              if (value === "N"){
                setIsModalVisible5(true);
                setPosit(true);

              }
            }}
            disable={checkModal}
            textColor={colors.purple} //'#7a44cf'
            selectedColor={colors.white}
            buttonColor={colors.purple}
            borderColor={colors.purple}
            hasPadding
            options={[
              { label: "Sim", value: "S" }, //images.feminino = require('./path_to/assets/img/feminino.png')
              { label: "Não", value: "N" } //images.masculino = require('./path_to/assets/img/masculino.png')
            ]}
            testID="gender-switch-selector"
            accessibilityLabel="gender-switch-selector"
          />
          <Text style={{fontSize:16, color:'#5b3d8b', marginBottom:12, marginTop:15,}}>A mãe do(a) filho(a) investigante irá participar?</Text>
          <SwitchSelector
            initial={0}
            textColor={colors.purple} //'#7a44cf'
            selectedColor={colors.white}
            buttonColor={colors.purple}
            borderColor={colors.purple}
            hasPadding
            options={[
              { label: "Sim", value: "S" }, //images.feminino = require('./path_to/assets/img/feminino.png')
              { label: "Não", value: "N" } //images.masculino = require('./path_to/assets/img/masculino.png')
            ]}
            testID="gender-switch-selector"
            accessibilityLabel="gender-switch-selector"
          />
          <Text style={{fontSize:16, color:'#5b3d8b', marginBottom:12, marginTop:15,}}>Quantos(as) filhos(as) irão fazer o teste?</Text>
          <SwitchSelector
            initial={0}
            onPress={(value)=>{
              if (value === "one"){
                  aux = responseWashPrice;
                  setIsAux(aux);
                }
                if (value === "two"){
                  aux = responseWashPrice + 112;
                  setIsAux(aux);
                }
                if (value === "three"){
                  aux = responseWashPrice + 224;
                  setIsAux(aux);
                }
                if (value === "four"){
                  aux = responseWashPrice + 336;
                  setIsAux(aux);
              }
            }}
            textColor={colors.purple} //'#7a44cf'
            selectedColor={colors.white}
            buttonColor={colors.purple}
            borderColor={colors.purple}
            hasPadding
            options={[
              { label: "1", value: "one" }, //images.masculino = require('./path_to/assets/img/masculino.png')
              { label: "2", value: "two" }, //images.masculino = require('./path_to/assets/img/masculino.png')
              { label: "3", value: "three" }, //images.masculino = require('./path_to/assets/img/masculino.png')
              { label: "4", value: "four" }
            ]}
            testID="gender-switch-selector"
            accessibilityLabel="gender-switch-selector"
          />
          
        <View style={styles.valueTest}>
          <Text style={styles.valueTestText}>${isAux.toString() + ",00"}</Text>
        </View>
        
        <TouchableOpacity
          onPress={()=>{
              
          }}
        >
          <View style={Style.Button}>
            <ButtonRound text="Comprar" onPress={()=>{
              const examPaternity = {
                title: responseWash,
                categoryId: responseWashCategory,
                id: responseWashId,
                subtitle: responseWashSubTitle,
                url: responseWashUrl,
                description: responseWashDescription,
                price: (isAux.toString() + "00"),
              }
              navigate('ExamInfo', {exam: examPaternity, codeId: "200103"});
            }}
            disabled={posit}
              />
          </View>
        </TouchableOpacity>

============================================================================================== 
 */
