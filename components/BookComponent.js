import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const NewspaperComponent = (props) => {
  return (
    <View
      style={{
        margin: 10,
        alignItems: "center",
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={props.pressed} activeOpacity={0.6}>
        <View style={styles.imageContainer}>
          <Image source={require("../assets/book1.png")} style={styles.image} />
        </View>
      </TouchableOpacity>
      <View style={styles.imageTextContainer}>
        <Text style={styles.imageText}>{props.name}</Text>
        <Text style={styles.author}>{props.author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 240,
    width: 160,
    borderRadius: 5,
    // backgroundColor: "transparent",
    // elevation: 6,
  },
  image: {
    width: "100%",
    height: "100%",
    // borderRadius: 5,
  },
  imageTextContainer: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: "100%",
    backgroundColor: "#fff",
    elevation: 4,
  },
  imageText: {
    textAlign: "center",
    color: "#555",
    fontWeight: "700",
  },
  author: {
    color: "#555",
    textAlign: "center",
  },
});

export default NewspaperComponent;
