import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { moderateScale, verticalScale } from "react-native-size-matters";
import UserCard from "../components/UserCard";
import { useSelector } from "react-redux";

export default function MainScreen(props) {
  const data = useSelector((state) => state.data);
  const [EditItem, setEditItem] = useState(null);

  useEffect(() => {
    props.navigation.navigate("UserScreen", EditItem);
  }, [EditItem]);

  return (
    <View style={styles.mainContainer}>
      <Heading title={"Add Data"} />
      <FlatList
        style={styles.flatlistContainer}
        data={data}
        renderItem={({ item }) => (
          <UserCard item={item} setEditItem={setEditItem} />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={{ height: moderateScale(15) }} />
        )}
      />

      <TouchableOpacity
        style={styles.AddUserBtn}
        onPress={() => props.navigation.navigate("UserScreen", { id: "none" })}
      >
        <Text style={styles.AddBtnTxt}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: verticalScale(40),
    alignItems: "center",
    backgroundColor: "#c4c0e4",
  },
  flatlistContainer: {
    marginTop: moderateScale(14),
    width: "90%",
  },
  AddUserBtn: {
    paddingHorizontal: moderateScale(22),
    paddingVertical: moderateScale(8),
    borderRadius: moderateScale(10),
    backgroundColor: "#ff6a29",
    borderWidth: 5,
    borderColor: "white",
    elevation: 25,
    position: "absolute",
    right: moderateScale(10),
    bottom: moderateScale(25),
  },
  AddBtnTxt: {
    fontSize: 40,
    color: "white",
  },
});
