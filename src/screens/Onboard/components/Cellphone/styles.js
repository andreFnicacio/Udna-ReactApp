import { StyleSheet } from "react-native";
import colors from "../../../../styles/colors";
import fonts from "../../../../styles/fonts";

export default StyleSheet.create({
  textInputWhite: {
    marginTop: 20,
    color: "white",
  },
  textInputBlack: {
    marginTop: 20,
    color: "black",
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    color: colors.purple,
    fontSize: 20,
    fontFamily: fonts.family.semiBold,
  },
  subTitle: {
    marginTop: 10,
    marginBottom: 5,
    color: colors.purple,
    fontSize: 14,
  },
});
