import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const CompleteSection = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <Image
        style={[styles.iconFeatherChevronsLeft, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/icon-featherchevronsleft.png")}
      />
      <Image
        style={[styles.iconFeatherChevronsLeft1, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/icon-featherchevronsleft1.png")}
      />
      <Text style={[styles.vendor, styles.vendorTypo]}>Complete</Text>
      <Text style={[styles.vendor1, styles.vendorTypo]}>Reject</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  vendorTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    marginLeft: -30,
    top: 15,
    bottom: 15,
    borderRadius: Border.br_11xl,
    borderStyle: "solid",
    borderColor: Color.colorRoyalblue,
    borderWidth: 4,
    width: 60,
    left: "50%",
    position: "absolute",
  },
  iconFeatherChevronsLeft: {
    marginTop: -8.5,
    marginLeft: -68,
    width: 24,
    height: 21,
  },
  iconFeatherChevronsLeft1: {
    marginTop: -9.02,
    marginLeft: 47.17,
    width: 25,
    height: 22,
  },
  vendor: {
    marginTop: -13,
    left: "76.87%",
    color: Color.colorLightgreen,
    textAlign: "left",
  },
  vendor1: {
    marginTop: -9,
    left: "12.85%",
    color: Color.colorCrimson,
    textAlign: "right",
  },
  rectangleParent: {
    backgroundColor: Color.colorWhite,
    shadowColor: "#f2f4ff",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 428,
    height: 90,
    marginTop: 20.769999999999996,
  },
});

export default CompleteSection;
