import React from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Ionicons,
  FontAwesome5,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Newspaper from "../screens/Newspaper";
import SingleNewspaper from "../screens/SingleNewspaper";
import NewspaperCategory from "../screens/NewspaperCategory";
import Books from "../screens/Books";
import Preuzeto from "../screens/Preuzeto";
import Vise from "../screens/Vise";
import BooksCategory from "../screens/BooksCategory";
import SingleBook from "../screens/SingleBook";

import NewspaperIc from "../components/icons/NewspaperIc";
import BookIc from "../components/icons/BookIc";
import DownloadIc from "../components/icons/DownloadIc";
import MoreIc from "../components/icons/MoreIc";

const Stack = createStackNavigator();
const BooksStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Newspaper"
        component={Newspaper}
        options={{
          headerTitle: (props) => (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f1f1f1",
                borderRadius: 4,
              }}
            >
              <Ionicons
                style={{ padding: 10, paddingLeft: 20 }}
                name="ios-search"
                size={23}
                color="#C7C7C7"
              />
              <TextInput
                style={{
                  flex: 1,
                  paddingLeft: 10,
                  paddingVertical: 8,
                  borderRadius: 4,
                  fontSize: 16,
                }}
                placeholder="Pretraga"
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="SingleNewspaper"
        component={SingleNewspaper}
        options={({ route }) => ({
          headerTitle: (props) => (
            <View style={{ alignItems: "center", marginLeft: -55 }}>
              <Text style={{ fontSize: 16, color: "#555" }}>NOVOSTI</Text>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="NewspaperCategory"
        component={NewspaperCategory}
        options={({ route }) => ({
          headerTitle: (props) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                marginRight: -17,
              }}
            >
              <View
                style={{
                  backgroundColor: "#BD78B6",
                  borderTopLeftRadius: 3,
                  borderBottomLeftRadius: 3,
                  paddingRight: 13,
                  paddingVertical: 9,
                  paddingLeft: 50,
                  elevation: 6,
                }}
              >
                <Text style={{ fontSize: 15, color: "#fff" }}>
                  {route.params.title}
                </Text>
              </View>
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const BooksNavigation = () => {
  return (
    <BooksStack.Navigator>
      <BooksStack.Screen
        name="Books"
        component={Books}
        options={{
          headerTitle: (props) => (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f1f1f1",
                borderRadius: 4,
              }}
            >
              <Ionicons
                style={{ padding: 10, paddingLeft: 20 }}
                name="ios-search"
                size={23}
                color="#C7C7C7"
              />
              <TextInput
                style={{
                  flex: 1,
                  paddingLeft: 10,
                  paddingVertical: 8,
                  borderRadius: 4,
                  fontSize: 16,
                }}
                placeholder="Pretraga"
              />
            </View>
          ),
        }}
      />
      <BooksStack.Screen
        name="SingleNewspaper"
        component={SingleNewspaper}
        options={({ route }) => ({
          headerTitle: (props) => (
            <View style={{ alignItems: "center", marginLeft: -55 }}>
              <Text style={{ fontSize: 16, color: "#555" }}>
                NEKI DRUGI COVEK
              </Text>
            </View>
          ),
        })}
      />
      <BooksStack.Screen
        name="BooksCategory"
        component={BooksCategory}
        options={({ route }) => ({
          headerTitle: (props) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                marginRight: -17,
              }}
            >
              <View
                style={{
                  backgroundColor: "#BD78B6",
                  borderTopLeftRadius: 3,
                  borderBottomLeftRadius: 3,
                  paddingRight: 13,
                  paddingVertical: 9,
                  paddingLeft: 50,
                  elevation: 6,
                }}
              >
                <Text style={{ fontSize: 15, color: "#fff" }}>
                  {route.params.title}
                </Text>
              </View>
            </View>
          ),
        })}
      />
      <BooksStack.Screen
        name="SingleBook"
        component={SingleBook}
        options={({ route }) => ({
          headerTitle: (props) => (
            <View style={{ alignItems: "center", marginLeft: -55 }}>
              <Text style={{ fontSize: 16, color: "#555" }}>NOVOSTI</Text>
            </View>
          ),
        })}
      />
    </BooksStack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "newspaper";
            let tabName = "NOVINE";
            let IconType = NewspaperIc;

            if (route.name === "BooksNav") {
              iconName = "book";
              tabName = "KNJIGE";
              IconType = BookIc;
            } else if (route.name === "PREUZETO") {
              iconName = "download";
              tabName = "PREUZETO";
              IconType = DownloadIc;
            } else if (route.name === "VISE") {
              iconName = "dots-horizontal";
              tabName = "VIŠE";
              IconType = MoreIc;
            }
            let tabComp = (
              <View
                style={
                  focused
                    ? {
                        backgroundColor: "#CFFB53",
                        height: 83,
                        paddingTop: 35,
                        paddingBottom: 25,
                        width: 80,
                        // paddingHorizontal: 15,
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderColor: "#fff",
                        borderWidth: 2,
                        justifyContent: "center",
                        alignItems: "center",
                        elevation: 8,
                      }
                    : {
                        paddingTop: 20,
                        justifyContent: "center",
                        alignItems: "center",
                      }
                }
              >
                <IconType
                  // name={iconName}
                  // size={25}
                  // color={focused ? "#292929" : "#eee"}
                  active={focused ? true : false}
                />
                <Text
                  style={
                    focused
                      ? { color: "#292929", marginTop: 8 }
                      : { color: "#eee", marginTop: 8 }
                  }
                >
                  {tabName}
                </Text>
              </View>
            );
            // You can return any component that you like here!
            return tabComp;
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: "rgba(39, 39, 39, 0.99)",
            height: 70,
            paddingHorizontal: 13,
          },
        }}
      >
        <Tab.Screen
          name="NOVINE"
          component={AppNavigation}
          options={{
            title: "",
          }}
        />
        <Tab.Screen
          name="BooksNav"
          component={BooksNavigation}
          options={{
            title: "",
          }}
        />
        <Tab.Screen
          name="PREUZETO"
          component={Preuzeto}
          options={{
            title: "",
          }}
        />
        <Tab.Screen
          name="VISE"
          component={Vise}
          options={{
            title: "",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
