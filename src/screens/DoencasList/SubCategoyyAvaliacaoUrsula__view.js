import propTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import Container from "../../layouts/Container";
import AWS from "aws-sdk";
import StoreItem from "./components/StoreItem";
import styles from "./styles";

const DATA = [
  {
    id: "1",
    title: "Doenças ou Condições",
    description: "teste",
  },
  {
    id: "2",
    title: "Medicamento contínuo",
    description: "teste2",
  },
  {
    id: "3",
    title: "Suplemento contínuo",
    description: "teste3",
  },

  {
    id: "4",
    title: "Doenças autoimunes",
    description: "teste4",
  },
  {
    id: "5",
    title: "Características do sono",
    description: "teste5",
  },
  {
    id: "6",
    title: "Histórico familiar",
    description: "teste6",
  },
];

const StoreView = ({
  headerTitle,
  loading,
  onPress,
  categories,
  onChoiceItem,
  onPressBack,
  onSeeShopping,
}) => {
  const [priceExtra, setPriceExtra] = useState([]);
  const { navigate, getParam } = useNavigation();

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
      TableName: "fatoresRisco",
      FilterExpression: "category = :this_category",
      ExpressionAttributeValues: { ":this_category": sub },
      Limit: 100,
      dynamoDbCrc32: false,
    };

    var documentClient = new AWS.DynamoDB.DocumentClient();

    documentClient.scan(params, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        setPriceExtra(data.Items);
        //console.tron.log(data.Items);
      }
    });
  }
  subCategoryStore(sub);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigate("SubAvaliacaoUrsula", {
          categoryId: item.id,
          title: item.title,
          titleSub: titleSub,
          description: item.description,
        });
      }}
    >
      <View style={styles.item}>
        <Text style={styles.title}>{item.Title}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <Container headerTitle="" loading={loading} onPressBack>
      <View style={styles.container}>
        <Text style={styles.titleCategory}>{titleSub}</Text>
        <View style={styles.positionCategory}>
          <Text style={styles.category}>
            Saiba os fatores de risco e doenças que estão relacionados à sua
            saúde em geral.
          </Text>
        </View>

        <View style={styles.categories}>
          <FlatList
            data={priceExtra}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
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
