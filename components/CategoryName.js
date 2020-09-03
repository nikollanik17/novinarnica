import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CategoryName = (props) => {
  return (
    <TouchableOpacity onPress={props.pressed}>
      <View style={styles.category}>
        <Text style={styles.categoryNumber}>{props.number}</Text>
        <Text style={styles.categoryName}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  category: {
    paddingVertical: 8,
    paddingHorizontal: 25,
    backgroundColor: "#eee",
    marginHorizontal: 8,
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
});

export default CategoryName;
