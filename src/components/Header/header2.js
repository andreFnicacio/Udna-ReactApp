import propTypes from "prop-types";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { NavigationEvents } from "react-navigation";
import { useNavigation } from "react-navigation-hooks";

import caixa from "../../assets/images/caixa.png";
import carta from "../../assets/images/enviar.png";

import Button from "../Button";

import styles2 from "./styles2";

const Header2 = ({ title, isToGoBack, onPressRight, onPress }) => {
  const { navigate, goBack } = useNavigation();

  return (
    <View style={styles2.container}>
      <View style={styles2.leftView}>
        {isToGoBack ? (
          <TouchableOpacity style={styles2.goBack}>
            <Button text={"<"} style={styles2.back} onPress={() => goBack()} />
          </TouchableOpacity>
        ) : (
          <Button />
        )}
      </View>
      <View style={styles2.middleView}>
        {!!title && (
          <Text style={[styles2.title, { textAlign: "center" }]}>{title}</Text>
        )}
      </View>
      <View style={styles2.rightView}>
        {onPressRight ? (
          <TouchableOpacity onPress={() => navigate("Shopping")}>
            <View style={Style.HTopRight}>
              <Image
                style={Style.Carta}
                source={require("../../assets/images/caixa2.png")}
              />
            </View>
          </TouchableOpacity>
        ) : (
          <Button />
        )}
        <View style={[styles2.rightView, { marginTop: -26, marginRight: 25 }]}>
          {onPressRight ? (
            <TouchableOpacity onPress={()=>{}}>
              <View style={Style.HTopLeft}>
                <Image
                  style={Style.Enviar}
                  source={require("../../assets/images/enviar2.png")}
                />
              </View>
            </TouchableOpacity>
          ) : (
            <Button />
          )}
        </View>
      </View>
    </View>
  );
};

<TouchableOpacity>
  <Button text={"Voltar"} onPress={() => goBack()} />
  <Image
    source={require("../../assets/images/caixa2.png")}
    onPress={() => goBack()}
  />
</TouchableOpacity>;

Header2.propTypes = {
  title: propTypes.string,
  textButton: propTypes.string,
  isToGoBack: propTypes.func,
  onPressRight: propTypes.func,
};

Header2.defaultProps = {
  title: "",
  textButton: "",
  isToGoBack: null,
  onPressRight: null,
};

export default Header2;

const Style = StyleSheet.create({
  HTopRight: {
    alignItems: `center`,
    justifyContent: `space-between`,
  },
  HTopLeft: {
    alignItems: `center`,
    justifyContent: `space-between`,
  },
  Carta: {
    height: 25,
    width: 25,
  },
  Enviar: {
    height: 25,
    width: 25,
  },
});
/**
 * 
  <Button
        text={"Meus Pedidos"}
        icon={carta}
        onPress={() => navigate('Shopping')}
      />










<View style={[styles.rightView, {marginTop:-20}]}>
          {onPressRight ? (
            <TouchableOpacity onPress={}>
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
