import propTypes from "prop-types";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Picker,
} from "react-native";
import { useNavigation } from "react-navigation-hooks";
import Container from "../../layouts/Container";
import AWS from "aws-sdk";
import { Button, Menu, Divider, Provider } from "react-native-paper";
import styles from "./styles";

const DATA = [
  {
    id: "1",
    title: "Sobrepeso		",
    description: "teste",
  },
];

const StoreView = ({ loading }) => {
  const [priceExtra, setPriceExtra] = useState([]);
  const { navigate, getParam } = useNavigation();
  const [selectedValue, setSelectedValue] = useState("java");
  const sub = getParam("value");
  const titleSub = getParam("title");

  function subCategoryStore(sub) {
    let awsConfig2 = {
      region: "us-east-1",
      accessKeyId: "AKIA564XY3QK6GKEQWUS",
      secretAccessKey: "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",
    };

    AWS.config.update(awsConfig2);

    var params = {
      TableName: "Exam-3tn77dv2gbag7ibwijizdpc7sa-prd",
      FilterExpression: "categoryId = :this_category",
      ExpressionAttributeValues: { ":this_category": sub },
      dynamoDbCrc32: false,
    };

    var documentClient = new AWS.DynamoDB.DocumentClient();

    documentClient.scan(params, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        setPriceExtra(data.Items);
      }
    });
  }
  subCategoryStore(sub);
  //<Text style={styles.title}>{item.title}</Text>//
  const renderItem = ({ item }) => {
    return (
      <View>
        <View style={styles.piker}>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            navigate("SubCategoyyAvaliacaoUrsula", {
              category: item.id,
              title: item.title,
              titleSub: titleSub,
              description: item.description,
            });
          }}
        >
          <View style={styles.item}>
            <Text style={styles.title}>
              Diabetes tipo II e resistência à insulina{" "}
            </Text>
          </View>
        </TouchableOpacity>
        <Provider>
          <View
            style={{
              paddingTop: 50,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Menu
              //visible={visible}
              //onDismiss={closeMenu}
              anchor={<Button /*onPress={openMenu}*/>Show menu</Button>}
            >
              <Menu.Item onPress={() => {}} title="Item 1" />
              <Menu.Item onPress={() => {}} title="Item 2" />
              <Divider />
              <Menu.Item onPress={() => {}} title="Item 3" />
            </Menu>
          </View>
        </Provider>
      </View>
    );
  };

  return (
    <Container headerTitle="" loading={loading} onPressBack>
      <View style={styles.container}>
        <View>
          <Text style={styles.titleCategory}>Sobrepeso</Text>
          <View style={styles.positionCategory}>
            <Text style={styles.category}>
              Listagem de doenças relacionadas ao fator de risco.
            </Text>
          </View>

          <View style={styles.categories}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

StoreView.propTypes = {
  headerTitle: propTypes.string.isRequired,
  loading: propTypes.bool,
  categories: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      exams: propTypes.arrayOf(
        propTypes.shape({
          id: propTypes.string,
          categoryId: propTypes.string,
          title: propTypes.string,
          description: propTypes.string,
          price: propTypes.string,
          icon: propTypes.node,
        }).isRequired
      ),
    }).isRequired
  ).isRequired,
  onChoiceItem: propTypes.func.isRequired,
  onSeeShopping: propTypes.func.isRequired,
};

StoreView.defaultProps = {
  loading: false,
};

export default StoreView;
