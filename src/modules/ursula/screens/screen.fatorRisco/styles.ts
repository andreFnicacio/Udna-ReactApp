import { StyleSheet } from "react-native";
import Fonts from "../../../../styles/fonts";
import Colors from "../../../../styles/colors";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 1,
    width: "100%",
  },
  header: {
    justifyContent: "flex-start",
    elevation: 2,
    marginTop: 30,
  },
  headerContainer:{
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 12,
    borderColor: Colors.gray2,
  },
  accordionTitle: {
    color: Colors.green3,
    fontSize: Fonts.size.font18,
    fontFamily: Fonts.family.regular,
    fontWeight: "bold",
    marginTop: 8,
  },
  title: {
    color: Colors.purple,
    fontSize: Fonts.size.font22,
    textAlign: "left",
    marginBottom: 12,
    fontWeight: "bold",
  },
  firstParagraph: {
    fontSize: Fonts.size.font16,
    fontFamily: Fonts.family.regular,
    color: Colors.gray6,
    marginBottom: 12,
  },
  secondParagraph: {
    fontSize: Fonts.size.font16,
    fontFamily: Fonts.family.regular,
    color: Colors.purple,
  },
  accordionContainer: {
    marginTop: 6,
  },
});

export default Style;
