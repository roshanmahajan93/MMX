import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Task = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.task}
      onPress={() => navigation.navigate("WorkSummary")}
    >
      <Text style={styles.vendor}>My Task</Text>
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
        style={styles.taskChild}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={styles.vendor1}>20 tasks</Text>
      <View style={styles.taskItem} />
      <View style={[styles.taskInner, styles.taskSpaceBlock]} />
      <View style={[styles.rectangleView, styles.taskChild5Bg]} />
      <Image
        style={[styles.iconFeatherSun, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/icon-feathersun1.png")}
      />
      <View style={styles.taskChild1} />
      <Text style={[styles.vendor2, styles.vendorTypo1]}>Seawoods</Text>
      <Image
        style={styles.iconFeatherFileText}
        resizeMode="cover"
        source={require("../assets/icon-featherfiletext1.png")}
      />
      <View style={[styles.taskChild2, styles.taskSpaceBlock]} />
      <Text style={[styles.vendor3, styles.vendorTypo]}>21 Dec, 2021</Text>
      <Image
        style={[styles.iconFeatherMoon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/icon-feathermoon.png")}
      />
      <View style={[styles.taskChild3, styles.taskChildLayout]} />
      <View style={[styles.taskChild4, styles.taskChildSpaceBlock]} />
      <View style={[styles.taskChild5, styles.taskChildSpaceBlock]} />
      <Text style={styles.vendor4}>{`Ambika Yogkutir Towards
Thane station `}</Text>
      <View style={[styles.taskChild6, styles.taskChildShadowBox]} />
      <Image
        style={[styles.iconFeatherFileText1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon-featherfiletext1.png")}
      />
      <Image
        style={[styles.iconFeatherSun1, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/icon-feathersun1.png")}
      />
      <Text style={[styles.vendor5, styles.vendorTypo]}>14 Jan, 2022</Text>
      <View style={[styles.taskChild7, styles.taskChildLayout]} />
      <View style={[styles.taskChild8, styles.taskChildSpaceBlock]} />
      <View style={[styles.taskChild9, styles.taskChildSpaceBlock]} />
      <View style={[styles.taskChild10, styles.taskChildShadowBox]} />
      <Text style={[styles.vendor6, styles.vendorTypo1]}>
        Vashi Railway Station
      </Text>
      <Image
        style={[styles.iconFeatherFileText2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon-featherfiletext1.png")}
      />
      <Image
        style={[styles.iconFeatherMoon1, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/icon-feathermoon.png")}
      />
      <Text style={styles.vendor7}>21 Dec, 2021</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  taskSpaceBlock: {
    marginRight: 23,
    width: 94,
  },
  taskChild5Bg: {
    backgroundColor: Color.colorDarkorange,
    marginTop: -84,
  },
  iconLayout2: {
    height: 22,
    width: 22,
  },
  vendorTypo1: {
    marginTop: -42,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  vendorTypo: {
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkgray,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  iconLayout1: {
    height: 16,
    width: 16,
  },
  taskChildLayout: {
    marginRight: 19,
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
    borderBottomLeftRadius: Border.br_smi,
    borderTopLeftRadius: Border.br_smi,
    backgroundColor: Color.colorWhite,
  },
  taskChildSpaceBlock: {
    marginRight: 20,
    width: 94,
  },
  taskChildShadowBox: {
    marginRight: 341,
    height: 45,
    width: 48,
    elevation: 20,
    shadowRadius: 20,
    backgroundColor: Color.colorAliceblue_100,
    borderRadius: Border.br_smi,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#f2f4ff",
  },
  iconLayout: {
    marginRight: 357,
    width: 15,
    height: 18,
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
    marginRight: 300,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  iconFeatherSliders: {
    width: 20,
    height: 21,
    marginTop: -23,
    marginRight: 33,
  },
  iconFeatherSearch: {
    width: 18,
    marginTop: -19,
    marginRight: 84,
    height: 18,
  },
  taskChild: {
    width: 6,
    height: 6,
    marginTop: -18,
    marginRight: 31,
  },
  vendor1: {
    fontSize: FontSize.size_lg,
    marginRight: 325,
    marginTop: 29,
    color: Color.colorDarkgray,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  taskItem: {
    marginTop: 16,
    marginRight: 22,
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
    borderBottomLeftRadius: Border.br_smi,
    borderTopLeftRadius: Border.br_smi,
    backgroundColor: Color.colorWhite,
  },
  taskInner: {
    marginTop: -83,
    elevation: 4,
    shadowRadius: 4,
    height: 84,
    borderWidth: 1,
    borderColor: Color.colorGhostwhite_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#f2f4ff",
    backgroundColor: Color.colorWhite,
  },
  rectangleView: {
    height: 42,
    marginTop: -84,
    marginRight: 23,
    width: 94,
  },
  iconFeatherSun: {
    marginTop: -32,
    marginRight: 60,
  },
  taskChild1: {
    marginTop: -12,
    marginRight: 344,
    height: 45,
    width: 48,
    backgroundColor: Color.colorAliceblue_100,
    borderRadius: Border.br_smi,
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#f2f4ff",
  },
  vendor2: {
    marginRight: 256,
  },
  iconFeatherFileText: {
    marginRight: 360,
    marginTop: -11,
    width: 15,
    height: 18,
  },
  taskChild2: {
    height: 41,
    marginTop: -9,
    backgroundColor: Color.colorDarkslategray,
  },
  vendor3: {
    marginTop: -33,
    marginRight: 264,
  },
  iconFeatherMoon: {
    marginTop: -10,
    marginRight: 62,
  },
  taskChild3: {
    marginTop: 38,
  },
  taskChild4: {
    marginTop: -83,
    elevation: 4,
    shadowRadius: 4,
    height: 84,
    borderWidth: 1,
    borderColor: Color.colorGhostwhite_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#f2f4ff",
    backgroundColor: Color.colorWhite,
  },
  taskChild5: {
    height: 83,
    marginTop: -84,
    backgroundColor: Color.colorDarkorange,
  },
  vendor4: {
    marginTop: -73,
    marginRight: 146,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  taskChild6: {
    marginTop: -35,
  },
  iconFeatherFileText1: {
    marginTop: -31,
  },
  iconFeatherSun1: {
    marginRight: 56,
    marginTop: -16,
  },
  vendor5: {
    marginTop: 4,
    marginRight: 265,
  },
  taskChild7: {
    marginTop: 39,
  },
  taskChild8: {
    marginTop: -83,
    elevation: 4,
    shadowRadius: 4,
    height: 84,
    borderWidth: 1,
    borderColor: Color.colorGhostwhite_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#f2f4ff",
    backgroundColor: Color.colorWhite,
  },
  taskChild9: {
    height: 82,
    backgroundColor: Color.colorDarkslategray,
    marginTop: -84,
  },
  taskChild10: {
    marginTop: -63,
  },
  vendor6: {
    marginRight: 172,
  },
  iconFeatherFileText2: {
    marginTop: -11,
  },
  iconFeatherMoon1: {
    marginRight: 59,
    marginTop: -16,
  },
  vendor7: {
    fontSize: FontSize.size_sm,
    marginTop: -5,
    marginRight: 243,
    color: Color.colorDarkgray,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  task: {
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
    paddingTop: Padding.p_16xl,
    backgroundColor: Color.colorWhite,
  },
});

export default Task;
