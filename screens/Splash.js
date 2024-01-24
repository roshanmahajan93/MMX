import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";

const Splash = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.splash}
      onPress={() => navigation.navigate("Vendor")}
    >
      <ImageBackground
        style={styles.undrawInformedDecisionP2lhIcon}
        resizeMode="cover"
        source={require("../assets/undrawinformeddecisionp2lh.png")}
      />
      <Text style={styles.growYourBusinessContainer}>
        <Text style={styles.grow}>
          <Text style={styles.gr}>GR</Text>
          <Text style={styles.o}>O</Text>
          <Text style={styles.gr}>W</Text>
        </Text>
        <Text style={styles.yourBusinessWith}>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.yourBusinessWith1}>{`Your 
Business 
with`}</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.mmx}>
          <Text style={styles.gr}>M</Text>
          <Text style={styles.o}>M</Text>
          <Text style={styles.gr}>X</Text>
        </Text>
      </Text>
      <Image
        style={styles.iconMetroSpinner1}
        resizeMode="cover"
        source={require("../assets/icon-metrospinner1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  undrawInformedDecisionP2lhIcon: {
    width: 411,
    height: 292,
  },
  gr: {
    color: Color.colorDarkslateblue,
  },
  o: {
    color: Color.colorTomato,
  },
  grow: {
    letterSpacing: 5,
    fontFamily: FontFamily.impact,
  },
  text: {
    color: Color.colorBlack,
  },
  yourBusinessWith1: {
    color: Color.colorDarkslategray,
  },
  yourBusinessWith: {
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: FontFamily.lucidaGrande,
  },
  mmx: {
    letterSpacing: 4,
    fontFamily: FontFamily.impact,
  },
  growYourBusinessContainer: {
    fontSize: 45,
    lineHeight: 63,
    textAlign: "left",
    marginTop: 46,
    marginLeft: 28,
  },
  iconMetroSpinner1: {
    width: 30,
    height: 29,
    marginTop: 50,
    marginRight: 1,
  },
  splash: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingLeft: 9,
    paddingTop: 190,
    paddingRight: 8,
  },
});

export default Splash;
