import { StyleSheet } from "react-native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.bg,
    elevation: 2,
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    width: "100%",
    zIndex: 100,
  },
  leftView: {
    alignItems: "flex-start",
    paddingLeft: 10,
    width: "30%",
  },
  goBack: {
    backgroundColor: colors.gray4,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 8,
    borderRadius: 20,
  },
  back: {},
  middleView: {
    alignItems: "center",
    width: "30%",
  },
  rightView: {
    alignItems: "flex-end",
    paddingRight: 10,
    width: "30%",
  },
  rightLeftView: {
    alignItems: "flex-end",
    paddingRight: 10,
    width: "30%",
  },
  title: {
    color: colors.purple,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font22,
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "justify",
    height: 50,
    width: 234,
    marginTop: 13,
  },
  HTopRight: {
    alignItems: `center`,
    justifyContent: `space-between`,
  },
  HTopLeft: {
    alignItems: `center`,
    justifyContent: `space-between`,
  },
  Carta: {
    height: 25,
    width: 25,
  },
  Enviar: {
    height: 25,
    width: 25,
  },
});
