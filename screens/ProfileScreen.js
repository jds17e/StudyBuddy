import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default function ProfileScreen() {
        return <ScrollView style={styles.container}>
            
                </ScrollView>;
}

ProfileScreen.navigationOptions = {
  title: "Profile",
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
