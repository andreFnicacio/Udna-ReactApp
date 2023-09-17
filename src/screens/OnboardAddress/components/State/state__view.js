import React from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import { Text } from 'react-native';
import Title from '../../../../components/Title';
import states from '../../../../constants/states';
import { useFormikForm } from '../../../../providers/FormikProvider';

import styles from './styles';

const StateView = () => {
  const {
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormikForm();

  const onChangeText = (value, index) => {
    const state = states.filter((elt) => elt.id === index);
    setFieldValue('stateInitials', state[0].initials);
    setFieldValue('stateName', state[0].name);
  };

  return (
    <>
      <Title text="Em qual estado você mora?" />
      <Text style={styles.title}>Em qual estado você mora?</Text>
      <Dropdown
        containerStyle={styles.dropdownContainer}
        inputContainerStyle={styles.dropdownInput}
        lineWidth={0}
        value={`${values.stateInitials} - ${values.stateName}`}
        error={touched.stateInitials && errors.stateInitials}
        data={states.map((elt) => ({
          id: elt.id,
          value: `${elt.initials} - ${elt.name}`,
        }))}
        onChangeText={onChangeText}
        rippleOpacity={0}
      />
    </>
  );
};

export default StateView;
