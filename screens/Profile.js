import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.profile}
      onPress={() => navigation.navigate("CreateAndEditTask")}
    >
      <Image
        style={styles.path44Icon}
        resizeMode="cover"
        source={require("../assets/path-44.png")}
      />
      <Image
        style={styles.iconAwesomeUser}
        resizeMode="cover"
        source={require("../assets/icon-awesomeuser1.png")}
      />
      <Image
        style={styles.iconAwesomeCheckCircle}
        resizeMode="cover"
        source={require("../assets/icon-awesomecheckcircle.png")}
      />
      <Text style={styles.vendor}>Kavita Patil</Text>
      <View style={[styles.profileChild, styles.bottomtabShadowBox]} />
      <Text style={[styles.vendor1, styles.vendorTypo]}>Notification</Text>
      <Image
        style={[styles.iconFeatherBell, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon-featherbell1.png")}
      />
      <View style={[styles.profileItem, styles.profileLayout]} />
      <Text
        style={[styles.vendor2, styles.vendorTypo]}
      >{`Help & Support`}</Text>
      <Image
        style={[styles.iconFeatherHelpCircle, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon-featherhelpcircle.png")}
      />
      <View style={[styles.profileInner, styles.profileLayout]} />
      <Text style={[styles.vendor2, styles.vendorTypo]}>Rate Us</Text>
      <Image
        style={styles.iconFeatherStar}
        resizeMode="cover"
        source={require("../assets/icon-featherstar.png")}
      />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Text style={[styles.vendor2, styles.vendorTypo]}>About MMX</Text>
      <Image
        style={styles.iconAwesomeGooglePlay}
        resizeMode="cover"
        source={require("../assets/icon-awesomegoogleplay.png")}
      />
      <View style={[styles.profileChild1, styles.lineViewLayout]} />
      <Text style={[styles.vendor2, styles.vendorTypo]}>Logout</Text>
      <Image
        style={styles.iconFeatherPower}
        resizeMode="cover"
        source={require("../assets/icon-featherpower.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bottomtabShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowColor: "#f2f4ff",
    backgroundColor: Color.colorWhite,
  },
  vendorTypo: {
    marginLeft: 80,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  iconLayout: {
    width: 19,
    marginLeft: 36,
  },
  profileLayout: {
    height: 2,
    width: 429,
    borderTopWidth: 1,
    borderColor: Color.colorGhostwhite_100,
    borderStyle: "solid",
    marginLeft: 2,
  },
  lineViewLayout: {
    marginTop: 28.560000000000002,
    height: 2,
    width: 429,
    borderTopWidth: 1,
    borderColor: Color.colorGhostwhite_100,
    borderStyle: "solid",
  },
  iconPosition2: {
    top: "50%",
    position: "absolute",
  },
  iconPosition1: {
    marginTop: -10.5,
    left: "50%",
  },
  iconPosition: {
    width: 24,
    top: "50%",
    position: "absolute",
  },
  path44Icon: {
    height: 60,
    marginLeft: 36,
    width: 60,
  },
  iconAwesomeUser: {
    width: 31,
    height: 35,
    marginTop: -47.44,
    marginLeft: 50,
  },
  iconAwesomeCheckCircle: {
    width: 16,
    height: 16,
    marginTop: -8.44,
    marginLeft: 76,
  },
  vendor: {
    fontSize: FontSize.size_xl,
    marginLeft: 37,
    marginTop: 14.56,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  profileChild: {
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    width: 428,
    height: 408,
    marginTop: 50.56,
    marginLeft: 3,
  },
  vendor1: {
    marginTop: -372.44,
  },
  iconFeatherBell: {
    marginTop: -19.439999999999998,
    height: 20,
  },
  profileItem: {
    marginTop: 25.560000000000002,
    marginLeft: 2,
  },
  vendor2: {
    marginTop: 27.560000000000002,
  },
  iconFeatherHelpCircle: {
    marginTop: -22.439999999999998,
    height: 19,
  },
  profileInner: {
    marginTop: 26.560000000000002,
    marginLeft: 2,
  },
  iconFeatherStar: {
    width: 20,
    marginTop: -20.439999999999998,
    marginLeft: 33,
    height: 19,
  },
  lineView: {
    marginLeft: 2,
  },
  iconAwesomeGooglePlay: {
    width: 15,
    height: 17,
    marginTop: -18.439999999999998,
    marginLeft: 38,
  },
  profileChild1: {
    marginLeft: -3,
  },
  iconFeatherPower: {
    width: 18,
    marginLeft: 35,
    marginTop: -22.439999999999998,
    height: 20,
  },
  profile: {
    flex: 1,
    width: "100%",
    paddingTop: 39,
    backgroundColor: Color.colorWhite,
  },
});

export default Profile;
