import React, { Component } from 'react';

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
      case '1':
        this.One();
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

  One=()=>{
    Alert.alert("One");
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
        <TextInput
          placeholder="Enter Number"
          onChangeText={data => this.setState({ TextInput_Data: data })}
          style={styles.textInputStyle}
          keyboardType = {"numeric"}
        />
        <TouchableOpacity onPress={this.checkSwitch.bind(this, this.state.TextInput_Data)} activeOpacity={0.6} style={styles.button} >
          <Text style={styles.TextStyle}> Click </Text>
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


/**
 * 


import { requiredSubselectionMessage } from 'graphql/validation/rules/ScalarLeafs';
import propTypes from 'prop-types';
import React from 'react';
import { View, Text, Animated } from 'react-native';
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



const Paternity = ({
  loading,
  paternity,
  selectedFather,
  shouldBuyKit,
  card,
  onPressBack,
  onPressChangeFather,
  onChangeNoFatherPresent,
  onPressBuy,
}) => {
  const { keyboardHeight } = useKeyboardAnimation();



  return (
    <Container
      loading={loading}
      scrollEnabled
      headerTitle="Paternidade"
      onPressBack={onPressBack}
    >
      <View style={styles.container}>
        <View style={styles.topView}>
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
  selectedFather: propTypes.number.isRequired,
  shouldBuyKit: propTypes.bool.isRequired,
  card: propTypes.shape({
    valid: propTypes.bool.isRequired,
    installments: propTypes.number.isRequired,
  }).isRequired,
  onPressBack: propTypes.func.isRequired,
  onPressChangeFather: propTypes.func.isRequired,
  onChangeNoFatherPresent: propTypes.func.isRequired,
  onPressBuy: propTypes.func.isRequired,
};




 * 

export default ReportsView;

 */
