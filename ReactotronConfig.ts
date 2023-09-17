import AsyncStorage from "@react-native-community/async-storage";
import Reactotron from "reactotron-react-native";
declare global {
  interface Console {
    tron: any;
  }
}

console.tron = Reactotron;

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure()
  .useReactNative()
  .connect();

export default reactotron;
