import AWS from "aws-sdk";
import propTypes from "prop-types";
import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import Container from "../../layouts/Container";
import styles from "./styles";

const StoreView = ({ loading }) => {
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

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigate("StoreMKT", {
          categoryId: item.id,
          title: item.title,
          titleSub: titleSub,
          description: item.description,
        });
      }}
    >
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <Container headerTitle="" loading={loading} onPressBack>
      <View style={styles.container}>
        <View>
          <View style={styles.positionImagePurple}>
            <Image
              style={styles.imageViewScroll}
              source={{
                uri:
                  "https://udnas3prd-prd.s3.amazonaws.com/icons/appUrsulav6/circuloCategorias.png",
              }}
            />
          </View>

          <View style={styles.positionCategory}>
            <Text style={styles.category}>Categoria</Text>
          </View>
          <Text style={styles.titleCategory}>{titleSub}</Text>
          <View style={styles.categories}>
            <FlatList
              data={priceExtra}
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
