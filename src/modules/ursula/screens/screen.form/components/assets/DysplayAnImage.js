import React from 'react';
import {View, Image, StyleSheet} from 'react-native';


const DisplayAnImage = () => {
    return(
        <View style={style.Container}>
        <Image
            style={style.Elipse1}
            source={{url:'https://udna-imagestatics.s3.amazonaws.com/imgApp/Elipse1.svg'}}
        />
        </View>
    )
}

const style = StyleSheet.create({
    Container:{
        paddingTop: 50
    },
    Elipse1:{
        width: 50,
        height: 50,
    },
    Elipse2:{
        width: 50,
        height:50
    },
    Liberar3:{
        width:50,
        height:50
    }
});


export default DisplayAnImage;