import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Header from "./Header";

const Warn = ({}) => {
  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={Style.header}>
        <Text style={Style.title}>ALERTA DE SPOILER!!!</Text>
      </View>
      <ScrollView style={Style.scrollView}>
        <View style={Style.logo}>
          <Image
            style={{ width: 125, height: 125, marginLeft: 10 }}
            source={{
              uri:
                "https://udnas3prd-prd.s3.amazonaws.com/icons/uDNA_icone_Roxo_icone-01.png",
            }}
          />
          <Text style={Style.text}>
            Embreve novidades nesta área! Para continuar, entre em contato com
            nossa equipe de vendas!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Warn;

const Style = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    width: 415,
    backgroundColor: "#ffffff",
    marginTop: 5,
  },
  text: {
    fontSize: 20,
    color: "#000",
    marginLeft: 30,
    height: 100,
    width: 300,
  },
  logo: {
    marginTop: 200,
    marginRight: 250,
  },
});
