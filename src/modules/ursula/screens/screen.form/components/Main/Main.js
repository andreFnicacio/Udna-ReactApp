import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Alert} from 'react-native'
//import Image from '../../assets/DysplayAnImage';



export default class trocarNome extends Component{
    render(){
        return(
            <View style={Style.body}>
                <View style={Style.header}>
                    <View style={Style.elipsesPorcent}>
                        <Image
                            style={Style.elipse1}
                            source={require('../assets/Elipse1.png')}
                        />
                        <Image
                            style={Style.elipse2}
                            source={require('../..components/assets/Elipse2.png')}
                        />
                        <Text style={Style.porcent}>100%</Text>
                    </View>                
                    <View>
                        <Text style={Style.genes}>Genes 0/101 líberados</Text>
                    </View>
                    <View>
                        <Button
                            title='LIBERAR GENES'
                            buttonStyle={Style.button1}
                            onPress={() => Alert.alert('Simples Botão')}>
                        </Button>
                        
                    </View>
                    <View style={Style.laboratorio}>
                        
                        <View>
                            <Image
                                style={Style.coleta}
                                ource={require('../../assets/assets/coleta.png')}
                            />
                        </View>
                        <View>
                            <Image
                                style={Style.dna}
                                source={require('../../assets/assets/dna.png')}
                            />
                        </View>
                        <View>
                            <Image
                                style={Style.lab}
                                source={require('../../assets/assets/Laboratorio.png')}
                            />
                        </View>
                            
                    </View>
                    <View style={Style.die}>
                        <Text style={Style.dieta}>Dieta opicional</Text>
                        <Image
                            style={Style.triangulo}
                            source={require('../../assets/assets/Cadeia.png')}
                        />
                        <View style={Style.positionButton2}>
                            
                        </View>
                    </View>
                </View>

                
            </View>
        )
    }
}



const Style = StyleSheet.create({
    body:{
        alignItems:'center',
        justifyContent:'center',
    },
    header: {
        justifyContent:'center',
        alignItems:'center',
        width:350,
        height:470,
        
       
    },
    elipsesPorcent:{
        marginTop:-120
    },
    elipse1: {    
        height:150,
        width:150,
    },
    elipse2:{
        
        height:150,
        width:150,
        marginLeft:10,
        marginTop:-140,
        marginBottom:5,
    },
    porcent:{
        color:'#fff',
        height:60,
        width:100,
        fontSize:40,
        marginLeft:50,
        marginTop:-120,
        marginBottom:40,
    },
    genes:{
        fontSize:20,
        letterSpacing: 0,
        color:'#9b88b8',
        textAlign: 'center',
        letterSpacing: 0,
        padding:50,
        marginTop: -50,
        marginBottom:-50,
        opacity: 1,
    },
    liberar:{
        alignItems:'center',
        height:35,
        width:200,
        color:'#fff',
        marginTop:35,
        borderRadius:30,
        backgroundColor:'#FF1B6A',
    },
    laboratorio:{
        alignItems:'center',
        width:80,
        marginTop:-5,
        justifyContent:'space-between',
    },
    coleta:{
        borderRadius:32,

        backgroundColor:'#5B3D8B',
        opacity:1,
        height: 45,
        width: 120,
        marginRight: 280,
        marginTop: 25,
    },
    dna:{
        height: 30,
        width: 180,
        marginTop: -36,
        marginLeft:10,
        resizeMode:'contain',

    },
    lab:{
        height: 60,
        width: 150,
        marginLeft: 300,
        marginTop: -51,
        resizeMode:'contain',
        
    },
    die:{
        alignItems:'center',
        marginTop:-40,
    },
    dieta:{
        fontSize:13,
        marginRight:205,
        marginTop:50,
    },
    triangulo:{
        height:100,
        width:100,
        marginLeft:220,
        marginTop:-30,
        padding:75,
    },
    button1:{
        height:40,
        width:250,
        opacity:1,
        borderRadius:20,
        backgroundColor:'#FF1B6A',

    },
    positionButton2:{
       marginLeft:270,
       marginTop:-130,
       width:100,
       height:100

    },
    button2:{
        height:40,
        width:40,
        opacity:1,
        borderRadius:20,
        backgroundColor:'#FF1B6A',
        
    },
    button3:{
        height:15,
        width:15,
        opacity:1,
        borderRadius:20,
        backgroundColor:'#9B88B8',
        
    },
    main:{
        height:750,
        width:350,
        backgroundColor:'#f2f2f2',
        
    },
    positionImgBody:{
        position:'absolute',
        marginTop:-40,
        marginLeft:-25,
    },
    dietetica:{
        marginLeft:50,
        marginTop:50,
        marginBottom:20,
    },
    fisica:{
        marginLeft:50,
        marginTop:15,
        marginBottom:20,
    },
    metabolismo:{
        marginLeft:50,
        marginTop:15,
        marginBottom:20,
    },
    sendie:{
        height:30,
        width:300,
        marginBottom:10,
        marginTop:10,
        resizeMode:'contain',
        alignItems:'center',
    },
    g0:{
        alignItems:'center',
        justifyContent:'space-between',
        opacity:1,
        marginTop:20
    },
    g1:{
        justifyContent:'center',
        width:90,
        height:150,
        marginBottom:15,
        marginRight:270,
    },
    g2:{
        justifyContent:'center',
        width:90,
        height:150,
        marginBottom:15,
        marginRight:50,
        marginTop:-182,
    },
    g3:{
        justifyContent:'center',
        width:90,
        height:150,
        marginBottom:15,
        marginLeft:155,
        marginTop:-155,
    },
    button4:{
        marginLeft:74,
        marginTop:-15
    },
});
  

/*
  <Text style={{fontSize:20}}>Teste</Text>                  
*/