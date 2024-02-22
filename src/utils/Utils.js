import AsyncStorage from "@react-native-async-storage/async-storage";

const saveToAsync = async (key, value) => {
  const data = JSON.stringify(value);
  try {
    await AsyncStorage.setItem("@MySuperStore:key", "I like to save it.");
  } catch (error) {}
};

const getFromAsync = (key) => {
  const data = JSON.parse(key);
  try {
  } catch (error) {}
};
