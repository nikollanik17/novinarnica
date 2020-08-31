import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CategoryName from "../components/CategoryName";
import PurpleCategoryName from "../components/PurpleCategoryName";
import NewspaperComponent from "../components/NewspaperComponent";

const Newspaper = (props) => {
  return (
    // <ScrollView>
    <View style={styles.screen}>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
        }}
      >
        <ScrollView>
          <View>
            <ScrollView horizontal style={styles.categories}>
              {/* <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("NewspaperCategory", {
                  title: "BESPLATNE",
                });
              }}
            >
              <View style={styles.category}>
                <Text style={styles.categoryNumber}></Text>
                <Text style={styles.categoryName}>Besplatne</Text>
              </View>
            </TouchableOpacity> */}
              <CategoryName
                pressed={() => {
                  props.navigation.navigate("NewspaperCategory", {
                    title: "BESPLATNE",
                  });
                }}
                name="Besplatne"
                number="11"
              />
              <CategoryName
                pressed={() => {
                  props.navigation.navigate("NewspaperCategory", {
                    title: "DNEVNE",
                  });
                }}
                name="Dnevne"
                number="122"
              />
              <CategoryName
                pressed={() => {
                  props.navigation.navigate("NewspaperCategory", {
                    title: "LOKALNE",
                  });
                }}
                name="Lokalne"
                number="21"
              />
              <CategoryName
                pressed={() => {
                  props.navigation.navigate("NewspaperCategory", {
                    title: "DRUSTVO I POLITIKA",
                  });
                }}
                name="Drustvo i politika"
                number="32"
              />
            </ScrollView>
          </View>

          <View style={styles.singleCategory}>
            {/* <View style={styles.singleCategoryWrapper}>
              <View style={styles.singleCategoryNameContainer}>
                <Text style={styles.singleCategoryName}>BESPLATNE</Text>
              </View>
            </View> */}
            <PurpleCategoryName name="BESPLATNE" />
            <ScrollView horizontal>
              {/* <View
                style={{
                  margin: 10,
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("SingleNewspaper", {
                      title: "Novosti",
                    });
                  }}
                  activeOpacity={0.6}
                >
                  <View style={styles.imageContainer}>
                    <Image
                      source={require("../assets/vecNovosti.png")}
                      style={styles.image}
                    />
                  </View>
                </TouchableOpacity>
                <View style={styles.imageTextContainer}>
                  <Text style={styles.imageText}>NOVOSTI</Text>
                </View>
              </View> */}
              <NewspaperComponent
                pressed={() => {
                  props.navigation.navigate("SingleNewspaper", {
                    title: "Novosti",
                  });
                }}
                name="NOVOSTI"
              />
              <NewspaperComponent
                pressed={() => {
                  props.navigation.navigate("SingleNewspaper", {
                    title: "Novosti",
                  });
                }}
                name="BLIC"
              />
              <NewspaperComponent
                pressed={() => {
                  props.navigation.navigate("SingleNewspaper", {
                    title: "Kurir",
                  });
                }}
                name="KURIR"
              />
            </ScrollView>
          </View>
          <View style={styles.singleCategory}>
            <PurpleCategoryName name="DNEVNE" />
            <ScrollView horizontal>
              <NewspaperComponent
                pressed={() => {
                  props.navigation.navigate("SingleNewspaper", {
                    title: "Novosti",
                  });
                }}
                name="NOVOSTI"
              />
              <NewspaperComponent
                pressed={() => {
                  props.navigation.navigate("SingleNewspaper", {
                    title: "Blic",
                  });
                }}
                name="BLIC"
              />
              <NewspaperComponent
                pressed={() => {
                  props.navigation.navigate("SingleNewspaper", {
                    title: "Kurir",
                  });
                }}
                name="KURIR"
              />
            </ScrollView>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: 50,
  },
  categories: {
    paddingVertical: 10,
    height: 100,
  },
  category: {
    paddingVertical: 8,
    paddingHorizontal: 25,
    backgroundColor: "#eee",
    marginHorizontal: 15,
    borderRadius: 3,
    height: "70%",
  },
  categoryName: {
    color: "#555",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
  categoryNumber: {
    textAlign: "right",
    color: "#555",
    fontSize: 11,
    marginRight: -12,
  },
  singleCategory: {
    // height: "55%",
    flex: 1,
    marginBottom: 20,
  },
  singleCategoryWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  singleCategoryNameContainer: {
    backgroundColor: "#BD78B6",
    paddingHorizontal: 30,
    paddingVertical: 9,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    elevation: 6,
  },
  singleCategoryName: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
    textAlign: "center",
  },
  imageContainer: {
    height: 195,
    width: 140,
    // backgroundColor: "transparent",
    // elevation: 4,
    // borderColor: "red",
    // borderWidth: 2,
    // borderRadius: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageTextContainer: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: "100%",
    backgroundColor: "#fff",
    elevation: 4,
  },
  imageText: {
    textAlign: "center",
  },
});

export default Newspaper;
