import propTypes from 'prop-types';
import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';

export default function props(){
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
        <Text style={styles.voltar}>Voltar</Text>
      </TouchableOpacity>
      <View style={styles.middleView}>
      <Text style={styles.title}>Perfil</Text>
      </View>
      <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
        <Text></Text>
      </TouchableOpacity>
    </View>
  )
};




/**
 * 
  <Button
        text={"Meus Pedidos"}
        icon={carta}
        onPress={() => navigate('Shopping')}
      />










<View style={[styles.rightView, {marginTop:-20}]}>
          {onPressRight ? (
            <TouchableOpacity onPress={() => Freshchat.showFAQs()}>
              <View style={Style.HTopLeft}>
                <Image
                  
                  style={Style.Enviar} 
                  source={require('../../assets/images/enviar.png')}
                />
              </View>
            </TouchableOpacity>
        ) : <Button 
          
      />}
    </View>

 */