import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import LanguageIcon from '../components/icons/LanguageIcon';
import CountriesIcon from '../components/icons/CountriesIcon';
import HeartFilledIcon from '../components/icons/HeartFilledIcon';
import MarkerIcon from '../components/icons/MarkerIcon';
import CoinsIcon from '../components/icons/CoinsIcon';
import GiftIcon from '../components/icons/GiftIcon';
import InfoIcon from '../components/icons/InfoIcon';
import LoginIcon from '../components/icons/LoginIcon';

const Vise = (props) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <View style={styles.optionsContainer}>
          <View style={styles.option}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CountriesIcon style={styles.icon} />
              <Text style={styles.optionText}>Zemlje</Text>
            </View>
            {/* <Feather name="chevron-down" size={30} color="#ccc" /> */}
          </View>
          <View style={styles.option}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <LanguageIcon style={styles.icon} />
              <Text style={styles.optionText}>Jezik</Text>
            </View>
            {/* <Feather name="chevron-down" size={30} color="#ccc" /> */}
          </View>
          <View style={styles.option}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <HeartFilledIcon style={styles.icon} />
              <Text style={styles.optionText}>Omiljeno</Text>
            </View>
          </View>
          <View style={styles.option}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MarkerIcon style={styles.icon} />
              <Text style={styles.optionText}>Markeri</Text>
            </View>
          </View>
          <View style={styles.option}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CoinsIcon style={styles.icon} />
              <Text style={styles.optionText}>Dopuni kredit</Text>
            </View>
          </View>
          <View style={styles.option}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <GiftIcon style={styles.icon} />
              <Text style={styles.optionText}>Iskoristi vaučer</Text>
            </View>
          </View>
          <View style={styles.option}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <InfoIcon style={styles.icon} />
              <Text style={styles.optionText}>O novinarnici</Text>
            </View>
          </View>
          <View style={{ ...styles.option, backgroundColor: "#535353" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <LoginIcon style={styles.icon} />
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
    height: 55
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
