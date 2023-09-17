import propTypes from 'prop-types';
import React from 'react';
import { View, Text, Animated } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

import ButtonRound from '../../components/ButtonRound';
import Title from '../../components/Title';
import { BILLET, CREDIT_CARD } from '../../constants/payment';
import Container from '../../layouts/Container';
import { useKeyboardAnimation } from '../../providers/KeyboardProvider';
import { masks } from '../../services/maskService';
import { moneyMaskService, discountService } from '../../services/moneyService';
import colors from '../../styles/colors';

import Billet from './components/Billet';
import CreditCard from './components/CreditCard';
import styles from './styles';

const ExamInfoView = ({
  loading,
  exam,
  selectedPayment,
  shouldBuyKit,
  card,
  onPressBack,
  onPressChangePayment,
  onChangeCreditCard,
  onPressBuy,
}) => {
  const { keyboardHeight } = useKeyboardAnimation();

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

  const getDiscount = () => {
    if (shouldBuyKit
       && (selectedPayment === 0 || (selectedPayment === 1 && card.installments === 1))) {
      return (
        <>
          <Text style={styles.price}>
            {`R$ 87,00`}
          </Text>
        </>
      );
    }
    return (
      <Text style={styles.price}>
        {`R$ 87,00`}
      </Text>
    );
  };

  return (
    <Container
      loading={loading}
      scrollEnabled
      headerTitle="Informações"
      onPressBack={() => navigate('Principal')}
    >
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.infoView}>
            <Title color="gray" text={"Kit"} style={styles.title} />
            {!shouldBuyKit && <Text style={styles.description}>{"Kit de auto-coleta (mucosa bucal) para teste de relações parentais uDNA. O kit pode ser utilizado para qualquer teste de investigação familiar entre você e supostos parentes. Esse produto contempla o kit de auto-coleta e o frete de envio para a sua residência. "}</Text>}
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
        <ButtonRound
          text={!shouldBuyKit ? 'Escolher pagamento' : 'Comprar'}
          onPress={onPressBuy}
          style={styles.button}
          disabled={!shouldBuyKit ? false : getDisabled()}
        />
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
