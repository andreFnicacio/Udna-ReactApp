import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    elevation: 2,
    flexDirection: "row",
    height: 60,
    justifyContent: "center",
    shadowColor: "#fff",
    shadowOffset: { height: 5, width: 0 },
    shadowOpacity: 0.5,
    width: "100%",
    zIndex: 100,
  },
  title: {
    color: colors.purple,
    fontFamily: "MontSerrat-SemiBold",
    fontSize: fonts.size.font22,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: 50,
    width: 234,
    marginTop: 10,
  },
  safeAreaView: {
    width: "auto",
    height: "auto",
  },
});
