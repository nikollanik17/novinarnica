import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PurpleCategoryName = (props) => {
  return (
    <View style={styles.singleCategoryWrapper}>
      <View style={styles.singleCategoryNameContainer}>
        <Text style={styles.singleCategoryName}>{props.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default PurpleCategoryName;
