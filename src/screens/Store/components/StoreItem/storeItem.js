import LottieView from 'lottie-react-native';
import propTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

import DNALoading from '../../../../assets/lottie/DNALoading.json';

import styles from './styles';

const StoreItem = ({ elt, onPress }) => {
  const [loadingIcon, setLoadingIcon] = useState(false);
  const { navigate} = useNavigation();

  return (
    <View key={elt.id} style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          navigate('Store2', {getId: onPress, title: elt.title});
        }}
      >
        {elt.icon && (
        <Image
          source={{ uri: elt.icon }}
          style={styles.icon}
          resizeMode="contain"
          onLoadStart={() => setLoadingIcon(true)}
          onLoadEnd={() => setLoadingIcon(false)}
        />
        )}
        {loadingIcon && (
        <LottieView
          source={DNALoading}
          autoPlay
          loop
          style={styles.loading}
        />
        )}
        <View style={styles.itemView}>
          <Text style={styles.title}>{elt.title}</Text>
          <Text style={styles.subtitle}>
            {elt.subtitle.slice(0, 100)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

StoreItem.propTypes = {
  elt: propTypes.shape({
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    price: propTypes.string.isRequired,
    icon: propTypes.node,
  }).isRequired,
  onPress: propTypes.func.isRequired,
};

export default StoreItem;
