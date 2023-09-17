import propTypes from 'prop-types';
import React from 'react';
import {
  Animated, View,
} from 'react-native';


import ButtonRound from '../../components/ButtonRound';
import { useKeyboardAnimation } from '../../providers/KeyboardProvider';
import Container from '../Container';


import styles from './styles';

const WizardView = ({
  prevStep,
  current,
  nextStep,
  isFieldInvalid,
  loading,
  loadingButton,
  withoutBackButton,
}) => {
  const { keyboardHeight } = useKeyboardAnimation();

  return (
    <Container
      loading={loading}
      onPressBack={!withoutBackButton ? prevStep : null}
    >
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.currentView}>
            {current}
          </View>
        </View>

        <View style={styles.buttonView}>
          <ButtonRound
            disabled={isFieldInvalid || loadingButton}
            text="Continuar"
            onPress={nextStep}
            loading={loadingButton}
          />
          <Animated.View style={[styles.animatedView, { height: keyboardHeight }]} />
        </View>
      </View>
    </Container>
  );
};

WizardView.propTypes = {
  prevStep: propTypes.func.isRequired,
  current: propTypes.node.isRequired,
  nextStep: propTypes.func.isRequired,
  isFieldInvalid: propTypes.bool.isRequired,
  loading: propTypes.bool,
  loadingButton: propTypes.bool,
  withoutBackButton: propTypes.bool,
};

WizardView.defaultProps = {
  loading: false,
  loadingButton: false,
  withoutBackButton: false,
};

export default WizardView;
