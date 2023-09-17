/* eslint-disable react-native/no-inline-styles */
import LottieView from 'lottie-react-native';
import propTypes from 'prop-types';
import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';

import DNALoading from '../../../../assets/lottie/DNALoading.json';

import styles from './styles';

const Sugestions = ({ sugestions }) => {
  const [loadingIcon, setLoadingIcon] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        {sugestions.map((elt, index) => {
          console.log(elt);
          if (elt) {
            return (
              <TouchableOpacity
                key={elt.title}
                onPress={elt.onPress}
                style={[styles.touchable,
                  {
                    marginLeft: index === 0 ? 0 : 20,
                  }]}
              >
                {elt.icon && (
                  <View style={styles.iconContainer}>
                    <ProfileTitle text="Dados pessoais" onPress={() => onEditData('user')} />
                    <ProfileItem keyItem="CPF" valueItem={mappedUser?.cpf || '--'} style={styles.item} />
                    <ProfileItem keyItem="Nome" valueItem={mappedUser?.name || '--'} style={styles.item} />
                    <ProfileItem keyItem="Email" valueItem={mappedUser?.email || '--'} style={styles.item} />
                    <ProfileItem keyItem="Celular" valueItem={mappedUser?.cellphone || '--'} style={styles.item} />
                    <ProfileTitle text="Dados de endereço" onPress={() => onEditData('address')} style={styles.title} />
                    <ProfileItem
                      keyItem="Endereço"
                      valueItem={mappedUser.address
                        ? `${mappedUser.address?.zipCode}, 
                            ${mappedUser.address?.street}, 
                            ${mappedUser.address?.number}, 
                            ${mappedUser.address?.complement}, 
                            ${mappedUser.address?.neighborhood}, 
                            ${mappedUser.address?.city}, 
                            ${mappedUser.address?.stateInitials}`
                        : '--'}
                      style={styles.item}
                    />
                  </View>
                )}
                <Text style={styles.itemTitle}>{elt.title}</Text>
                {loadingIcon && (
                <LottieView
                  source={DNALoading}
                  autoPlay
                  loop
                  style={styles.loading}
                />
                )}
              </TouchableOpacity>
            );
          }
          return null;
        })}
      </ScrollView>
    </View>
  );
};

Sugestions.propTypes = {
  sugestions: propTypes.arrayOf(propTypes.shape({
    title: propTypes.string,
    icon: propTypes.number,
    onPress: propTypes.func,
  })),
};

Sugestions.defaultProps = {
  sugestions: [],
};

export default Sugestions;
