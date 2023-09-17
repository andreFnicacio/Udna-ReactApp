import React from 'react';
import { Button, View, Image, TouchableOpacity, } from 'react-native';
import Warn from './Warn'

export default Props => (
    <View style={{flex:1}}>
        <View style={{flex:1}}>
            <Warn/>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Image
                style={{
                    width: 100,
                    height: 35,
                    resizeMode: 'contain',
                    marginLeft: 10,
                }}
                source={{ uri: 'https://udna-imagestatics.s3.amazonaws.com/img/Componente22.png', }}
                
            />
          <TouchableOpacity 
                style={{
                    marginLeft:-15,
                }}
                onPress={() => Props.navigation.openDrawer()}>
                <Image
                    style={{
                        width: 100,
                        height: 35,
                        resizeMode: 'contain',
                        marginRight: -15,
                    }}
                    source={{ uri: 'https://udnas3prd-prd.s3.amazonaws.com/icons/hamburguerButton.png', }}
                />
            </TouchableOpacity>
        </View>
    </View>
)