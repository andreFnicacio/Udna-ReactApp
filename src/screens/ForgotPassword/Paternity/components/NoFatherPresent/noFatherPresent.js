import propTypes from 'prop-types';
import React from 'react';
import {
  View, Text,
} from 'react-native';
import { CreditCardInput } from 'react-native-credit-card-input';
import RNPickerSelect from 'react-native-picker-select';

import CardBack from '../../../../assets/images/card-back.png';
import CardFront from '../../../../assets/images/card-front.png';
import { moneyMaskService, discountService } from '../../../../services/moneyService';
import colors from '../../../../styles/colors';

import styles from './styles';

const NoFatherPresent = ({ exam, selectedInstallments, onChange }) => {
  const labels = {
    name: 'Nome no cartão', number: 'Número do cartão', expiry: 'Expiração', cvc: 'CVC/CCV',
  };

  const placeholders = {
    name: 'uDNA', number: '1234 5678 1234 5678', expiry: 'mm/aa', cvc: 'cvc',
  };

  const installments = [];

  for (let index = 1; index < 13; index += 1) {
    if (index === 1) {
      installments.push({
        label: `À vista (1 x de R$ ${(Number(exam.price)/100.0)})`,
        value: 1,
      });
    } else {
      installments.push({
        label: `${index} x de R$ ${moneyMaskService((((Number(exam.price)/100.0)*((0.02*index)+1)) / index).toFixed(2))}`,
        value: index,
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.creditCard}>
        <CreditCardInput
          autoFocus
          requiresName
          requiresCVC
          allowScroll
          labels={labels}
          placeholders={placeholders}
          labelStyle={styles.label}
          inputStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
          cardImageFront={CardFront}
          cardImageBack={CardBack}
          validColor={colors.black}
          invalidColor={colors.red2}
          placeholderColor="darkgray"
          onChange={(card) => onChange({
            ...card.values,
            valid: card.valid,
          })}
        />
      </View>
      <View style={styles.pickerView}>
        <Text style={styles.label}>Número de parcelas</Text>
        <View style={styles.picker}>
          <RNPickerSelect
            value={selectedInstallments}
            onValueChange={(value) => onChange({ installments: value })}
            placeholder={{}}
            items={installments}
          />
        </View>
      </View>
    </View>
  );
};

NoFatherPresent.propTypes = {
  exam: propTypes.shape({
    id: propTypes.string.isRequired,
    price: propTypes.string.isRequired,
  }).isRequired,
  selectedInstallments: propTypes.number.isRequired,
  onChange: propTypes.func.isRequired,
};

export default NoFatherPresent;
