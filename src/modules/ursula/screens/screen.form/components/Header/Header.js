import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'



export default class Header extends Component{
    render(){
        return(
            <View>
                <View>
                    <Text style={Style.title}>          Carteira genética         </Text>
                </View>

            </View>
        )
    }
}

const Style = StyleSheet.create({
    title: {
        backgroundColor: '#ffffff',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#5B3D8B',
        position:'absolute',
        marginTop: 24,
        marginLeft:-180,
        padding:20
    }
})