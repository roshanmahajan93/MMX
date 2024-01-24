import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Vendor = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.vendor}
      onPress={() => navigation.navigate("Home")}
    >
      <Image
        style={styles.undrawTeamGoalsRe4a3tIcon}
        resizeMode="cover"
        source={require("../assets/undraw-team-goals-re-4a3t.png")}
      />
      <Text style={styles.vendor1}>Vendor</Text>
      <Text style={[styles.vendor2, styles.vendor2Typo]}>
        Please select the Vendor
      </Text>
      <View style={[styles.vendorSelection, styles.continueButtonLayout]}>
        <Text style={[styles.username, styles.usernamePosition]}>
          Select Vendor
        </Text>
        <Image
          style={[styles.iconFeatherUser, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-featheruser.png")}
        />
        <Image
          style={[styles.iconIonicIosArrowDropdown, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowdropdowncircle.png")}
        />
      </View>
      <View style={[styles.continueButton, styles.continueButtonLayout]}>
        <Image
          style={[styles.lineIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/line.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle.png")}
        />
        <Text style={[styles.continue, styles.usernamePosition]}>
          Countinue
        </Text>
        <Image
          style={[styles.iconAwesomeLongArrowAltRi, styles.usernamePosition]}
          resizeMode="cover"
          source={require("../assets/icon-awesomelongarrowaltright.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  vendor2Typo: {
    color: Color.colorDarkgray,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  continueButtonLayout: {
    height: 48,
    width: 364,
    marginLeft: 11,
  },
  usernamePosition: {
    top: "50%",
    position: "absolute",
  },
  iconPosition: {
    width: 16,
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  undrawTeamGoalsRe4a3tIcon: {
    width: 387,
    height: 191,
  },
  vendor1: {
    fontSize: FontSize.size_11xl,
    letterSpacing: -1,
    color: Color.colorDarkslategray,
    marginTop: 40,
    marginLeft: 11,
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  vendor2: {
    marginLeft: 9,
  },
  username: {
    marginTop: -9.5,
    left: "10.49%",
    color: Color.colorDarkgray,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  iconFeatherUser: {
    marginTop: -7.89,
    left: 15,
    height: 18,
  },
  iconIonicIosArrowDropdown: {
    marginTop: -8.06,
    right: 20,
    height: 16,
  },
  vendorSelection: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGhostwhite_200,
    marginTop: 30,
  },
  lineIcon: {
    top: 1,
    right: 0,
    left: 0,
    height: 0,
  },
  rectangleIcon: {
    top: 0,
    right: 6,
    bottom: 0,
    left: 6,
    maxHeight: "100%",
  },
  continue: {
    marginTop: -13.5,
    left: "37.12%",
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  iconAwesomeLongArrowAltRi: {
    marginTop: -4.91,
    right: 41,
    width: 20,
    height: 10,
  },
  continueButton: {
    marginTop: 57,
  },
  vendor: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    paddingLeft: 21,
    paddingTop: 152,
    paddingRight: 20,
  },
});

export default Vendor;
