import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  CheckBox,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const LoginSkip = (props) => {
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={{
          width: "100%",
          height: "100%",
          // flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <View style={styles.top}>
            <Image source={require("../assets/NOVINE-V03-3.png")} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Kako bi ste mogli da skidate i čitate izdanja morate biti
                ulogovani
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                shadowOffset: { width: 0, height: 2 },
                shadowColor: "#000",
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 3,
                paddingTop: 20,
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(6, 28, 139, 0.9)",
                  "rgba(58, 83, 208, 0.9)",
                  "rgba(6, 28, 139, 0.9) 100%)",
                ]}
                style={styles.btn}
              >
                <Text style={styles.btnText}>PRIJAVI ME</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.skipBtn} activeOpacity={0.5}>
              <Text style={styles.skipBtnText}>PRESKOČI PRIJAVU</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  top: {
    alignItems: "center",
    // justifyContent: "flex-start",
    marginTop: "30%",
    width: "100%",
  },
  textContainer: {
    marginVertical: "10%",
    width: "83%",
    alignItems: "center",
  },
  text: {
    color: "#8d8d8d",
    textAlign: "center",
    fontSize: 18,
  },
  btn: {
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 5,
  },
  btnText: {
    color: "#fff",
    fontWeight: "700",
  },
  bottom: {
    paddingBottom: 25,
    alignItems: "center",
  },
  skipBtnText: {
    fontSize: 16,
    color: "rgba(152, 16, 16, 0.9);",
    borderBottomColor: "rgba(152, 16, 16, 0.9);",
    borderBottomWidth: 1,
    fontWeight: "600",
  },
});

export default LoginSkip;
