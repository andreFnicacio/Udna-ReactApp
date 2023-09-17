import { StyleSheet } from "react-native";
import fonts from "../../../../styles/fonts";
import colors from "../../../../styles/colors";

export default StyleSheet.create({
  title: {
    marginTop: 10,
    marginBottom: 10,
    color: colors.purple,
    fontSize: 20,
    fontFamily: fonts.family.semiBold,
  },
  dropdownContainer: {
    backgroundColor: colors.white,
    borderRadius: 20,
    justifyContent: "center",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: colors.gray3,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: "100%",
  },
  dropdownInput: {
    paddingTop: 20,
  },
});
