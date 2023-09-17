import propTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

import List from '../../components/Lists/List';
import { NUTRITIONAL_PROFILE, PROFESSIONAL_RECOMMENDATIONS } from '../../constants/reports';
import Container from '../../layouts/Container';
import colors from '../../styles/colors';

import styles from './styles';

const ReportsView = ({
  loading,
  selectedType,
  reports,
  onChangeType,
  onChoiceReport,
}) => {
  const types = () => {
    const NP = NUTRITIONAL_PROFILE.split(' ');
    const PR = PROFESSIONAL_RECOMMENDATIONS.split(' ');

    return [{
      label: `${NP[0]} \n ${NP[1]}`,
      value: 0,
    }, {
      label: `${PR[0]} \n ${PR[1]}`,
      value: 1,
    }] 
  };

  const textResponses = {
    0: 'Você não possui um Laudo Genético.',
  };
  return (
    <Container
      loading={loading}
      headerTitle="Resultados"
      onPressBack={true}
    >
      <View style={styles.container}>
        {reports[0].list.length !== 0
          ? <List data={reports[0].list} onPress={onChoiceReport} />
          : <Text style={styles.text}>{textResponses[0]}</Text>}
      </View>
    </Container>
  );
};

ReportsView.propTypes = {
  loading: propTypes.bool.isRequired,
  selectedType: propTypes.number.isRequired,
  reports: propTypes.arrayOf(propTypes.shape({
    type: propTypes.string.isRequired,
    list: propTypes.arrayOf(propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      displayName: propTypes.string.isRequired,
    }).isRequired).isRequired,
  }).isRequired).isRequired,
  onChangeType: propTypes.func.isRequired,
  onChoiceReport: propTypes.func.isRequired,
};

export default ReportsView;