import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import { deleteExisting } from "../redux/Actions/Action";

export default function UserCard({ item, navigation }) {
  const handleDeleteBtn = (id) => {
    deleteExisting(id);
  };

  const handleEditBtn = (item) => {
    navigation.navigate("UserScreen", item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.styledContainer}>
        <View style={styles.AllText}>
          <View style={styles.textStyleContainer}>
            <View>
              <Text style={styles.textStyle}>Name : </Text>
            </View>
            <View style={styles.valueTextConatiner}>
              <Text style={styles.valueText}>{item.name}</Text>
            </View>
          </View>
          <View style={styles.textStyleContainer}>
            <View>
              <Text style={styles.textStyle}>Address : </Text>
            </View>
            <View style={styles.valueTextConatiner}>
              <Text style={styles.valueText}>{item.address}</Text>
            </View>
          </View>
          <View style={styles.textStyleContainer}>
            <View>
              <Text style={styles.textStyle}>Age : </Text>
            </View>
            <View style={styles.valueTextConatiner}>
              <Text style={styles.valueText}>{item.age}</Text>
            </View>
          </View>
          <View style={styles.textStyleContainer}>
            <View>
              <Text style={styles.textStyle}>Phone : </Text>
            </View>
            <View style={styles.valueTextConatiner}>
              <Text style={styles.valueText}>{item.phone}</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.EditBtn}
            onPress={() => handleEditBtn(item)}
          >
            <Text style={styles.btnTxt}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.EditBtn}
            onPress={() => handleDeleteBtn(item.id)}
          >
            <Text style={styles.btnTxt}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 5,
    borderBottomColor: "white",
    borderTopColor: "white",
    borderRightColor: "#ff6a29",
    borderLeftColor: "#ff6a29",
    borderWidth: 2,
    justifyContent: "space-between",
    padding: moderateScale(2),
  },
  textStyleContainer: {
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(5),
    // width: moderateScale(250),
    flexDirection: "row",
    alignItems: "center",
    marginBottom: moderateScale(1),
  },
  textStyle: {
    fontSize: 17,
    fontWeight: "500",
  },
  AllText: {
    borderWidth: 9,
    // borderColor: "#ff6a29",
    padding: moderateScale(5),
    backgroundColor: "#f4f2f2",
    borderRadius: moderateScale(10),
    width: moderateScale(230),
    borderTopColor: "#574ab2",
    borderBottomColor: "#574ab2",
    borderRightColor: "white",
    borderLeftColor: "white",
  },
  valueTextConatiner: {
    // paddingHorizontal: moderateScale(10),
    // backgroundColor: "#b8c2b6",
    // borderRadius: 25,
    // justifyContent: "center",
    // height: moderateScale(25),
  },
  valueText: {
    fontSize: 17,
  },
  styledContainer: {
    padding: moderateScale(5),
    backgroundColor: "#ff6a29",
    borderRadius: 5,
    borderTopColor: "#574ab2",
    borderBottomColor: "#574ab2",
    borderRightColor: "white",
    borderLeftColor: "white",
    borderWidth: 2,
    flexDirection: "row",
  },
  EditBtn: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    backgroundColor: "#574ab2",
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(10),
  },
  buttons: {
    marginLeft: moderateScale(9),
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  btnTxt: {
    color: "white",
  },
});
