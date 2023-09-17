import propTypes from 'prop-types';
import React from 'react';
import {
  View, TouchableOpacity, ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../../../styles/colors';

import styles from './styles';

const SwitchButton = ({ buttons, onPress, style }) => (
  <View style={[styles.container, style]}>
    <Icon size={40} name="navigate-before" color={colors.gray3} />
    <View style={styles.switchView}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        {buttons.map((elt) => (
          <TouchableOpacity
            key={elt.id}
            style={styles.button}
            onPress={() => onPress(elt.id)}
          >
            {elt.icon}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
    <Icon size={40} name="navigate-next" color={colors.gray3} />
  </View>
);

SwitchButton.propTypes = {
  buttons: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    icon: propTypes.node.isRequired,
  }).isRequired).isRequired,
  onPress: propTypes.func.isRequired,
  style: propTypes.shape(),
};

SwitchButton.defaultProps = {
  style: null,
};

export default SwitchButton;
