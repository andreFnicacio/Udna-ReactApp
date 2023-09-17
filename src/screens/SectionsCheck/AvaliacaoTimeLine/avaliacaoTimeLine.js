import React , {useState} from 'react';
import { Text, View, TouchableOpacity, FlatList , ScrollView, Button, Switch,} from 'react-native';
import Container from '../../../layouts/Container/container';
import styles from './styles';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import { useNavigation } from "react-navigation-hooks";



const DATA = [
  {
    id: '123',
    title: 'Dyone',
    year: '1998',
    sexo: 'Masc',
    exam: 'Laudo',
    verify: 'Conta Principal',
   },
  {
    id: '456',
    title: 'Andre',
    year: '1998',
    sexo: 'Masc',
    exam: 'Laudo',
  },
  {
    id: '789',
    title: 'Rodrigo',
    year: '1998',
    sexo: 'Masc',
    exam: 'Laudo',
  },
  
  {
    id: '123',
    title: 'Dyone',
    year: '1998',
    sexo: 'Masc',
    exam: 'Laudo',
    verify: 'Conta Principal',
   },
  {
    id: '456',
    title: 'Andre',
    year: '1998',
    sexo: 'Masc',
    exam: 'Laudo',
  },
  {
    id: '789',
    title: 'Rodrigo',
    year: '1998',
    sexo: 'Masc',
    exam: 'Laudo',
  },
  
  {
    id: '123',
    title: 'Dyone',
    year: '1998',
    sexo: 'Masc',
    exam: 'Laudo',
    verify: 'Conta Principal',
   },
  {
    id: '456',
    title: 'Andre',
    year: '1998',
    sexo: 'Masc',
    exam: 'Laudo',
  },
  {
    id: '789',
    title: 'Rodrigo',
    year: '1998',
    sexo: 'Masc',
    exam: 'Laudo',
  },
  
];


 
const Item = ({ title, year, sexo, exam, verify }) => (
  <View>
    <TouchableOpacity
      style={styles.touchableViewScroll}
      onPress={() =>{}}
    >
    <View style={styles.ViewScroll}>
      <Text
        style={{
          marginLeft: 10,
          marginRight: 40,
          marginTop: 40,
          color: "#744CB6",
          fontSize: 16,
          fontFamily: fonts.family.semiBold,
        }}
      >
       {title}
      </Text>
    </View>
    </TouchableOpacity>
  </View>
   );
   
const Item2 = ({ title, year, sexo, exam, verify }) => (
  
  <View>
    <View style={styles.switchView}>
      <View style={{width: '80%', height: 30, backgroundColor: '#fff', borderRadius:15, }}>
        <Text style={styles.biometryText}>{title}</Text>
      </View>
      
      <Switch
        thumbColor={colors.white}
        trackColor={{ true: colors.primary }}
        ios_backgroundColor="#C2C2C2"
        
        onPress={()=>{
          
        }}
      />    
    </View>
  </View>
   );

const CheckDoenca = () => {
  
  const { navigate } = useNavigation();

  

  const renderItem1 = ({ item }) => (
    <Item title={item.title} year={item.year} sexo={item.sexo} exam={item.exam} verify={item.verify}/>
  );
  const renderItem2 = ({ item }) => (
    <Item2 title={item.title} year={item.year} sexo={item.sexo} exam={item.exam} verify={item.verify}/>
  );
  return (
    <Container 
      
      onPressBack
    >
      <View 
        style={styles.container}
      >
        <View style={{alignItems: 'center', marginTop:50,}}>
          <View style={{alignItems: 'flex-start', marginLeft:-50, width:300}}>
            <Text style={{fontSize:fonts.size.font26, color: colors.purple2}}>Informações adicionais</Text>
            <Text style={{marginTop:10, fontSize:fonts.size.font16, fontFamily:fonts.family.regular}}>Outras informações sobre sua saúde podem ser importantes para sua avaliação.</Text>
          </View>
        <View style={styles.viewScrollContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FlatList
            data={DATA}
            renderItem={renderItem1}
            keyExtractor={item => item.id}
            horizontal={true}
          />

          </ScrollView>
        </View>
        <View>
          <Text style={{ fontSize:fonts.size.font16, fontFamily:fonts.family.regular, marginTop:-10, marginBottom:10 }}>Você já foi diagnosticado(a) para alguma dessas doenças/condições abaixo? (Se necessário, marque mais de uma opção)</Text>
          <View>
            <ScrollView  showsHorizontalScrollIndicator={false}>
              <FlatList
                data={DATA}
                renderItem={renderItem2}
                keyExtractor={item => item.id}
              />
            </ScrollView>
          </View>
        </View>
        </View>
      </View>  
      
    </Container>
  );
};

export default CheckDoenca;










