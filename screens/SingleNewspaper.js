import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

const SingleNewspaper = (props) => {
  const [opisSelected, setOpisSelected] = useState(true);

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView>
          <View style={styles.top}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/vecNovosti.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.buyInfo}>
              <View>
                <Text style={styles.buyInfoText}>30 digitalnih izdanja</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.redText}>14% uštede</Text>
                  <Text style={styles.greenText}>1032 RSD</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    shadowOffset: { width: 0, height: 2 },
                    shadowColor: "#000",
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation: 5,
                    marginTop: 10,
                    borderRadius: 5,
                    backgroundColor: "#fff",
                    borderColor: "#fff",
                    borderWidth: 2,
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
                    <Text style={styles.btnText}>KUPI</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <View style={styles.line}></View>
              <View>
                <Text style={styles.buyInfoText}>Pojedinačno izdanje</Text>
                <View>
                  <Text style={styles.greenText}>48 RSD</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    shadowOffset: { width: 0, height: 2 },
                    shadowColor: "#000",
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation: 5,
                    marginTop: 10,
                    borderRadius: 5,
                    backgroundColor: "#fff",
                    borderColor: "#fff",
                    borderWidth: 2,
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
                    <Text style={styles.btnText}>KUPI</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#e7e7e7",
              height: 72,
              justifyContent: "center",
            }}
          >
            <View style={styles.infoContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setOpisSelected(true);
                }}
                style={{ alignItems: "center", height: 43 }}
              >
                <Text
                  style={
                    opisSelected
                      ? { ...styles.infoText, color: "#FB5353" }
                      : { ...styles.infoText, color: "#9A9A9A" }
                  }
                >
                  OPIS
                </Text>
                {opisSelected && (
                  <FontAwesome name="caret-up" size={30} color="#e7e7e7" />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setOpisSelected(false);
                }}
                style={{ alignItems: "center", height: 43 }}
              >
                <Text
                  style={
                    !opisSelected
                      ? { ...styles.infoText, color: "#FB5353" }
                      : { ...styles.infoText, color: "#9A9A9A" }
                  }
                >
                  POKLON BROJ
                </Text>
                {!opisSelected && (
                  <FontAwesome name="caret-up" size={30} color="#e7e7e7" />
                )}
              </TouchableOpacity>
            </View>
          </View>
          {opisSelected && (
            <View style={styles.opis}>
              <Text style={styles.opisText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it.
              </Text>
            </View>
          )}
          {!opisSelected && (
            <View style={styles.poklonBroj}>
              <Image source={require("../assets/vecNovosti.png")} />
              <View style={{ marginHorizontal: 8 }}>
                <Text style={styles.buyInfoText}>Broj: 3137</Text>
                <View style={styles.line}></View>
                <Text style={{ color: "#555" }}>Objavljeno: 02.11.2020</Text>
              </View>
            </View>
          )}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 30,
    height: 250,
    backgroundColor: "#fff",
    elevation: 3,
    paddingBottom: 30,
  },
  imageContainer: {
    height: "100%",
    width: "40%",
    marginRight: 30,
  },
  // image: {
  //   height: "100%",
  //   width: "100%",
  // },
  buyInfo: {
    height: "100%",
    width: "60%",
    paddingRight: 20,
    justifyContent: "center",
    // alignItems: "center",
  },
  btn: {
    paddingHorizontal: 25,
    paddingVertical: 9,
    borderRadius: 5,
  },
  btnText: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
  },
  line: {
    borderColor: "#e7e7e7",
    borderWidth: 1,
    marginVertical: 10,
  },
  redText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FB5353",
  },
  greenText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1EAB3D",
  },
  buyInfoText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#555555",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingTop: 17,
    paddingHorizontal: "20%",
  },
  infoText: {
    fontSize: 16,
    fontWeight: "700",
    // color: "#9a9a9a",
  },
  opis: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 14,
    paddingVertical: 20,
    paddingHorizontal: 14,
    elevation: 5,
    marginBottom: 50,
  },
  opisText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 18,
  },
  poklonBroj: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 14,
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 14,
    elevation: 5,
    marginBottom: 50,
    flexDirection: "row",
  },
});

export default SingleNewspaper;
