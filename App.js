import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/navigation/Routes";
import { Provider } from "react-redux";
import store from "./src/redux/Store";
import { useEffect } from "react";
import { getFromAsync } from "./src/utils/Utils";
import { addFromStorage } from "./src/redux/Reducers/MainReducer";
import { AccessLocalStorage } from "./src/redux/Actions/Action";

export default function App() {
  (async () => {
    let data = await getFromAsync();
    if (data) {
      console.log("calling addFromStorage");
      AccessLocalStorage(data);
    }
  })();
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
