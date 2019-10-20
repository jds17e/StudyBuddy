import React, { useState } from "react";
import {
  Animated,
  ScrollView,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Platform
} from "react-native";
import { Overlay, Card, Divider } from "react-native-elements";
import CourseCard from "../components/CourseCard";

export default function ProfileScreen() {
  const courses = [
    { courseCode: "COP3014", teacher: "Larry Bird" },
    { courseCode: "ENC1105", teacher: "Lebron James" },
    { courseCode: "CEN4020", teacher: "Dwyane Wade" },
    { courseCode: "CGS3066", teacher: "Bosh" },
    { courseCode: "COP4020", teacher: "Langley" }
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Image
            style={styles.img}
            source={require("../assets/images/splash.png")}
          />
          <Text style={styles.name}>Lucas Albano</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <View style={styles.cards}>
            {courses.map(course => (
              <CourseCard key={course.courseCode} course={course} />
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

ProfileScreen.navigationOptions = {
  title: "",
  header: null
};

const styles = StyleSheet.create({
  classes: {
    fontSize: 20
  },
  titleContainer: {
    padding: 15
  },
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
    backgroundColor: "#424242",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  header: {
    width: "100%",
    height: 300,
    backgroundColor: "#676767",
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
    height: "100%",
    borderRadius: 4,
    backgroundColor: "white"
  },
  infoContainer: {
    position: "absolute",
    width: "100%",
    height: 400,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 270,
    zIndex: 5
  },
  cards: {
    flex: 1,
    flexWrap: "wrap",
    padding: 5
  }
});
