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

const Register = (props) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.screen}>
      {/* <KeyboardAwareScrollView> */}
      <View style={styles.heading}>
        <Image
          source={require("../assets/NOVINE-V03-3.png")}
          style={{ width: 220, height: 86 }}
        />
      </View>
      {/* <View style={styles.bottomContainer}> */}
      <ImageBackground
        style={styles.bottom}
        source={require("../assets/blob-4.png")}
      >
        <View style={styles.inputWrapper}>
          <TextInput
            style={{ ...styles.input, marginTop: -20 }}
            placeholder="Vaš e-mail"
          />
          <TextInput style={styles.input} placeholder="Vaša lozinka" />
          <TextInput style={styles.input} placeholder="Potvrdite lozinku" />
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
              style={styles.btnBlue}
            >
              <Text style={styles.btnBlueText}>REGISTRUJ ME</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        {/* <View style={{ position: "absolute", bottom: 30 }}> */}
        <TouchableOpacity style={styles.skipBtn}>
          <Text style={styles.skipBtnText}>VEĆ IMATE NALOG? PRIJAVITE SE</Text>
        </TouchableOpacity>
        {/* </View> */}
      </ImageBackground>
      {/* </View> */}
      {/* </KeyboardAwareScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  heading: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
    paddingTop: "20%",
  },
  bottomContainer: {
    height: "60%",
    // paddingBottom: "80%",
  },
  bottom: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    // paddingBottom: "40%",
  },
  btnBlue: {
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 5,
  },
  btnBlueText: {
    color: "#fff",
    fontWeight: "700",
  },
  skipBtn: {
    paddingBottom: 20,
  },
  skipBtnText: {
    fontSize: 16,
    color: "rgba(152, 16, 16, 0.9);",
    borderBottomColor: "rgba(152, 16, 16, 0.9);",
    borderBottomWidth: 1,
    fontWeight: "600",
  },
  inputWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // marginVertical: 20,
    backgroundColor: "transparent",
  },
  input: {
    fontSize: 16,
    fontWeight: "300",
    paddingVertical: 8,
    paddingHorizontal: 13,
    width: "83%",
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
});

export default Register;
