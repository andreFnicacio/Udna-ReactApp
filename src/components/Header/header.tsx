import React from "react";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import Icon from "../Icon";
import styles from "./styles";

interface HeaderProps {
  title: string;
  isToGoBack: boolean;
  onPressRight: () => void;
}
const Header = ({ title, isToGoBack, onPressRight }: HeaderProps) => {
  const { navigate, goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        {isToGoBack ? (
          <TouchableOpacity style={styles.goBack} onPress={() => goBack()}>
            <Icon size={20} name="arrow-back-ios" source="MaterialIcons" />
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={styles.middleView}>
        {!!title && (
          <Text style={[styles.title, { textAlign: "center" }]}>{title}</Text>
        )}
      </View>
      <View style={styles.rightView}>
        {!!onPressRight ? (
          <TouchableOpacity onPress={() => navigate("Shopping")}>
            <View style={styles.HTopRight}>
              <Image
                style={styles.Carta}
                source={require("../../assets/images/caixa.png")}
              />
            </View>
          </TouchableOpacity>
        ) : null}
        <View style={[styles.rightView, { marginTop: -26, marginRight: 25 }]}>
          {!!onPressRight ? (
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  "https://api.whatsapp.com/send?phone=5527992688559&text=Queria uma ajuda. Poderia me dar um suporte?"
                );
              }}
            >
              <View style={styles.HTopLeft}>
                <Image
                  style={styles.Enviar}
                  source={require("../../assets/images/enviar.png")}
                />
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default Header;
