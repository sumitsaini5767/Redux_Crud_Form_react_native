import { StyleSheet, TextInput, View } from "react-native";

export default function InputField(props) {
  return (
    <View style={Styles.container}>
      <View style={Styles.txtContainer}>
        <TextInput
          value={props.textValue}
          placeholder={props.placeholder}
          onChangeText={props.change}
          keyboardType={props.type}
        />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    width: "100%",
    // marginTop: 15,
    marginBottom: 25,
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "#ff6a29",
    borderRightColor: "#ff6a29",
    borderLeftColor: "#ff6a29",
    borderTopColor: "white",
    borderBottomColor: "white",
    borderWidth: 5,
  },
  inputstyle: {
    height: 45,
    color: "white",
    fontSize: 20,
    width: "80%",
    justifyContent: "center",
    backgroundColor: "rgba(209, 221, 232, 0.75)",
    paddingLeft: 20,
    borderRadius: 10,
  },
  txtContainer: {
    width: "100%",
    borderRightColor: "white",
    borderLeftColor: "white",
    borderTopColor: "#574ab2",
    borderBottomColor: "#574ab2",
    borderWidth: 9,
  },
});
