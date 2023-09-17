import { FlatList, StyleSheet, Text, View } from "react-native";
import Icon, { IconItem } from "./index";

import React from "react";
import { storiesOf } from "@storybook/react-native";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 20 },
  margin: {
    borderWidth: 1,
    paddingVertical: 15,
    marginVertical: 10,
    paddingLeft: 10,
  },
});

const items: Array<{
  text: string;
  props: IconItem;
}> = [
  {
    text: "arrow-right",
    props: {
      source: "FontAwesome",
      name: "arrow-right",
    },
  },
  {
    text: "car",
    props: {
      source: "FontAwesome",
      name: "car",
    },
  },
];

storiesOf("global/components/Icon", module).add("default", () => {
  return (
    <FlatList
      alwaysBounceVertical={false}
      style={styles.container}
      data={items}
      renderItem={({ item }) => (
        <>
          <Text>{item.text}</Text>
          <View style={styles.margin}>
            <Icon {...item.props} />
          </View>
        </>
      )}
      keyExtractor={(_, index) => index.toString()}
    />
  );
});
