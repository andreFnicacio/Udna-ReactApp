import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import Header from "./Header/Header";
import styles from "./Style";

function Teste() {
    console.warn("testado");
}

const DATA = [
  {
    id: "1",
    title: "Informações Basicas",
    info: "Informações",
  },
  {
    id: "2",
    title: "Informações Pessoal",
    info: "Informações",
  },
  {
    id: "3",
    title: "Informações Endereço",
    info: "Informações",
  },
  {
    id: "4",
    title: "Alergias",
    info: "Informações",
  },
  {
    id: "5",
    title: "Exames",
    info: "Informações",
  },
];

const Item = ({ title, info,}) => (
  <TouchableOpacity onPress={() => Teste()}>
    <View style={styles.item}>
      <View style={styles.iconAvatar}>
        <Image style={styles.icon}  source={{ uri: 'https://udnas3prd-prd.s3.amazonaws.com/icons/uDnaFullPurple.png',  }}  />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.positSubTitle}>
        <Text style={styles.subTitle}>{info}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      info={item.info}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
      <View style={styles.iconAvatar}>
      <Image
          style={styles.avatar}
          source={{
            uri: 'https://udnas3prd-prd.s3.amazonaws.com/icons/uDnaFullPurple.png',
          }}
        />
      </View>
      <View style={styles.containerProfiles}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

/**
import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";


import Header from './Header/index';
import Style from './Style';
import Home from '../Home/index'



class Profile extends Component{
  logout= () => {
    console.warn('teste')
    const navigation = useNavigation(Home);
  }

  render(){
    const options= { email:'fulano@email.com' , secure:true }
  return (
    <SafeAreaView style={Style.safeAreaView}>
        <View style={Style.container}>

        <Image
          style={Style.avatar}
          source={{ uri: 'https://lh3.googleusercontent.com/a-/AOh14Gh44NycYAYF6t1W1U4cb1EWCIf1-3N266-eibbW_Q=s576-p-rw-no', }}/>
          <Text>Fulano de tal</Text>
          <Text>Fulano de tal</Text>
          <TouchableOpacity onPress={this.logout} style={Style.button}>
            <Text style={Style.buttonText}>Sair</Text>
          </TouchableOpacity>
        </View>
  </SafeAreaView>
  )
  }  
};

export default Profile;
 */
