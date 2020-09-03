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
import FavoriteIcon from '../components/icons/FavoriteIcon';
import SwipeDownIcon from '../components/icons/SwipeDownIcon';

const SingleBook = (props) => {
  const [opisSelected, setOpisSelected] = useState(true);

  return (
    <View style={styles.screen}>
      {/* <ImageBackground
        source={require("../assets/bg.png")}
        style={{ width: "100%", height: "100%" }}
      > */}
      <ScrollView>
        <View style={styles.top}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/book1.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.buyInfo}>
            <View style={styles.favoriteContainer}>
              <TouchableOpacity style={styles.favoriteBtn} activeOpacity={0.8}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.favoriteText}>Omiljeno</Text>
                  {/* <EvilIcons name="heart" size={23} color="#E44545" /> */}
                  <FavoriteIcon />
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.buyInfoText}>Cena digitalnog izdanja</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  paddingRight: 6,
                }}
              >
                <View style={{}}>
                  <Text style={styles.greenText}>48 RSD</Text>
                </View>
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
        <View style={styles.bookInfoContainer}>
          <View
            style={{
              ...styles.infoRow,
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
            }}
          >
            <Text style={styles.textLeft}>Autor:</Text>
            <Text style={styles.textRight}>Ljiljana D. Cuk</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.textLeft}>Godina izdanja:</Text>
            <Text style={styles.textRight}>2020</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.textLeft}>Broj strana:</Text>
            <Text style={styles.textRight}>100</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.textLeft}>Pismo:</Text>
            <Text style={styles.textRight}>Latinica</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.textLeft}>ISBN:</Text>
            <Text style={styles.textRight}>978-86-6477-053-8</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.textLeft}>Pogovor:</Text>
            <Text style={styles.textRight}>
              Srdjan Srdic i Vladimir Arsenic
            </Text>
          </View>
          <View
            style={{
              ...styles.infoRow,
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
            }}
          >
            <Text style={styles.textLeft}>Izdavac:</Text>
            <Text style={styles.textRight}>Partizanska knjiga</Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Jezik ove knjige je strašan, ogoljen, iz njega može da se čita kao
            što se čita iz postova posejanih po zakucima interneta, on je sav u
            funkciji poruke da ništa više i ne može da se poruči. Osim patnje
            koja je esencijalna. - Srđan Srdić...
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <TouchableOpacity style={styles.seeMoreBtn} activeOpacity={0.8}>
            {/* <AntDesign
              name="doubleright"
              size={21}
              color="#fff"
              style={styles.arrows}
            /> */}
            <SwipeDownIcon />
            <Text style={styles.seeMoreText}>Vidi sve</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sameAuthor}>
          <View
            style={{
              paddingLeft: 15,
              paddingVertical: 15,
              backgroundColor: "#fff",
              marginVertical: 20,
              elevation: 3,
            }}
          >
            <Text style={{ fontSize: 16, color: "#555", fontWeight: "bold" }}>
              OD ISTOG AUTORA
            </Text>
          </View>
          <ScrollView horizontal style={{ paddingLeft: 10 }}>
            <Image source={require("../assets/book1.png")} />
            <Image source={require("../assets/book2.png")} />
            <Image source={require("../assets/book1.png")} />
            <Image source={require("../assets/book2.png")} />
            <Image source={require("../assets/book1.png")} />
          </ScrollView>
        </View>
      </ScrollView>
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#fff",
  },
  top: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 30,
    height: 280,
    backgroundColor: "#fff",
    elevation: 3,
    paddingBottom: 30,
  },
  imageContainer: {
    height: "100%",
    width: "40%",
    marginRight: 30,
  },
  buyInfo: {
    height: "100%",
    width: "60%",
    paddingRight: 20,
    justifyContent: "space-between",
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
  favoriteContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  favoriteBtn: {
    backgroundColor: "#3e3e3e",
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 13,
    elevation: 6,
  },
  favoriteText: {
    color: "#fff",
    fontSize: 15,
    paddingRight: 3,
  },
  bookInfoContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 2,
    overflow: "hidden",
  },
  textLeft: {
    backgroundColor: "#3e3e3e",
    color: "#fff",
    paddingVertical: 15,
    paddingLeft: 12,
    fontSize: 15,
    width: "36%",
    overflow: "hidden",
    fontWeight: "700",
  },
  textRight: {
    width: "64%",
    paddingVertical: 15,
    paddingLeft: 10,
    fontSize: 15,
    backgroundColor: "#f3f3f3",
    color: "#555",
  },
  descriptionContainer: {
    paddingHorizontal: 10,
  },
  description: {
    fontSize: 15,
    lineHeight: 20,
    color: "#555",
  },
  seeMoreBtn: {
    flexDirection: "row",
    backgroundColor: "#3e3e3e",
    alignItems: "center",
    paddingLeft: 17,
    paddingRight: 10,
    paddingVertical: 8,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  arrows: {
    transform: [{ rotate: "90deg" }],
  },
  seeMoreText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    paddingLeft: 7,
  },
});

export default SingleBook;
