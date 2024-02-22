import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export default function Heading({ title }) {
  return (
    <View style={styles.HeadingContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  HeadingContainer: {
    width: "100%",
    height: moderateScale(80),
    backgroundColor: "#ff6a29",
    alignItems: "center",
    borderBottomColor: "#574ab2",
    borderBottomWidth: 3,
    borderBottomLeftRadius: moderateScale(25),
    borderBottomRightRadius: moderateScale(25),
    paddingVertical: verticalScale(10),
  },
  titleContainer: {
    paddingVertical: scale(5),
    paddingHorizontal: moderateScale(15),
    backgroundColor: "white",
    borderColor: "#574ab2",
    borderWidth: 3,
    borderRadius: 35,
  },
  title: {
    color: "#2b3941",
    fontSize: 25,
    fontWeight: "500",
  },
});
