import { StyleSheet } from "react-native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export default StyleSheet.create({
  button: {
    marginBottom: 20,
    marginTop: 40,
    width: "100%",
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.bg,
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    borderRadius: 20,
    marginBottom: 10,
  },
  description: {
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font16,
    width: 300,
    textAlign: "left",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  infoView: {
    alignItems: "center",
    width: "100%",
  },
  price: {
    color: colors.purple,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font20,
    marginTop: 30,
    textAlign: "center",
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
    width: "100%",
  },
  textSwitch: {
    color: colors.white,
    fontSize: fonts.size.font14,
  },
  positionTitle: {
    marginLeft: -25,
  },
  title: {
    marginTop: "25%",
    marginRight: 50,
    color: "#5A3D8A",
    fontSize: fonts.size.font22,
  },
  information: {
    marginTop: "2%",
    marginRight: 220,
    fontSize: fonts.size.font18,
    fontFamily: fonts.family.regular,
    color: colors.green3,
  },
  text: {
    marginTop: 20,
  },
  topView: {
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  buttonLK: {
    marginBottom: 50,
    marginTop: 50,
    marginLeft: 5,
    backgroundColor: "#5B3D8B",
    width: 200,
    height: 40,
    shadowColor: colors.gray3,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
});
