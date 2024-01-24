import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import CompleteSection from "../components/CompleteSection";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const CreateAndEditTask = () => {
  return (
    <View style={styles.createAndEditTask}>
      <Text style={styles.vendor}>Task</Text>
      <Image
        style={styles.iconFeatherArrowLeft}
        resizeMode="cover"
        source={require("../assets/icon-featherarrowleft.png")}
      />
      <Text style={[styles.vendor1, styles.vendorTypo3]}>Campaign name</Text>
      <View style={[styles.username, styles.usernameLayout]}>
        <Text style={[styles.username1, styles.vendorTypo2]}>
          Enter campaign name
        </Text>
      </View>
      <Text style={[styles.vendor2, styles.vendorTypo3]}>Media</Text>
      <View style={[styles.username, styles.usernameLayout]}>
        <Text style={[styles.username1, styles.vendorTypo2]}>
          Enter media name
        </Text>
      </View>
      <Text style={[styles.vendor2, styles.vendorTypo3]}>Media type</Text>
      <View style={[styles.username, styles.usernameLayout]}>
        <Text style={[styles.username4, styles.usernameSpaceBlock]}>
          Select media type
        </Text>
        <Image
          style={styles.iconIonicIosArrowDropdown}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowdropdowncircle1.png")}
        />
      </View>
      <Text style={[styles.vendor2, styles.vendorTypo3]}>
        Display start date
      </Text>
      <View style={[styles.username, styles.usernameLayout]}>
        <Text style={[styles.username1, styles.vendorTypo2]}>
          Enter display start date
        </Text>
      </View>
      <Image
        style={styles.iconOpenCalendar}
        resizeMode="cover"
        source={require("../assets/icon-opencalendar.png")}
      />
      <Text style={[styles.vendor5, styles.vendorTypo1]}>Display end date</Text>
      <View style={[styles.username, styles.usernameLayout]}>
        <Text style={[styles.username1, styles.vendorTypo2]}>
          Enter display end date
        </Text>
      </View>
      <Image
        style={styles.iconOpenCalendar}
        resizeMode="cover"
        source={require("../assets/icon-opencalendar.png")}
      />
      <Text style={[styles.vendor6, styles.vendorTypo1]}>Vendor</Text>
      <View style={[styles.username, styles.usernameLayout]}>
        <Text style={[styles.username9, styles.continueTypo]}>
          Select vendor
        </Text>
        <Image
          style={styles.iconIonicIosArrowDropdown}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowdropdowncircle1.png")}
        />
      </View>
      <Text style={[styles.vendor7, styles.vendorTypo3]}>Light type</Text>
      <View style={[styles.username, styles.usernameLayout]}>
        <Text style={[styles.username10, styles.usernameSpaceBlock]}>
          Select light type
        </Text>
        <Image
          style={styles.iconIonicIosArrowDropdown}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowdropdowncircle1.png")}
        />
      </View>
      <Text style={[styles.vendor2, styles.vendorTypo3]}>Size</Text>
      <View style={[styles.username, styles.usernameLayout]}>
        <Text style={[styles.username1, styles.vendorTypo2]}>Enter size</Text>
      </View>
      <Text style={[styles.vendor2, styles.vendorTypo3]}>Quantity</Text>
      <View style={[styles.username, styles.usernameLayout]}>
        <Text style={[styles.username1, styles.vendorTypo2]}>
          Enter quantity
        </Text>
      </View>
      <View style={[styles.createAndEditTaskChild, styles.createLayout]} />
      <Text style={styles.vendor10}>Photo type</Text>
      <View style={[styles.iconFeatherSunWrapper, styles.iconWrapperLayout]}>
        <Image
          style={styles.iconFeatherSun}
          resizeMode="cover"
          source={require("../assets/icon-feathersun.png")}
        />
      </View>
      <View style={[styles.iconFeatherMoonWrapper, styles.iconWrapperLayout]}>
        <Image
          style={styles.iconFeatherMoon}
          resizeMode="cover"
          source={require("../assets/icon-feathermoon.png")}
        />
      </View>
      <View style={[styles.createAndEditTaskChild, styles.createLayout]} />
      <View style={[styles.iconFeatherPlusSquareParent, styles.iconLayout4]}>
        <Image
          style={[styles.iconFeatherPlusSquare, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/icon-featherplussquare.png")}
        />
        <Text style={[styles.vendor11, styles.usernamePosition]}>
          Add notes
        </Text>
      </View>
      <Text style={[styles.vendor12, styles.vendorTypo2]}>
        Size of banner is 20 X 18
      </Text>
      <Image
        style={[styles.iconMaterialDelete, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/icon-materialdelete.png")}
      />
      <Text style={[styles.vendor13, styles.vendorTypo2]}>
        Size of Vashi railway station banner is 20 X 14
      </Text>
      <Image
        style={[styles.iconMaterialDelete1, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/icon-materialdelete.png")}
      />
      <View style={[styles.createAndEditTaskInner, styles.createLayout]} />
      <View style={[styles.iconFeatherPlusSquareGroup, styles.iconLayout4]}>
        <Image
          style={[styles.iconFeatherPlusSquare, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/icon-featherplussquare.png")}
        />
        <Text style={[styles.vendor11, styles.usernamePosition]}>
          Add images
        </Text>
      </View>
      <Image
        style={styles.pexels7048027Icon}
        resizeMode="cover"
        source={require("../assets/pexels7048027.png")}
      />
      <Image
        style={[styles.pexels8846632Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/pexels8846632.png")}
      />
      <Image
        style={[styles.pexels5480736Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/pexels5480736.png")}
      />
      <Text style={styles.vendor15}>Size: 10KB</Text>
      <Text style={[styles.vendor16, styles.vendorTypo]}>Size: 20KB</Text>
      <Text style={[styles.vendor17, styles.vendorTypo]}>Size: 30KB</Text>
      <View style={[styles.continueButton, styles.usernameLayout]}>
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
        <Text style={[styles.continue, styles.continueTypo]}>Submit</Text>
      </View>
      <CompleteSection />
    </View>
  );
};

const styles = StyleSheet.create({
  vendorTypo3: {
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  usernameLayout: {
    height: 48,
    width: 364,
    alignSelf: "center",
  },
  vendorTypo2: {
    color: Color.colorDarkgray,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  usernameSpaceBlock: {
    marginTop: -10.94,
    color: Color.colorDarkgray,
    fontSize: FontSize.size_sm,
  },
  vendorTypo1: {
    marginTop: 32.769999999999996,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  continueTypo: {
    textAlign: "center",
    top: "50%",
    position: "absolute",
    letterSpacing: 0,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  createLayout: {
    alignSelf: "flex-end",
    height: 2,
    width: 429,
    borderTopWidth: 1,
    borderColor: Color.colorGhostwhite_100,
    borderStyle: "solid",
  },
  iconWrapperLayout: {
    height: 49,
    width: 56,
  },
  iconLayout4: {
    width: 360,
    height: 22,
    marginTop: 14.769999999999996,
  },
  iconLayout3: {
    maxHeight: "100%",
    bottom: 0,
  },
  usernamePosition: {
    top: "50%",
    position: "absolute",
  },
  iconLayout2: {
    marginLeft: 381,
    height: 13,
    width: 10,
  },
  iconLayout1: {
    marginTop: -85.23,
    height: 85,
    width: 118,
    borderRadius: Border.br_6xs,
  },
  vendorTypo: {
    marginTop: -16.230000000000004,
    fontSize: FontSize.size_xs,
    color: Color.colorDarkgray,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  iconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vendor: {
    fontSize: FontSize.size_7xl,
    letterSpacing: -1,
    marginLeft: 184,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  iconFeatherArrowLeft: {
    width: 26,
    height: 20,
    marginTop: -27.230000000000004,
    marginLeft: 30,
  },
  vendor1: {
    marginTop: 72.77,
    marginLeft: 34,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    color: Color.colorDarkslategray,
  },
  username1: {
    marginTop: -9.5,
    left: "4.72%",
    top: "50%",
    position: "absolute",
  },
  username: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGhostwhite_200,
    alignSelf: "center",
    marginTop: 15.769999999999996,
  },
  vendor2: {
    marginTop: 15.769999999999996,
    marginLeft: 34,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    color: Color.colorDarkslategray,
  },
  username4: {
    left: "4.99%",
    top: "50%",
    position: "absolute",
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  iconIonicIosArrowDropdown: {
    marginTop: -8.06,
    right: 20,
    height: 16,
    width: 16,
    top: "50%",
    position: "absolute",
  },
  iconOpenCalendar: {
    width: 12,
    height: 14,
    marginTop: -31.230000000000004,
    marginLeft: 360,
  },
  vendor5: {
    marginLeft: 34,
  },
  vendor6: {
    marginLeft: 36,
  },
  username9: {
    marginTop: -10.94,
    color: Color.colorDarkgray,
    fontSize: FontSize.size_sm,
    left: "4.72%",
  },
  vendor7: {
    marginLeft: 36,
    marginTop: 15.769999999999996,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    color: Color.colorDarkslategray,
  },
  username10: {
    left: "4.72%",
    top: "50%",
    position: "absolute",
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  createAndEditTaskChild: {
    marginTop: 24.769999999999996,
  },
  vendor10: {
    marginTop: 14.769999999999996,
    marginLeft: 36,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  iconFeatherSun: {
    marginTop: -9.77,
    marginLeft: -10,
    height: 22,
    width: 22,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  iconFeatherSunWrapper: {
    backgroundColor: Color.colorDarkorange,
    marginLeft: 42,
    marginTop: 15.769999999999996,
  },
  iconFeatherMoon: {
    marginTop: -7.72,
    marginLeft: -8.22,
    left: "50%",
    height: 16,
    width: 16,
    top: "50%",
    position: "absolute",
  },
  iconFeatherMoonWrapper: {
    backgroundColor: Color.colorDarkslategray,
    marginTop: -49.230000000000004,
    marginLeft: 118,
  },
  iconFeatherPlusSquare: {
    right: -1,
    top: 1,
    width: 22,
    bottom: 0,
    position: "absolute",
  },
  vendor11: {
    marginTop: -11,
    left: "0%",
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray,
  },
  iconFeatherPlusSquareParent: {
    marginLeft: 36,
  },
  vendor12: {
    marginTop: 15.769999999999996,
    marginLeft: 34,
  },
  iconMaterialDelete: {
    marginTop: -19.230000000000004,
  },
  vendor13: {
    marginTop: 13.769999999999996,
    marginLeft: 34,
  },
  iconMaterialDelete1: {
    marginTop: -17.230000000000004,
  },
  createAndEditTaskInner: {
    marginTop: 18.769999999999996,
  },
  iconFeatherPlusSquareGroup: {
    alignSelf: "center",
  },
  pexels7048027Icon: {
    marginTop: 19.769999999999996,
    marginLeft: 16,
    height: 85,
    width: 118,
    borderRadius: Border.br_6xs,
  },
  pexels8846632Icon: {
    alignSelf: "center",
  },
  pexels5480736Icon: {
    marginLeft: 294,
  },
  vendor15: {
    marginTop: 7.769999999999996,
    marginLeft: 47,
    fontSize: FontSize.size_xs,
    color: Color.colorDarkgray,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  vendor16: {
    marginLeft: 186,
  },
  vendor17: {
    marginLeft: 325,
  },
  lineIcon: {
    right: 0,
    left: 0,
    height: 0,
    top: 1,
  },
  rectangleIcon: {
    top: 0,
    right: 6,
    left: 6,
    maxHeight: "100%",
    bottom: 0,
  },
  continue: {
    marginTop: -13.5,
    left: "40.96%",
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
  },
  continueButton: {
    marginTop: 39.769999999999996,
    alignSelf: "center",
  },
  createAndEditTask: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    paddingTop: 38,
  },
});

export default CreateAndEditTask;
