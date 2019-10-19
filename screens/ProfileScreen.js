import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image
} from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.title}>
            <Image
              style={styles.img}
              source={require("../assets/images/splash.png")}
            />
            <Text style={styles.name}>Lucas Albano</Text>
          </View>
        </View>
        <View style={styles.infoBox}></View>
        <View style={styles}></View>
        <View style={styles.content}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

ProfileScreen.navigationOptions = {
  title: "",
  header: null
};

const styles = StyleSheet.create({
  img: {
    width: 80,
    height: 80,
    borderRadius: 20
  },
  content: {
    height: "100%",
    backgroundColor: "#676767"
  },
  container: {
    flex: 1,
    backgroundColor: "#424242"
  },
  header: {
    width: "100%",
    height: 300,
    backgroundColor: "#424242",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    justifyContent: "center",
    alignItems: "center"
  },
  name: {
    fontSize: 30,
    padding: 20
  },
  infoBox: {
    position: "absolute",
    height: 60,
    width: "100%",
    borderRadius: 4,
    marginLeft: 20,
    marginRight: 20
  }
});
