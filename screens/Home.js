import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.home} onPress={() => navigation.navigate("Task")}>
      <Text style={styles.vendor}>Hello, Kavita !</Text>
      <Image
        style={styles.iconFeatherBell}
        resizeMode="cover"
        source={require("../assets/icon-featherbell.png")}
      />
      <Image
        style={styles.homeChild}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={styles.vendor1}>Welcome back</Text>
      <Text style={[styles.vendor2, styles.vendorTypo5]}>My Task</Text>
      <View
        style={[styles.iconFeatherCalendarParent, styles.vendorGroupLayout]}
      >
        <Image
          style={styles.iconFeatherCalendar}
          resizeMode="cover"
          source={require("../assets/icon-feathercalendar.png")}
        />
        <Text style={[styles.vendor3, styles.vendorIconPosition]}>
          Today’s Work
        </Text>
        <Text style={[styles.vendor4, styles.vendorTypo4]}>20</Text>
      </View>
      <View style={[styles.vendorParent, styles.vendorLayout]}>
        <Text style={[styles.vendor5, styles.vendorTypo3]}>Pending Work</Text>
        <Text style={[styles.vendor6, styles.vendorTypo4]}>6</Text>
        <Image
          style={styles.iconFeatherServer}
          resizeMode="cover"
          source={require("../assets/icon-featherserver.png")}
        />
        <Image
          style={[styles.iconFeatherClock, styles.iconPosition2]}
          resizeMode="cover"
          source={require("../assets/icon-featherclock.png")}
        />
      </View>
      <View style={[styles.vendorGroup, styles.vendorGroupLayout]}>
        <Text style={[styles.vendor7, styles.vendorIconPosition]}>
          Mounting Removal
        </Text>
        <Text style={[styles.vendor4, styles.vendorTypo4]}>3</Text>
        <Image
          style={[styles.iconFeatherMonitor, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/icon-feathermonitor.png")}
        />
      </View>
      <View style={[styles.vendorContainer, styles.vendorLayout]}>
        <Text style={[styles.vendor9, styles.vendorTypo3]}>{`Pending Mounting
Removal`}</Text>
        <Text style={[styles.vendor6, styles.vendorTypo4]}>0</Text>
        <Image
          style={[styles.iconFeatherMonitor1, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/icon-feathermonitor1.png")}
        />
        <Image
          style={[styles.iconFeatherAlertOctagon, styles.iconPosition2]}
          resizeMode="cover"
          source={require("../assets/icon-featheralertoctagon.png")}
        />
      </View>
      <Text style={[styles.vendor11, styles.vendorTypo5]}>Recent</Text>
      <View style={[styles.homeItem, styles.homeItemLayout]} />
      <Image
        style={styles.homeInner}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Text style={[styles.vendor12, styles.vendorTypo1]}>
        Web Application Development
      </Text>
      <Image
        style={styles.iconFeatherCalendar1}
        resizeMode="cover"
        source={require("../assets/icon-feathercalendar1.png")}
      />
      <Text style={[styles.vendor13, styles.vendorTypo]}>03 Jan, 2022</Text>
      <View style={[styles.rectangleView, styles.homeItemLayout]} />
      <Image
        style={styles.homeInner}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.vendor14, styles.vendorTypo]}>
        Mobile Application
      </Text>
      <Image
        style={styles.iconFeatherMonitor2}
        resizeMode="cover"
        source={require("../assets/icon-feathermonitor2.png")}
      />
      <Text style={[styles.vendor15, styles.vendorTypo1]}>21 Dec, 2021</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  vendorTypo5: {
    marginLeft: 38,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  vendorGroupLayout: {
    marginLeft: 56,
    height: 157,
    width: 147,
    borderRadius: Border.br_5xs,
  },
  vendorIconPosition: {
    position: "absolute",
    top: "50%",
  },
  vendorTypo4: {
    fontSize: FontSize.size_9xl,
    marginTop: 30.5,
    top: "50%",
    position: "absolute",
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    letterSpacing: -1,
  },
  vendorLayout: {
    marginLeft: 231,
    marginTop: -157,
    height: 157,
    width: 147,
    borderRadius: Border.br_5xs,
  },
  vendorTypo3: {
    left: "14.29%",
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
    textAlign: "left",
    letterSpacing: 0,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  iconPosition2: {
    height: 14,
    width: 14,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  iconPosition1: {
    width: 29,
    left: 20,
    height: 26,
    top: "50%",
    position: "absolute",
  },
  homeItemLayout: {
    height: 71,
    width: 355,
    backgroundColor: Color.colorGhostwhite_100,
    borderRadius: Border.br_mid,
    marginLeft: 37,
  },
  vendorTypo1: {
    marginLeft: 111,
    textAlign: "left",
    letterSpacing: 0,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  vendorTypo: {
    marginLeft: 110,
    textAlign: "left",
    letterSpacing: 0,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  bottomtabChildPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    marginTop: -10.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  vendor: {
    fontSize: 38,
    marginLeft: 34,
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    letterSpacing: -1,
  },
  iconFeatherBell: {
    marginTop: -37,
    marginLeft: 368,
    height: 24,
    width: 22,
  },
  homeChild: {
    width: 6,
    height: 6,
    marginTop: -24,
    marginLeft: 383,
  },
  vendor1: {
    fontSize: FontSize.size_lg,
    marginLeft: 37,
    letterSpacing: 0,
    marginTop: 31,
    color: Color.colorDarkgray,
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  vendor2: {
    marginTop: 26,
  },
  iconFeatherCalendar: {
    marginLeft: -51.3,
    height: 26,
    width: 24,
    left: "50%",
    top: "50%",
    marginTop: -54.5,
    position: "absolute",
  },
  vendor3: {
    left: "12.24%",
    fontSize: FontSize.size_sm,
    marginTop: 11.5,
    top: "50%",
    textAlign: "left",
    position: "absolute",
    letterSpacing: 0,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  vendor4: {
    left: "14.97%",
  },
  iconFeatherCalendarParent: {
    backgroundColor: "#e8ffe7",
    marginTop: 16,
  },
  vendor5: {
    marginTop: 11.5,
  },
  vendor6: {
    left: "17.01%",
  },
  iconFeatherServer: {
    left: 21,
    height: 29,
    width: 24,
    top: "50%",
    marginTop: -54.5,
    position: "absolute",
  },
  iconFeatherClock: {
    marginTop: -33.5,
    marginLeft: -37.5,
  },
  vendorParent: {
    backgroundColor: "#ddeefc",
  },
  vendor7: {
    left: "10.88%",
    fontSize: FontSize.size_sm,
    marginTop: 11.5,
    top: "50%",
    textAlign: "left",
    position: "absolute",
    letterSpacing: 0,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  iconFeatherMonitor: {
    marginTop: -51.5,
  },
  vendorGroup: {
    backgroundColor: "#fff0d9",
    marginTop: 26,
  },
  vendor9: {
    marginTop: -7.5,
  },
  iconFeatherMonitor1: {
    marginTop: -52.5,
  },
  iconFeatherAlertOctagon: {
    marginTop: -49.5,
    marginLeft: -45.5,
  },
  vendorContainer: {
    backgroundColor: Color.colorMistyrose,
  },
  vendor11: {
    marginTop: 29,
  },
  homeItem: {
    marginTop: 16,
  },
  homeInner: {
    width: 41,
    height: 41,
    marginTop: -56,
    marginLeft: 55,
  },
  vendor12: {
    marginTop: -38,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray,
  },
  iconFeatherCalendar1: {
    width: 18,
    height: 19,
    marginTop: -14,
    marginLeft: 67,
  },
  vendor13: {
    marginTop: -3,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkgray,
  },
  rectangleView: {
    marginTop: 26,
  },
  vendor14: {
    marginTop: -40,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray,
  },
  iconFeatherMonitor2: {
    width: 19,
    height: 18,
    marginTop: -10,
    marginLeft: 66,
  },
  vendor15: {
    marginTop: -5,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkgray,
  },
  home: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    paddingTop: 33,
  },
});

export default Home;
