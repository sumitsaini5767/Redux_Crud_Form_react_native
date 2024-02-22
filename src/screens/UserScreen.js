import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { moderateScale, verticalScale } from "react-native-size-matters";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import { addNewUser, editUser } from "../redux/Actions/Action";

export default function UserScreen(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  const Submit = () => {
    if (name == "" || address == "" || age == "" || phone == "") {
      alert("value is empty");
    } else {
      if (EditItem) {
        const userdata = { name, address, age, phone, id: EditItem.id };
        editUser(userdata);
      } else {
        let unqid = Date.now();
        const userdata = { name, address, age, phone, id: unqid };
        addNewUser(userdata);
        setName("");
        setAddress("");
        setAge("");
        setPhone("");
      }
      props.navigation.navigate("MainScreen");
    }
  };

  let EditItem = props.route.params;
  useEffect(() => {
    if (EditItem) {
      setName(EditItem.name);
      setAddress(EditItem.address);
      setAge(EditItem.age);
      setPhone(EditItem.phone);
    } else {
      setName("");
      setAddress("");
      setAge("");
      setPhone("");
    }
  }, [EditItem]);
  return (
    <View style={styles.mainContainer}>
      <Heading title={"Enter Details"} />
      <View style={styles.formContainer}>
        <InputField
          textValue={name}
          placeholder="Enter Name"
          change={setName}
        />
        <InputField
          textValue={address}
          placeholder="Enter Address"
          change={setAddress}
        />
        <InputField
          textValue={age}
          placeholder="Enter Age"
          change={setAge}
          type={"numeric"}
        />
        <InputField
          textValue={phone}
          placeholder="Enter Phone"
          change={setPhone}
          type={"numeric"}
        />
      </View>
      <TouchableOpacity style={styles.btnstyle} on onPress={Submit}>
        <Text style={styles.btnTxtstyle}>{EditItem ? "Update" : "Submit"}</Text>
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
  formContainer: {
    marginTop: moderateScale(55),
    width: moderateScale(230),
  },
  btnstyle: {
    marginTop: moderateScale(25),
    backgroundColor: "#ff6a29",
    paddingHorizontal: moderateScale(14),
    paddingVertical: moderateScale(9),
    borderRadius: moderateScale(25),
    borderRadius: 5,
    borderBottomColor: "white",
    borderWidth: 4,
    borderLeftWidth: 9,
    borderTopColor: "#ff6a29",
    borderLeftColor: "white",
    borderRightColor: "#ff6a29",
  },
  btnTxtstyle: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
  },
});
