import { StyleSheet } from "react-native";

import colors from "../../../../styles/colors";
import fonts from "../../../../styles/fonts";
export default StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
    height: "100%",
  },
  header: {
    justifyContent: "flex-start",
    elevation: 2,
    marginTop: 30,
  },
  title: {
    color: colors.purple,
    fontSize: fonts.size.font22,
    textAlign: "left",
    fontWeight: "bold",
  },
  description: {
    fontSize: fonts.size.font16,
    fontFamily: fonts.family.regular,
    color: colors.gray6,
    marginTop: 6,
    marginBottom: 6,
  },
  buttonView: {
    height: 100,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    marginBottom: 50,
    marginTop: 50,
  },
});
