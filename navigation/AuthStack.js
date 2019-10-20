import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import WelcomeScreen from "../screens/WelcomeScreen";
import SignUpScreen from "../screens/SignUpScreen";


const AuthStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    SignUp: SignUpScreen,
  },
);

AuthStack.path = "";

export default AuthStack;
