import AsyncStorage from '@react-native-community/async-storage';
import React from "react";
import TypeformEmbed from "react-native-typeform-embed";
import axios from "axios"
 
const Typeform = () => {
    let fatoresList;
    let doencasList;    
    return (
        <TypeformEmbed
          url="https://udna.typeform.com/to/fXVGL49K"
          style={{height:"100px"}}
          onSubmit={() => {
            axios.get('https://fbvjt6tiaa.execute-api.us-east-1.amazonaws.com/default/lambdaursulaapi-dev-hello', {
                headers: { 
                  'Authorization': "Bearer tfp_DYbd83AQS6EE12BR97kcvPeC8jdPAsPkcfyW3vDYJEes_3pZ6sRwQ4LDS5M"
                }
              }).then(resp => {
                  AsyncStorage.setItem("TotalFatoresRisco", JSON.stringify(resp.data.input[0])) 
                  fatoresList = resp.data.input[0]
                  doencasList = resp.data.input[1]
                  console.warn(fatoresList)
                  for (let i = 0; i < fatoresList.length; i++){
                    AsyncStorage.setItem(fatoresList[i].toString(), JSON.stringify(doencasList[i]))
                  }                       
              }).catch((error) => {
                console.warn(error)
              })              
          }}
        />
      );
}

export default Typeform;