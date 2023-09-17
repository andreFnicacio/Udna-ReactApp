import propTypes from "prop-types";
import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Linking,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { useNavigation } from "react-navigation-hooks";

import caixa from "../../assets/images/caixa.png";
import carta from "../../assets/images/enviar.png";

import Button from "../Button";

import styles from "./styles";

const Header = ({ title, textButton, isToGoBack, onPressRight, onPress }) => {
  const { navigate, goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        {isToGoBack ? (
          <TouchableOpacity style={styles.goBack}>
            <Button text={"<"} style={styles.back} onPress={() => goBack()} />
          </TouchableOpacity>
        ) : (
          <Button />
        )}
      </View>
      <View style={styles.middleView}>
        {!!title && (
          <Text style={[styles.title, { textAlign: "center" }]}>{title}</Text>
        )}
      </View>
      <View style={styles.rightView}>
        {onPressRight ? (
          <TouchableOpacity onPress={() => navigate("Shopping")}>
            <View style={Style.HTopRight}>
              <Image
                style={Style.Carta}
                source={require("../../assets/images/caixa.png")}
              />
            </View>
          </TouchableOpacity>
        ) : (
          <Button />
        )}
        <View style={[styles.rightView, { marginTop: -26, marginRight: 25 }]}>
          {onPressRight ? (
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  "https://api.whatsapp.com/send?phone=5527992688559&text=Queria uma ajuda. Poderia me dar um suporte?"
                );
              }}
            >
              <View style={Style.HTopLeft}>
                <Image
                  style={Style.Enviar}
                  source={require("../../assets/images/enviar.png")}
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
  <Button text={"<"} onPress={() => goBack()} />
</TouchableOpacity>;

Header.propTypes = {
  title: propTypes.string,
  textButton: propTypes.string,
  isToGoBack: propTypes.bool,
  onPressRight: propTypes.func,
};

Header.defaultProps = {
  title: "",
  textButton: "",
  isToGoBack: false,
  onPressRight: null,
};

export default Header;

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
