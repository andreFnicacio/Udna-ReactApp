import { StyleSheet } from 'react-native';

import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginTop: 20,
    width: '100%',
  },
  creditCard: {
    height: 300,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 2,
    marginVertical: 10,
    padding: 10,
    shadowColor: colors.gray3,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: '100%',
  },
  inputContainer: {
    borderBottomWidth: 0,
    width: '100%',
  },
  label: {
    alignSelf: 'flex-start',
    color: colors.black,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font14,
  },
  picker: {
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 2,
    marginTop: 10,
    padding: 10,
    shadowColor: colors.gray3,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: '100%',
  },
  pickerView: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
  },
});
