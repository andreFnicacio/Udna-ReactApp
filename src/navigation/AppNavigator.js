import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Auth from '../screens/Auth';
import AuthOrHome from '../screens/AuthOrHome';
import AuthOrOnboard from '../screens/AuthOrOnboard';
import ForgotPassword from '../screens/ForgotPassword';
import Onboard from '../screens/Onboard';
import OnboardAddress from '../screens/OnboardAddress';
import OnboardSuccess from '../screens/OnboardSuccess';

import BottomTabNavigator from './BottomTabNavigator';
//import DrawerNavigator from './drawerNavigator';

const AuthStack = createStackNavigator({
  Auth: {
    screen: Auth,
    navigationOptions: () => ({
      header: null,
    }),
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Onboard: {
    screen: Onboard,
    navigationOptions: () => ({
      header: null,
    }),
  },
  OnboardAddress: {
    screen: OnboardAddress,
    navigationOptions: () => ({
      header: null,
    }),
  },
  OnboardSuccess: {
    screen: OnboardSuccess,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

const AuthOrOnboardStack = createStackNavigator({
  AuthOrOnboard: {
    screen: AuthOrOnboard,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

const AuthOrHomeStack = createStackNavigator({
  AuthOrHome: {
    screen: AuthOrHome,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthOrHome: AuthOrHomeStack,
      AuthOrOnboard: AuthOrOnboardStack,
      App: BottomTabNavigator,
      //App: DrawerNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthOrHome',
    },
  ),
);
