import { StyleSheet } from "react-native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export default StyleSheet.create({
  button: {
    marginBottom: 20,
    marginTop: 40,
    width: "75%",
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.bg,
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
    marginTop: 35,
    marginLeft: 18,
    marginRight: 10,
    height: 70,
    textAlign: "left",
  },
  infoView: {
    alignItems: "center",
    width: "100%",
  },
  price: {
    color: colors.purple1,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font22,
  },
  priceDiscount: {
    color: colors.red2,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font22,
    marginTop: 10,
    textDecorationLine: "line-through",
  },
  switchSelector: {
    marginTop: 50,
    width: "75%",
  },
  textSwitch: {
    color: colors.white,
    fontSize: fonts.size.font14,
  },
  title: {
    marginTop: 100,
    marginRight: 20,
    color: colors.purple2,
  },
  topView: {
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  input: {
    height: 30,
    width: 200,
    marginTop: 10,
    backgroundColor: colors.white,
    borderColor: colors.blue1,
    borderWidth: 1,
    borderRadius: 20,
    textAlign: "center",
    color: colors.purple,
  },
  buttonAplic: {
    marginTop: 9,
    width: "30%",
    backgroundColor: colors.blue1,
    borderRadius: 10,
  },
  buttonComprar: {
    marginTop: 9,
    width: "80%",
    backgroundColor: colors.blue1,
    borderRadius: 10,
  },
  buttonLK: {
    marginTop: -70,
    marginLeft: 5,
    backgroundColor: "#FF1B6A",
    height: 35,
    shadowColor: colors.gray3,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
  discont: {
    marginLeft: 50000,
  },
  discount: {
    marginLeft: 50000,
  },
  positionTitle: {
    marginLeft: -25,
  },
  information: {
    marginTop: "5%",
    marginRight: 220,
    fontSize: fonts.size.font18,
    fontFamily: fonts.family.regular,
    color: colors.green3,
  },
  payValue: {
    top: 30,
    right: 110,
  },
});
