import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from "react-native";

const Welcome = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <ImageBackground
          source={require("../assets/welcome-bg.png")}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(255, 255, 255, 0.88)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../assets/NOVINE-V03-3.png")} />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Welcome;
