/* eslint-disable react/prop-types */
import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Resultados from "../assets/images/nav/appNovo/AvaliacoesCinza.png";
import ResultadosRoxo from "../assets/images/nav/appNovo/AvaliacoesRoxo.png";
import Loja from "../assets/images/nav/appNovo/lojaCinza.png";
import LojaRoxo from "../assets/images/nav/appNovo/lojaRoxo.png";
import Perfil from "../assets/images/nav/appNovo/perfilCinza.png";
import PerfilRoxo from "../assets/images/nav/appNovo/perfilRoxo.png";
import Principal from "../assets/images/nav/appNovo/ursulaCinza.png";
import PrincipalRoxo from "../assets/images/nav/appNovo/ursulaRoxo.png";
import TabBarIcon from "../components/TabBarIcon";
import TabBarLabel from "../components/TabBarLabel";
import FatorRiscoScreen from "../modules/ursula/screens/screen.fatorRisco";
import FatorRiscoListScreen from "../modules/ursula/screens/screen.fatorRiscoList";
import TipoFatorRiscoListScreen from "../screens/tipoFatorRiscoList/index";
import Assessments from "../screens/Assessments";
import Home from "../screens/Store";
import HomeUrsula from "../modules/ursula/screens/screen.home";
import TypeForm from "../modules/ursula/screens/screen.typeForm/index";
import Billet from "../screens/Billet";
import Consultation from "../screens/Consultation";
import SubCategoyyFormUrsula from "../screens/DoencasList";
import EditAddress from "../screens/EditAddress";
import EditUser from "../screens/EditUser";
import ExamInfo from "../screens/ExamInfo";
import ExamInfo2 from "../screens/ExamInfo2";
import ExamInfo3 from "../screens/ExamInfo3";
import ExamInfo4 from "../screens/ExamInfo4";
import ExamInfoUrsula from "../screens/ExamInfoUrsula";
import FormUrsula from "../modules/ursula/screens/screen.form";
import PaternityTest from "../modules/ursula/screens/screen.form/components/PaternityTest/index";
import NutritionalProfile from "../screens/NutritionalProfile";
import Paternity from "../screens/Paternity";
import PreAnalisys from "../screens/PreAnalysis";
import Profile from "../screens/Profile";
import ReportInfo from "../screens/ReportInfo";
import Reports from "../screens/Reports";
import CheckDoenca from "../modules/ursula/screens/screen.checarDoencas";
import Shopping from "../screens/Shopping";
import ShoppingInfo from "../screens/ShoppingInfo";
import Status from "../screens/Status/status";
import Store from "../screens/Store";
import Store2 from "../screens/Store2";
import StoreMKT from "../screens/StoreMKT";
import SubCategoryStore from "../screens/SubCategoryStore";
import Success from "../screens/Success";
import Welcome from "../screens/Welcome";
import { isIphoneXService } from "../services/dimensionsService";
import colors from "../styles/colors";

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      header: null,
      
    }),
  },
  Profile: {
    screen: Profile,
    navigationOptions: () => ({
      header: null,
    }),
  },
  HomeUrsula: {
    screen: HomeUrsula,
    navigationOptions: () => ({
      header: null,
    }),
  },
  TypeForm: {
    screen: TypeForm,
    navigationOptions: () => ({
      header: null,
    }),
  },
  PaternityTest: {
    screen: PaternityTest,
    navigationOptions: () => ({
      header: null,
    }),
  },
  NutritionalProfile: {
    screen: NutritionalProfile,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Consultation: {
    screen: Consultation,
    navigationOptions: () => ({
      header: null,
    }),
  },
  FormUrsula: {
    screen: FormUrsula,
    navigationOptions: () => ({
      header: null,
    }),
  },
  SubCategoyyFormUrsula: {
    screen: SubCategoyyFormUrsula,
    navigationOptions: () => ({
      header: null,
    }),
  },
  CheckDoenca: {
    screen: CheckDoenca,
    navigationOptions: () => ({
      header: null,
    }),
  },
  TipoFatorRiscoList: {
    screen: TipoFatorRiscoListScreen,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: true,
    }),
  },
  FatorRiscoList: {
    screen: FatorRiscoListScreen,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
    }),
  },
  FatorRisco: {
    screen: FatorRiscoScreen,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
    }),
  },
  Assessments: {
    screen: Assessments,
    navigationOptions: () => ({
      header: null,
      header: null,tabBarVisible: false,
    }),
  }, 
});

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  const { routes, index } = navigation.state;
  if (
    routes[index].routeName === "NutritionalProfile" ||
    routes[index].routeName === "Consultation" ||
    routes[index].routeName === "FormUrsula" ||
    routes[index].routeName === "CheckDoenca" ||
    routes[index].routeName === "TipoFatorRiscoList" ||
    routes[index].routeName === "FatorRiscoList" ||
    routes[index].routeName === "FatorRisco" ||
    routes[index].routeName === "HomeUrsula" ||
    routes[index].routeName === "Home" ||
    routes[index].routeName === "TypeForm"||
    routes[index].routeName === "Profile" ||
    routes[index].routeName === "Assessments"
    
  ) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const StoreStack = createStackNavigator({
  Store: {
    screen: Store,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
    }),
  },
  Store2: {
    screen: Store2,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
    }),
  },
  StoreMKT: {
    screen: StoreMKT,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
    }),
  },
  SubCategoryStore: {
    screen: SubCategoryStore,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
    }),
  },
  ExamInfo: {
    screen: ExamInfo,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
    }),
  },
  ExamInfo2: {
    screen: ExamInfo2,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
    }),
  },
  ExamInfo3: {
    screen: ExamInfo3,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
    }),
  },
  ExamInfo4: {
    screen: ExamInfo4,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
    }),
  },
  ExamInfoUrsula: {
    screen: ExamInfoUrsula,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
    }),
  },
  Billet: {
    screen: Billet,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
    }),
  },
  Success: {
    screen: Success,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
    }),
  },
  Shopping: {
    screen: Shopping,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
    }),
  },
  ShoppingInfo: {
    screen: ShoppingInfo,
    tabBarVisible: false,
  },
  Reports: {
    screen: Reports,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
    }),
  },
  ReportInfo: {
    screen: ReportInfo,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
    }),
  },
  EditAddress: {
    screen: EditAddress,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
    }),
  },
  EditUser: {
    screen: EditUser,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
    }),
  },
  PreAnalisys: {
    screen: PreAnalisys,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
    }),
  },
  Status: {
    screen: Status,
    navigationOptions: () => ({
      header: null,
      tabBarVisible: false,
    }),
  },
  Paternity: {
    screen: Paternity,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Welcome: {
    screen: Welcome,
    navigationOptions: () => ({
      header: null,
      header: null,tabBarVisible: false,
    }),
  },
  Assessments: {
    screen: Assessments,
    navigationOptions: () => ({
      header: null,
      header: null,tabBarVisible: false,
    }),
  }, 
});

StoreStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  const { routes, index } = navigation.state;
  if (
    routes[index].routeName === "ExamInfo" ||
    routes[index].routeName === "Billet" ||
    routes[index].routeName === "Success" ||
    routes[index].routeName === "FormUrsula" ||
    routes[index].routeName === "Shopping" ||
    routes[index].routeName === "Store2" ||
    routes[index].routeName === "Store" ||
    routes[index].routeName === "SubCategoryStore" ||
    routes[index].routeName === "ExamInfo2" ||
    routes[index].routeName === "ExamInfo3" ||
    routes[index].routeName === "ExamInfo4" ||
    routes[index].routeName === "Welcome" ||
    routes[index].routeName === "Reports" ||
    routes[index].routeName === "ShoppingInfo" ||
    routes[index].routeName === "Paternity" ||
    routes[index].routeName === "Assessments" ||
    routes[index].routeName === "StoreMKT"
  ) {
    tabBarVisible = false;
  }

  let tabBarVisibles = true;
  if (routes[index].routeName === "ReportInfo") {
    tabBarVisibles = false;
  }

  if (
    routes[index].routeName === "EditUser" ||
    routes[index].routeName === "EditAddress"
  ) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarVisibles,
  };
};

const getHeight = () => {
  if (isIphoneXService()) {
    return 80;
  }
  return 65;
};

const BottomTabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    Assessments,
    StoreStack,
    Profile,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOnPress: ({ defaultHandler }) => {
        if (navigation.state.routeName === "StoreStack") {
          navigation.navigate("Store", { storeType: 1, storeTitle: "Loja" });
        }
        defaultHandler();
      },
      tabBarLabel: ({ focused }) => {
        const { routeName } = navigation.state;
        let label = "";
        if (routeName === "HomeStack") {
          label = "Ursula";
        }
        if (routeName === "Assessments") {
          label = "Avaliações";
        }
        if (routeName === "StoreStack") {
          label = "Loja";
        }
        if (routeName === "Profile") {
          label = "Perfil";
        }
        return <TabBarLabel focused={focused} label={label} />;
      },
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName = "";
        if (routeName === "HomeStack") {
          iconName = !focused ? Principal : PrincipalRoxo;
        }
        if (routeName === "Assessments") {
          iconName = !focused ? Resultados : ResultadosRoxo;
        }
        if (routeName === "StoreStack") {
          iconName = !focused ? Loja : LojaRoxo;
        }
        if (routeName === "Profile") {
          iconName = !focused ? Perfil : PerfilRoxo;
        }
        return <TabBarIcon focused={focused} name={iconName} />;
      },
      tabBarOptions: {
        style: {
          alignSelf: "center",
          backgroundColor: colors.white,
          width: Platform.OS === "ios" ? "100%" : null,
          //borderRadius: Platform.OS === 'ios' ? 40 : null,
          //marginBottom: Platform.OS === 'ios' ? 20 : null,
          height: getHeight(),
          borderColor: "#fff",
          color: "#fff",
          borderTopWidth: 0,
          shadowColor: colors.gray3,
          shadowOffset: { height: 0, width: 0 },
          shadowOpacity: 1,
          shadowRadius: 5,
          elevation: 24,
        },
        tabStyle: {
          height: 60,
          marginTop: 5,
        },
      },
    }),
  }
);
export default BottomTabNavigator;
