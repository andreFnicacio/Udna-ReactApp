import { StyleSheet } from "react-native";

import colors from "../../../../styles/colors";
import fonts from "../../../../styles/fonts";

export default StyleSheet.create({
  button: {
    marginTop: 40,
  },
  container: {
    flex: 1,
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
    fontSize: fonts.size.font18,
    fontFamily: fonts.family.regular,
    color: colors.gray6,
    marginTop: 12,
  },
  description2: {
    fontSize: fonts.size.font18,
    color: colors.purple,
    fontFamily: fonts.family.regular,
    marginTop: 24,
    marginBottom: 12,
  },
  containerIcon: {
    alignItems: "center",
    marginTop: 20,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  info: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    width: "100%",
    marginLeft: 20,
    marginTop: 10,
  },
  key: {
    color: colors.black,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font14,
    width: "40%",
  },
  value: {
    color: colors.primary,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font16,
    textAlign: "right",
    width: "50%",
    marginRight: 20,
  },
  textIcon: {
    color: colors.primary,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font16,
    textAlign: "right",
    width: 250,
    marginTop: 15,
    marginLeft: -10,
  },
  textIcon2: {
    color: colors.primary,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font16,
    textAlign: "right",
    width: 250,
    marginTop: 15,
    marginLeft: -40,
  },
  textIcon3: {
    color: colors.primary,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font16,
    textAlign: "center",
    marginTop: -35,
  },
  touchable: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 5,
    width: 370,
    height: 50,
  },
  touchable2: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15,
    width: "100%",
    height: 10,
  },
  iconTracking: {
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 30,
    height: 50,
    width: 224,
  },
  iconEnter: {
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 30,
    height: 50,
  },
  switchView: {
    alignItems: "center",
    flexDirection: "column",
  },
  textInput: {
    marginTop: 10,
  },
  biometryText: {
    color: colors.primary,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font16,
    marginLeft: 5,
  },
});
