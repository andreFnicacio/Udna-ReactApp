import { Dimensions, Platform } from 'react-native';

const isIphoneXService = () => {
  const dimen = Dimensions.get('window');

  if (Platform.OS === 'ios' && ((dimen.height === 812 || dimen.width === 812)
  || (dimen.height === 896 || dimen.width === 896))) {
    return true;
  }
  return false;
};

export { isIphoneXService };
