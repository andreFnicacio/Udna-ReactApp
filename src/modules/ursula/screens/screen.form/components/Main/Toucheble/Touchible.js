import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, TouchableHighlight, Alert, Button} from 'react-native'


export default function(){

    const [cont,setCont]=useState(0)

    return(
        <View>
            <TouchableHighlight>
                <Text>Teste</Text>
                <Button
                    title="Press me"
                    color="#f194ff"
                    onPress={() => Alert.alert('Button with adjusted color pressed')}
                />
            </TouchableHighlight>
            <Text>{cont}</Text>
        </View>
    )
}


const Style = StyleSheet.create({
    botao:{
        
    }
});