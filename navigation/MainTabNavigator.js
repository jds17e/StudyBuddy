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

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-home"} />
};

HomeStack.path = "";

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-person"} />
  )
};

ProfileStack.path = "";

const tabNavigator = createMaterialTopTabNavigator(
  {
    HomeStack,
    ProfileStack
  },

  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "#388e3c",
      inactiveTintColor: "#424242",
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: "#757575",
        height: "8%"
      },
      indicatorStyle: {
        height: "5%",
        backgroundColor: "#white"
      },
      labelStyle: {
        fontSize: 12,
        fontWeight: "bold"
      }
    }
  }
);

tabNavigator.path = "";

export default tabNavigator;
