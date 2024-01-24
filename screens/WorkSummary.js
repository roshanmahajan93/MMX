import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const WorkSummary = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.workSummary}
      onPress={() => navigation.navigate("Profile")}
    >
      <Text style={styles.vendor}>Work Summary</Text>
      <Image
        style={styles.iconFeatherSliders}
        resizeMode="cover"
        source={require("../assets/icon-feathersliders.png")}
      />
      <Image
        style={styles.iconFeatherSearch}
        resizeMode="cover"
        source={require("../assets/icon-feathersearch.png")}
      />
      <Image
        style={styles.workSummaryChild}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.vendor1, styles.vendorTypo2]}>Today</Text>
      <View style={styles.workShadowBox} />
      <Text style={styles.vendor2}>Seawoods</Text>
      <View style={[styles.workSummaryInner, styles.workChildLayout1]} />
      <View style={[styles.rectangleView, styles.workChildLayout]} />
      <Image
        style={styles.iconFeatherFileText}
        resizeMode="cover"
        source={require("../assets/icon-featherfiletext1.png")}
      />
      <Text style={[styles.vendor3, styles.vendorTypo1]}>Note added</Text>
      <Text style={[styles.vendor4, styles.vendorTypo]}>Banner Size 16X20</Text>
      <View style={styles.workChildShadowBox2} />
      <Text style={styles.vendor2}>Seawoods</Text>
      <View style={[styles.workSummaryChild2, styles.workChildShadowBox1]} />
      <View style={[styles.workSummaryChild3, styles.workChildShadowBox1]} />
      <Image
        style={styles.iconFeatherMapPin}
        resizeMode="cover"
        source={require("../assets/icon-feathermappin.png")}
      />
      <Text style={[styles.vendor6, styles.vendorTypo1]}>Location added</Text>
      <Text style={[styles.vendor7, styles.vendorTypo]}>Andheri West</Text>
      <Text style={[styles.vendor8, styles.vendorTypo2]}>20 Jan, 2022</Text>
      <View style={styles.workShadowBox} />
      <Text style={styles.vendor2}>Seawoods</Text>
      <View style={[styles.workSummaryChild5, styles.workChildLayout1]} />
      <View style={[styles.workSummaryChild6, styles.workChildLayout]} />
      <Image
        style={styles.iconFeatherFileText}
        resizeMode="cover"
        source={require("../assets/icon-featherfiletext1.png")}
      />
      <Text style={[styles.vendor3, styles.vendorTypo1]}>Note added</Text>
      <Text style={[styles.vendor4, styles.vendorTypo]}>Banner Size 16X20</Text>
      <View style={styles.workChildShadowBox2} />
      <Text style={styles.vendor2}>Seawoods</Text>
      <View style={[styles.workSummaryChild8, styles.workChildShadowBox]} />
      <View style={[styles.workSummaryChild9, styles.workChildShadowBox]} />
      <Text style={[styles.vendor13, styles.vendorTypo1]}>Image added</Text>
      <Image
        style={styles.iconFeatherCamera}
        resizeMode="cover"
        source={require("../assets/icon-feathercamera.png")}
      />
      <Text style={[styles.vendor7, styles.vendorTypo]}>Andheri West</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  vendorTypo2: {
    color: Color.colorDarkgray,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    marginLeft: 34,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  workChildLayout1: {
    height: 45,
    width: 48,
    marginTop: -21,
    borderRadius: Border.br_smi,
    marginLeft: 34,
  },
  workChildLayout: {
    marginLeft: 294,
    marginTop: -35,
    width: 96,
    borderRadius: Border.br_lg,
    height: 24,
  },
  vendorTypo1: {
    fontSize: FontSize.size_3xs,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  vendorTypo: {
    marginLeft: 97,
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkgray,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  workChildShadowBox1: {
    backgroundColor: Color.colorMistyrose,
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#f2f4ff",
  },
  workChildShadowBox: {
    backgroundColor: Color.colorLightsteelblue,
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#f2f4ff",
  },
  workChildShadowBox3: {
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#f2f4ff",
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
  vendor: {
    fontSize: FontSize.size_7xl,
    letterSpacing: -1,
    marginLeft: 34,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  iconFeatherSliders: {
    height: 21,
    marginTop: -28,
    marginLeft: 375,
    width: 20,
  },
  iconFeatherSearch: {
    width: 18,
    marginLeft: 326,
    marginTop: -19,
    height: 18,
  },
  workSummaryChild: {
    width: 6,
    height: 6,
    marginLeft: 391,
    marginTop: -18,
  },
  vendor1: {
    marginTop: 40,
  },
  workShadowBox: {
    alignSelf: "center",
    marginTop: 19,
    height: 84,
    width: 386,
    borderWidth: 1,
    borderColor: Color.colorGhostwhite_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 17,
    shadowRadius: 17,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#f2f4ff",
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorWhite,
  },
  vendor2: {
    fontSize: FontSize.size_base,
    marginTop: -64,
    marginLeft: 96,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  workSummaryInner: {
    marginTop: -21,
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#f2f4ff",
    backgroundColor: Color.colorAliceblue_100,
  },
  rectangleView: {
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#f2f4ff",
    backgroundColor: Color.colorAliceblue_100,
  },
  iconFeatherFileText: {
    width: 15,
    marginTop: -20,
    marginLeft: 51,
    height: 18,
  },
  vendor3: {
    marginTop: -16,
    marginLeft: 317,
  },
  vendor4: {
    marginTop: -3,
  },
  workChildShadowBox2: {
    marginTop: 37,
    alignSelf: "center",
    height: 84,
    width: 386,
    borderWidth: 1,
    borderColor: Color.colorGhostwhite_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 17,
    shadowRadius: 17,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#f2f4ff",
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorWhite,
  },
  workSummaryChild2: {
    marginTop: -21,
    height: 45,
    width: 48,
    borderRadius: Border.br_smi,
    marginLeft: 34,
  },
  workSummaryChild3: {
    marginLeft: 294,
    marginTop: -35,
    width: 96,
    borderRadius: Border.br_lg,
    height: 24,
  },
  iconFeatherMapPin: {
    width: 19,
    height: 23,
    marginLeft: 49,
    marginTop: -21,
  },
  vendor6: {
    marginLeft: 309,
    marginTop: -18,
  },
  vendor7: {
    marginTop: -5,
  },
  vendor8: {
    marginTop: 58,
  },
  workSummaryChild5: {
    marginTop: -21,
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#f2f4ff",
    backgroundColor: Color.colorAliceblue_100,
  },
  workSummaryChild6: {
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#f2f4ff",
    backgroundColor: Color.colorAliceblue_100,
  },
  workSummaryChild8: {
    marginTop: -21,
    height: 45,
    width: 48,
    borderRadius: Border.br_smi,
    marginLeft: 34,
  },
  workSummaryChild9: {
    marginLeft: 294,
    marginTop: -35,
    width: 96,
    borderRadius: Border.br_lg,
    height: 24,
  },
  vendor13: {
    marginLeft: 315,
    marginTop: -19,
  },
  iconFeatherCamera: {
    height: 17,
    marginTop: -14,
    marginLeft: 49,
    width: 20,
  },
  workSummary: {
    flex: 1,
    width: "100%",
    paddingTop: 40,
    backgroundColor: Color.colorWhite,
  },
});

export default WorkSummary;
