import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import AuthStack from "./AuthStack";

export default createAppContainer(
  createSwitchNavigator(
    {
      Main: MainTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "Auth"
    }
  )
);
