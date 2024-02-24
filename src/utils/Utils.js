import AsyncStorage from "@react-native-async-storage/async-storage";
import AsyncKeys from "../constants/AsyncKeys";

const saveToAsync = async (value) => {
  const data = JSON.stringify(value);
  try {
    await AsyncStorage.setItem(AsyncKeys.User, data);
  } catch (error) {}
};

const getFromAsync = async () => {
  try {
    const data = await AsyncStorage.getItem(AsyncKeys.User);
    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {}
};

export { saveToAsync, getFromAsync };
