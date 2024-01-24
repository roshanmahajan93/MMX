import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.login}
      onPress={() => navigation.navigate("Splash")}
    >
      <ImageBackground
        style={styles.undrawCloudSyncRe02p1Icon}
        resizeMode="cover"
        source={require("../assets/undrawcloudsyncre02p1.png")}
      />
      <Text style={styles.login1}>Login</Text>
      <Text style={[styles.login2, styles.login2Typo]}>
        Please fill in the credentials
      </Text>
      <View style={[styles.username, styles.usernameLayout]}>
        <Text style={[styles.username1, styles.login3Position]}>Username</Text>
        <Image
          style={[styles.iconFeatherUser, styles.login3Position]}
          resizeMode="cover"
          source={require("../assets/icon-featheruser1.png")}
        />
      </View>
      <TextInput
        style={[styles.username2, styles.usernameLayout]}
        placeholder="Username"
        keyboardType="default"
        placeholderTextColor="#a6a6a6"
      />
      <TextInput
        style={[styles.password, styles.usernameLayout]}
        placeholder="Password"
        keyboardType="default"
        placeholderTextColor="#a6a6a6"
      />
      <Pressable style={[styles.loginButton, styles.usernameLayout]}>
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
        <Text style={[styles.login3, styles.login3Position]}>Login</Text>
      </Pressable>
      <ImageBackground
        style={styles.undrawCityLifeGnprIcon}
        resizeMode="cover"
        source={require("../assets/undrawcitylifegnpr.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  login2Typo: {
    color: Color.colorDarkgray,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  usernameLayout: {
    alignSelf: "center",
    height: 48,
    width: 364,
  },
  login3Position: {
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  undrawCloudSyncRe02p1Icon: {
    width: 389,
    height: 250,
    marginLeft: 20,
  },
  login1: {
    fontSize: FontSize.size_11xl,
    letterSpacing: -1,
    color: Color.colorDarkslategray,
    marginTop: -21,
    marginLeft: 32,
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  login2: {
    marginLeft: 29,
  },
  username1: {
    marginTop: -9.5,
    left: "13.51%",
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
    width: 16,
    height: 18,
  },
  username: {
    marginTop: 43,
    backgroundColor: Color.colorGhostwhite_200,
    borderRadius: Border.br_5xs,
    height: 48,
    width: 364,
  },
  username2: {
    marginTop: -48,
    backgroundColor: Color.colorGhostwhite_200,
    borderRadius: Border.br_5xs,
    height: 48,
    width: 364,
  },
  password: {
    marginTop: 28,
    backgroundColor: Color.colorGhostwhite_200,
    borderRadius: Border.br_5xs,
    height: 48,
    width: 364,
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
  login3: {
    marginTop: -13.5,
    left: "42.88%",
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    letterSpacing: 0,
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  loginButton: {
    marginTop: 67,
  },
  undrawCityLifeGnprIcon: {
    width: 538,
    height: 255,
    marginTop: 50,
    marginLeft: -55,
  },
  login: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    paddingTop: Padding.p_16xl,
  },
});

export default Login;
