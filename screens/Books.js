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
import BookComponent from "../components/BookComponent";

const Books = (props) => {
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
            <ScrollView horizontal style={styles.categories} showsHorizontalScrollIndicator={false}>
              <CategoryName
                pressed={() => {
                  props.navigation.navigate("BooksCategory", {
                    title: "AUTOBIOGRAFIJA",
                  });
                }}
                name="Autobiografija"
                number="83"
              />
              <CategoryName
                pressed={() => {
                  props.navigation.navigate("BooksCategory", {
                    title: "AVANTURISTIČKE",
                  });
                }}
                name="Avanturističke"
                number="121"
              />
              <CategoryName
                pressed={() => {
                  props.navigation.navigate("BooksCategory", {
                    title: "BESPLATNE",
                  });
                }}
                name="Besplatne"
                number="21"
              />
            </ScrollView>
          </View>

          <View style={styles.singleCategory}>
            <PurpleCategoryName name="NAJNOVIJE" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <BookComponent
                name="NEKI DRUGI"
                author="Ljiljana D. Ćuk"
                pressed={() => {
                  props.navigation.navigate("SingleBook");
                }}
              />
              <BookComponent
                name="NEKI DRUGI"
                author="Ljiljana D. Ćuk"
                pressed={() => {
                  props.navigation.navigate("SingleBook");
                }}
              />
              <BookComponent
                name="NEKI DRUGI"
                author="Ljiljana D. Ćuk"
                pressed={() => {
                  props.navigation.navigate("SingleBook");
                }}
              />
            </ScrollView>
          </View>
          <View style={styles.singleCategory}>
            <PurpleCategoryName name="NAJPRODAVANIJE" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <BookComponent
                name="NEKI DRUGI"
                author="Ljiljana D. Ćuk"
                pressed={() => {
                  props.navigation.navigate("SingleBook");
                }}
              />
              <BookComponent
                name="NEKI DRUGI"
                author="Ljiljana D. Ćuk"
                pressed={() => {
                  props.navigation.navigate("SingleBook");
                }}
              />
              <BookComponent
                name="NEKI DRUGI"
                author="Ljiljana D. Ćuk"
                pressed={() => {
                  props.navigation.navigate("SingleBook");
                }}
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

export default Books;
