import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, useEffect} from "react";
import { Text, View } from "react-native";
import Container from "../../../../layouts/Container/container";
import Style from "./styles";
import { useNavigation } from "react-navigation-hooks";
import Accordion from "../../../../components/Lists/Accordion";
import Icon from "../../../../components/Icon";
import AWS from "aws-sdk";

let dataDoencas = [];

const FatorRisco = () => {
  const { getParam } = useNavigation();
  const [infoData, setInfoData] = useState();
  const description = "Listagem de doenças relacionadas ao fator de risco.";

	async function DoencasDescricoes() {
		const DoencasDescricoes = await AsyncStorage.getItem(getParam("title"));
		console.warn(DoencasDescricoes)
	}
	
	DoencasDescricoes();	  

  useEffect(() => {
    let awsConfig2 = {
      region: "us-east-1",
      accessKeyId: "AKIA564XY3QK6GKEQWUS",
      secretAccessKey: "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",
      dynamoDbCrc32: false,
      Limit:1000,
    };
    
    AWS.config.update(awsConfig2);
    var dynamodb = new AWS.DynamoDB();
    var params = {
      Key: {
       "id": {
         S: getParam("title")
        }
      }, 
      TableName: "doencasUser"
     };
     
     dynamodb.getItem(params, function(err, data) {
       if (err){
         console.log(err, err.stack);
        }else{     
          dataDoencas = [];
          for(let i = 0; i < data?.Item?.doencasTitle.L.length; i++){
            dataDoencas.push({
              id: i,
              header: {
                title: data?.Item?.doencasTitle.L[i]?.S.toString(),
              },
              body: {
                first_paragraph: data?.Item?.doencasDescription.L[i]?.S.toString(),
              },
            })
          }
          setInfoData(dataDoencas);
        }
     });
  });



  return (
    <Container onPressBack>
      <View style={Style.container}>
        <View style={Style.header}>
          <Text style={Style.title}>{getParam("title")}</Text>
        </View>
        <View>
          <Text style={Style.firstParagraph}>{description}</Text>
        </View>
        <View style={Style.accordionContainer}>
          <Accordion
            data={infoData}
            renderHeader={({ title }) => {
              return (
                <View style={Style.headerContainer}>
                  <Text style={Style.accordionTitle}>{title}</Text>
                  <Icon
                    name="keyboard-arrow-down"
                    source={"MaterialIcons"}
                    size={30}
                  />
                </View>
              );
            }}
            renderBody={({ first_paragraph }) => {
              return (
                <>
                  <Text style={Style.firstParagraph}>{first_paragraph}</Text>
                </>
              );
            }}
            isOpenDefault={false}
          />
        </View>
      </View>
    </Container>
  );
};

export default FatorRisco;
