import propTypes from 'prop-types';
import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { useNavigation } from "react-navigation-hooks";
import WizardView from './wizard__view';

const WizardContainer = ({
  steps,
  form,
  goBack,
  loading,
  loadingButton,
}) => {
  const [step, setStep] = useState(0);
  const { navigate } = useNavigation();
  const nextStep = () => {
    if (step < steps.length - 1) {
      Keyboard.dismiss();
      setTimeout(() => {
        setStep(step + 1);
      }, 300);
    } else {
      setTimeout(() => {
        form.handleSubmit();
      }, 300);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      Keyboard.dismiss();
      setTimeout(() => {
        setStep(step - 1);
      }, 300);
    } else {
      goBack();
    }
  };

  const next = () => {
    if (steps[step].function) {
      steps[step].function(form, nextStep);
    } else {
      nextStep();
    }
  };

  const isFieldInvalid = () => !steps[step].fields.every((field) => !form.errors[field]);

  return (
    <WizardView
      prevStep={prevStep}
      current={steps[step].component}
      nextStep={next}
      isFieldInvalid={isFieldInvalid()}
      loading={loading}
      loadingButton={loadingButton}
      withoutBackButton={steps[step].withoutBackButton}
    />
  );
};

WizardContainer.propTypes = {
  steps: propTypes.arrayOf(propTypes.shape({
    fields: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
    withoutBackButton: propTypes.bool,
    function: propTypes.func,
    component: propTypes.node.isRequired,
  })).isRequired,
  form: propTypes.shape().isRequired,
  goBack: propTypes.func,
  loading: propTypes.bool,
  loadingButton: propTypes.bool,
};

WizardContainer.defaultProps = {
  goBack: null,
  loading: false,
  loadingButton: false,
};

export default WizardContainer;
