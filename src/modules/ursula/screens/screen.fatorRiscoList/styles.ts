import { StyleSheet } from "react-native";
import Fonts from "../../../../styles/fonts";
import Colors from "../../../../styles/colors";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 1,
    width: "100%"
  },
  header: {
    justifyContent: "flex-start",
    elevation: 2,
    marginTop: 30,
    width: "100%"
  },
  title: {
    color: Colors.purple,
    fontSize: Fonts.size.font22,
    textAlign: "left",
    fontWeight: "bold",
  },
  scrollView: {
    width: "95%",
    height: "auto",
    backgroundColor: "#fff",
  },
  safeAreaView: {
    width: "100%",
    height: "100%",
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
  },
  info: {},
  titleDuvida: {
    fontSize: Fonts.size.font12,
    //fontFamily: 'Montserrat-SemiBold',
    color: Colors.purple,
    marginTop: 5,
    marginLeft: 5,
  },
  descutionDuvida: {
    fontSize: Fonts.size.font14,
    fontFamily: Fonts.family.regular,
    color: Colors.gray6,
    marginTop: 2,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  nextSteps: {},
  titleNextSteps: {
    fontSize: Fonts.size.font16,
    fontFamily: Fonts.family.regular,
    color: Colors.purple,
  },
  descriptionNextSteps: {
    fontSize: Fonts.size.font16,
    fontFamily: Fonts.family.regular,
    color: Colors.gray6,
    marginTop: 6,
    marginBottom: 6,
  },
  recommendations: {
    marginTop: 6,
  },
  products: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "auto",
    borderRadius: 10,
    borderColor: "#000",
    shadowOpacity: 0.1,
    marginTop: 12,
    marginBottom: 5,
  },
});

export default Style;
