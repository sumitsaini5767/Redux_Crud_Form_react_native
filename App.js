import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/navigation/Routes";
import { Provider } from "react-redux";
import store from "./src/redux/Store";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
