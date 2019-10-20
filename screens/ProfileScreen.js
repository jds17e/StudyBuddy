import React, { useState } from "react";
import {
  Animated,
  ScrollView,
  StyleSheet,
  ListView,
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
import { FlatGrid } from "react-native-super-grid";
import PendingRequests from "../components/PendingRequests";
import { connect } from "react-redux";
import { compose } from "redux";

const mapStateToProps = ({ user }) => ({ user });

const enhance = compose(
  connect(
    mapStateToProps,
    null
  )
);

function ProfileScreen(props) {
  const courses = [
    { courseCode: "COP3014", teacher: "Larry Bird" },
    { courseCode: "ENC1105", teacher: "Lebron James" },
    { courseCode: "CEN4020", teacher: "Dwyane Wade" },
    { courseCode: "CGS3066", teacher: "Bosh" },
    { courseCode: "COP4020", teacher: "Langley" }
  ];
  const newCourses = [...courses, { courseCode: "", teacher: "" }];
  console.log("profile: ", props.user.user);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.title}>
            <Image
              style={styles.img}
              source={require("../assets/images/splash.png")}
            />
            <Text style={styles.name}>{props.user.user.Username}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <FlatGrid
              items={newCourses}
              style={styles.gridView}
              renderItem={({ item }) => (
                <CourseCard key={item.courseCode} course={item} />
              )}
            />
            {/* {courses.map(course => (
              <CourseCard key={course.courseCode} course={course} />
            ))}*/}
          </View>
        </View>
        {props.pending !== true ? <PendingRequests name={"Lucas"} /> : null}
      </ScrollView>
    </SafeAreaView>
  );
}

ProfileScreen.navigationOptions = {
  title: "",
  header: null
};

export default enhance(ProfileScreen);

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
    height: 200,
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
    borderRadius: 4,
    backgroundColor: "white"
  },
  infoContainer: {
    width: "100%",
    height: "auto",
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    zIndex: 5
  },
  gridView: {
    width: "100%"
  }
});
