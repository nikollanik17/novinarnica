import React, { useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import LoginSkip from "./screens/LoginSkip";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Newspaper from "./screens/Newspaper";
import SingleNewspaper from "./screens/SingleNewspaper";
import Rgstr from "./screens/Rgstr";
import AppNavigation from "./navigation/AppNavigation";
import Welcome from "./screens/Welcome";

export default function App() {
  let content = <AppNavigation />;

  function changeWlcm() {
    content = <LoginSkip />;
  }

  useEffect(() => {
    setTimeout(changeWlcm, 2000);
  });

  return content;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
