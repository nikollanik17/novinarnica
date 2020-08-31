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

const Rgstr = (props) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
        }}
      >
        <KeyboardAwareScrollView style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
            }}
          >
            <View style={styles.top}>
              <Image source={require("../assets/NOVINE-V03-3.png")} />
              <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Vaš e-mail" />
                <TextInput style={styles.input} placeholder="Vaša lozinka" />
                <TextInput
                  style={styles.input}
                  placeholder="Potvrdite lozinku"
                />
              </View>
              <View style={styles.checkBoxContainer}>
                <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  tintColors={{
                    true: "rgba(15, 176, 41, 0.9)",
                    false: "#8d8d8d",
                  }}
                />
                <Text style={styles.checkBoxText}>
                  Slažem se sa uslovima korišćenja
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
                    "rgba(15, 176, 41, 0.9)",
                    "rgba(66, 221, 91, 0.9)",
                    "rgba(15, 176, 41, 0.9)",
                  ]}
                  style={styles.btn}
                >
                  <Text style={styles.btnText}>REGISTRUJ ME</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
              <TouchableOpacity style={styles.skipBtn} activeOpacity={0.5}>
                <Text style={styles.skipBtnText}>
                  VEĆ IMATE NALOG? PRIJAVITE SE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  top: {
    alignItems: "center",
    // justifyContent: "flex-start",
    marginTop: "30%",
    width: "100%",
  },
  inputContainer: {
    marginTop: "8%",
    width: "83%",
    alignItems: "center",
  },
  input: {
    fontSize: 16,
    fontWeight: "300",
    paddingVertical: 8,
    paddingHorizontal: 13,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 6,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    marginVertical: 10,
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkBox: {
    elevation: 6,
    borderWidth: 0,
  },
  checkBoxText: {
    color: "#8d8d8d",
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
    paddingVertical: "8%",
    alignItems: "center",
    // justifyContent: "flex-end",
  },
  skipBtnText: {
    fontSize: 16,
    color: "rgba(152, 16, 16, 0.9);",
    borderBottomColor: "rgba(152, 16, 16, 0.9);",
    borderBottomWidth: 1,
    fontWeight: "600",
  },
});

export default Rgstr;
