import AsyncStorage from '@react-native-community/async-storage';
import { useQuery } from "@apollo/react-hooks";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { useNavigation } from "react-navigation-hooks";
import {
  getUserCustomized,
} from "../../../../graphql/queriesCustomized";
import Container from "../../../../layouts/Container/container";
import { useUser } from "../../../../providers/UserProvider";
import { mapUserService } from "../../../../services/userService";
import AWS from "aws-sdk";
import { onlyNumbers } from "../../../../utils/formatter"
import styles, { AvoidingViewContainer } from "./styles";
import { useUrsulaSections } from '../../hooks/useUrsulaSections';

interface IOption {
  text: string;
  value: string;
}

const finalOption = {
  text: "Retornar ao menu principal",
  value: "Finalizar",
}

let count = 0;
let fatorescOletados = [];

const Home = () => {
  const { user, setUser } = useUser();

  const { data: userData, loading: userLoading } = useQuery(getUserCustomized, {
    variables: { id: onlyNumbers(user.cpf) },
  });

  const {
    updateSections
  } = useUrsulaSections();

  const [responses, setResponses] = useState<string[]>([])

  const [textUrsula, setTextUrsula] = useState<string | undefined>();

  const [isNumberInput, setIsNumberInput] = useState(false);

  const [input, setInput] = useState("");

  const { navigate, getParam } = useNavigation();

  const currentSection = getParam("ursula");
  let parametro = getParam("parametroUser");


  useEffect(() => {
    if (userData) {
      const mappedUser = mapUserService(userData.getUser);
      setUser(mappedUser);
      sendResponseToUrsula();
    }
  }, [userData]);

  const [actions, setActions] = useState<IOption[]>([]);
  const [canReset, setCanReset] = useState(false);
  
  function sendDataUrsula(id: string ) {
    console.warn(id)
    /* This example updates an item in the Music table. It adds a new attribute (Year) and modifies the AlbumTitle attribute.  All of the attributes in the item, as they appear after the update, are returned in the response. */
    let awsConfig2 = {
      region: "us-east-1",
      accessKeyId: "AKIA564XY3QK6GKEQWUS",
      dynamoDbCrc32: false,
      secretAccessKey: "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",
    };

    AWS.config.update(awsConfig2);
    var dynamodb = new AWS.DynamoDB();
    var params = {
      Key: {
       "id": {
         S: id
        }
      }, 
      TableName: "fatoresRisco"
     };
     dynamodb.getItem(params, function(err, data) {
       if(err){
         console.warn(err, err.stack)
        }else{
         fatorescOletados.push(data.Item.name.S)
         console.warn(fatorescOletados);
        };           // successful response
     });    
  }


  function catchUserRequest(value: string){
    let awsConfig2 = {
      region: "us-east-1",
      accessKeyId: "AKIA564XY3QK6GKEQWUS",
      secretAccessKey: "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",
    };

    AWS.config.update(awsConfig2);
    var dynamodb = new AWS.DynamoDB();

    var params = {
      ExpressionAttributeNames: {
        "#AT": count.toString(),
      },
      ExpressionAttributeValues: {
        ":t": {
          S: value
        }
      },
      Key: {
        "id": {
          S: onlyNumbers(user.cpf)+"_"+parametro
        }
      },
      ReturnValues: "ALL_NEW",
      TableName: "respostaUser-prd",
      UpdateExpression: "SET #AT = :t"
    };
    dynamodb.updateItem(params, function (err, data) {
      if (err) console.warn(err, err.stack); // an error occurred
      else console.warn(data);           // successful response

    });
  }


  function sendResponseToUrsula(message: string | null = null) {
    let awsConfig2 = {
      region: "us-east-1",
      accessKeyId: "AKIA564XY3QK6GKEQWUS",
      secretAccessKey: "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",
    };

    AWS.config.update(awsConfig2);
    var lexruntime = new AWS.LexRuntime();

    var params = {
      botAlias: getParam("alias"),
      botName: getParam("contexto"),
      inputText: message ?? currentSection,
      userId: "4NGDOTTFCU",
    };
    lexruntime.postText(params, function (err, data) {
      if (err) {
        console.log(err);
      } // an error occurred
      else {
        console.warn(data)
        setTextUrsula(data.message);
        if (data?.message?.includes("Perfeito")) {
          setActions([
            finalOption
          ]);
          setIsNumberInput(false);
        }
        const retornoUrsula = data?.responseCard?.genericAttachments;
        if (retornoUrsula) {
          let allButtons: any[] = [];
          data?.responseCard?.genericAttachments?.map((item) => { allButtons = allButtons.concat(item?.buttons) })
          setActions(allButtons);
        }
        const isNotFirstQuestion = !!message;
        setCanReset(isNotFirstQuestion);

        console.tron.log(data);
      }
    });
  }

  function deleteToDataUrsula() {
    let awsConfig2 = {
      region: "us-east-1",
      accessKeyId: "AKIA564XY3QK6GKEQWUS",
      secretAccessKey: "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",
    };

    AWS.config.update(awsConfig2);
    var lexruntime = new AWS.LexRuntime();

    var params = {
      botAlias: getParam("alias") /* required */,
      botName: getParam("contexto") /* required */,
      userId: "4NGDOTTFCU" /* required */,
    };
    lexruntime.deleteSession(params, function (err, data) {
      if (err) console.log(err, err.stack);
      // an error occurred
      else console.log(data); // successful response
      setCanReset(false)
      sendResponseToUrsula()
    });
  }

  const onClickResponse = (response: string) => {
    switch (response) {
      case "Finalizar":
        AsyncStorage.setItem(getParam("ursula"), JSON.stringify(fatorescOletados))
        deleteToDataUrsula();
        fatorescOletados = [];
        navigate("HomeUrsula", { ursula: currentSection, parametro: parametro, count:count });
        break;

      default:
        count++;
        setResponses(prev => [...prev, response]);
        sendDataUrsula(response);
        sendResponseToUrsula(response);
    }
  }
  const renderItem = (item: IOption) => (
    <View key={item.text} style={styles.viewTouchableButton}>
      <TouchableOpacity
        onPress={() => {
          onClickResponse(item.value)
          if (item.text.includes("Retornar ao menu principal")) {
            console.warn("Not")
          }else{
            catchUserRequest(item.text)
          }          
        }}
        style={styles.touchableButton}
      >
        <Text style={styles.textTouchableButton}>{item.text}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Container
      onPressBack={true}
      loading={userLoading}
    >
      {canReset &&
        <View style={styles.viewTouchableButton}>
          <TouchableOpacity
            onPress={() => {
              setIsNumberInput(false);
              deleteToDataUrsula();
              count = 0;
            }}
            style={styles.touchableButton}
          >
            <Text style={styles.textTouchableButton}>Resetar</Text>
          </TouchableOpacity>
        </View>}
      <View style={styles.logo}>
        <Image
          style={styles.logImage}
          source={{
            uri:
              "https://udnas3prd-prd.s3.amazonaws.com/icons/uDnaFullPurple.png",
          }}
        />
      </View>
      <View style={styles.positionTitulo}>
        <Text style={styles.titulo}>{textUrsula}</Text>
      </View>
      {isNumberInput ? (
        <AvoidingViewContainer>
          <TextInput
            style={styles.input}
            onChangeText={setInput}
            value={input}
            placeholder="Digite"
            keyboardType={"number-pad"}
          />
          <Button
            title="Enviar"
            onPress={() => {
              setResponses(prev => [...prev, input]);
              sendResponseToUrsula(responses[0]);
            }}
          />
        </AvoidingViewContainer>
      )
        : <>{actions.map(item => {
          return renderItem(item)
        })}
        </>
      }
    </Container>
  );
};

export default Home;
