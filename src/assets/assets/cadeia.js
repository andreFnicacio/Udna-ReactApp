import React, {useRef} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Modalize } from 'react-native-modalize';

export default function Cadeia() {
    const modalizeRef = useRef(null);

    function onOpen(){
        modalizeRef.current?.open();
    }

    return(
        <View style={Style.container}>
            <TouchableOpacity onPress={onOpen}>
                <Image
                    
                    source={require('../assets/Mais.png')}
                />      
            </TouchableOpacity>
                            
            <Modalize
                ref={modalizeRef}
                snapPoint={200}
            >
                <View
                    style={{
                        flex:1,
                        height:200,
                        flexDirection:'row',
                        justifyContent:'space-around',
                        alignItems:'center',
                        
                    }}
                >
                    <TouchableOpacity style={[Style.button, { backgroundColor:'#29ae19' }]}>
                        <Text>EDITAR</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={[Style.button, {backgroundColor:'#ff0000'}]}>
                       <Text>EXCLUIR</Text>
                   </TouchableOpacity>
               </View>
           </Modalize>
        </View>
    )
}


const Style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    },
    button:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
});
  
