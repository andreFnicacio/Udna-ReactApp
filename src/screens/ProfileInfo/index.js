import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import ProfileInfo from './ProfileInfo'

export default Props => (
    <View style={{flex:1}}>
        <View style={{flex:1}}>
            <ProfileInfo/>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#f2f2f2'}}>   
            <Image
                style={{
                    width: 100,
                    height: 15,
                    resizeMode: 'contain',
                    marginLeft: 10,
                    marginTop:5,
                    marginBottom:5,
                }}
                source={{ uri: 'https://udna-imagestatics.s3.amazonaws.com/img/Componente22.png', }}
            />
          <TouchableOpacity 
                style={{
                    marginLeft:-15,
                }}
                onPress={() => {
                    Props.navigation.openDrawer()
                    setTimeout(() => {
                        Props.navigation.closeDrawer()
                    }, 3000)
                }}>
            <Image
                style={{
                    width: 100,
                    height: 15,
                    resizeMode: 'contain',
                    marginRight: -15,
                    marginTop:5,
                    marginBottom:5,
                }}
                source={{ uri: 'https://udnas3prd-prd.s3.amazonaws.com/icons/hamburguerButton.png', }}
            />
            </TouchableOpacity>
        </View>
        
    </View>
)