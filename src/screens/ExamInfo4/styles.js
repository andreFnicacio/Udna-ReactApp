import { StyleSheet } from "react-native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export default StyleSheet.create({
  button: {
    marginBottom: 20,
    marginTop: 40,
    width: "50%",
  },
  discont: {
    alignItems: "center",
    marginTop: 10,
  },
  buttonAplic: {
    marginLeft: 230,
    marginTop: -50,
    width: "50%",
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: "space-between",
    width: "105%",
    borderRadius: 20,
    marginBottom: 10,
  },
  description: {
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font16,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 10,
    textAlign: "left",
  },
  infoView: {
    alignItems: "center",
    width: "100%",
  },
  price: {
    color: colors.green2,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font22,
    marginTop: 20,
  },
  priceDiscount: {
    color: colors.red2,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font22,
    marginTop: 10,
    textDecorationLine: "line-through",
  },
  switchSelector: {
    marginTop: 20,
    width: "70%",
  },
  textSwitch: {
    color: colors.white,
    fontSize: fonts.size.font14,
  },
  title: {
    marginTop: 20,
  },
  topView: {
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  input: {
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    textAlign: "center",
  },
});
