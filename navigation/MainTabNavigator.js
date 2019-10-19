import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

HomeStack.path = "";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
  },
);

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

ProfileStack.path = "";

const tabNavigator = createMaterialTopTabNavigator({
  HomeStack,
  ProfileStack,
},

{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'grey',
    showIcon: true,
    style: {
      backgroundColor: '#FFFFFF',
      height: '8%',
    },
    indicatorStyle: {
      height: 0,
    },
    labelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
    },
  },
});

tabNavigator.path = "";

export default tabNavigator;
