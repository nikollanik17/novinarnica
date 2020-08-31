import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import {
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";

const Vise = (props) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <View style={styles.optionsContainer}>
          <View style={styles.option}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <EvilIcons
                name="location"
                size={35}
                color="#000"
                style={styles.icon}
              />
              <Text style={styles.optionText}>Zemlje</Text>
            </View>
            <Feather name="chevron-down" size={30} color="#ccc" />
          </View>
          <View style={styles.option}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome
                name="language"
                size={30}
                color="#8e384d"
                style={styles.icon}
              />
              <Text style={styles.optionText}>Jezik</Text>
            </View>
            <Feather name="chevron-down" size={30} color="#ccc" />
          </View>
          <View style={styles.option}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome
                name="heart"
                size={27}
                color="#E44545"
                style={styles.icon}
              />
              <Text style={styles.optionText}>Omiljeno</Text>
            </View>
          </View>
          <View style={styles.option}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome
                name="bookmark"
                size={27}
                color="#7B369B"
                style={styles.icon}
              />
              <Text style={styles.optionText}>Markeri</Text>
            </View>
          </View>
          <View style={styles.option}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome5
                name="coins"
                size={27}
                color="#F6C358"
                style={styles.icon}
              />
              <Text style={styles.optionText}>Dopuni kredit</Text>
            </View>
          </View>
          <View style={styles.option}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome5
                name="gifts"
                size={27}
                color="#FF405C"
                style={styles.icon}
              />
              <Text style={styles.optionText}>Iskoristi vaučer</Text>
            </View>
          </View>
          <View style={styles.option}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather
                name="info"
                size={27}
                color="#1B92D5"
                style={styles.icon}
              />
              <Text style={styles.optionText}>O novinarnici</Text>
            </View>
          </View>
          <View style={{ ...styles.option, backgroundColor: "#535353" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Entypo name="login" size={27} color="#fff" style={styles.icon} />
              <Text style={{ ...styles.optionText, color: "#fff" }}>
                Prijavi me
              </Text>
            </View>
          </View>
        </View>
        <View style={{ paddingVertical: 30 }}>
          <Image source={require("../assets/NOVINE-V03-3.png")} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    //privremeno
    paddingTop: 50,
  },
  optionsContainer: {
    width: "100%",
    justifyContent: "flex-start",
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#e5e5e5",
    borderBottomWidth: 1,
    paddingVertical: 13,
    paddingHorizontal: 15,
  },
  optionText: {
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#999",
  },
  icon: {
    width: 30,
  },
});

export default Vise;
