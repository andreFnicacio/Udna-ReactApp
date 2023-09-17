import propTypes from 'prop-types';
import React from 'react';
import RadioForm, { RadioButton as RadioButtonSimple, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import colors from '../../styles/colors';

import styles from './styles';

const RadioButton = ({ radios, selected, onPress }) => (
  <RadioForm
    animation
  >
    {radios.map((elt) => (
      <RadioButtonSimple style={styles.radioButton} labelHorizontal key={elt.id}>
        <RadioButtonInput
          obj={elt}
          index={elt.id}
          initial={0}
          isSelected={elt.label === selected}
          onPress={() => onPress(elt.label)}
          borderWidth={1}
          buttonInnerColor={colors.primary}
          buttonOuterColor={colors.primary}
          buttonSize={15}
          buttonOuterSize={24}
          buttonStyle={{}}
        />
        <RadioButtonLabel
          obj={elt}
          index={elt.id}
          labelHorizontal
          onPress={() => onPress(elt.label)}
          labelStyle={styles.label}
          labelWrapStyle={{}}
        />
      </RadioButtonSimple>
    ))}
  </RadioForm>
);

RadioButton.propTypes = {
  radios: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
    label: propTypes.string.isRequired,
  }).isRequired).isRequired,
  selected: propTypes.string.isRequired,
  onPress: propTypes.func.isRequired,
};

export default RadioButton;
