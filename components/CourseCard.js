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
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { Overlay, Card, Divider } from "react-native-elements";
import CourseModal from "../components/CourseModal";

export default function CourseCard(props) {
  const { course } = props;
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      {course.courseCode === "" ? (
        <>
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => setVisible(true)}
          >
            <Card containerStyle={styles.emptyCard}>
              <AntDesign name="plus" style={styles.plus} />
            </Card>
          </TouchableOpacity>
          <CourseModal
            closeModal={setVisible}
            course={course}
            isVisible={isVisible}
          />
        </>
      ) : (
        <>
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => setVisible(true)}
          >
            <Card containerStyle={styles.card}>
              <Text>{course.courseCode}</Text>
            </Card>
          </TouchableOpacity>
          <CourseModal
            closeModal={setVisible}
            course={course}
            isVisible={isVisible}
          />
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 50,
    margin: 0,
    borderRadius: 4,
    backgroundColor: "#388e3c"
  },
  emptyCard: {
    borderStyle: "dashed",
    position: "relative",
    height: 50,
    margin: 0
  },
  plus: {
    fontSize: 30,
    position: "absolute",
    left: 0,
    top: -5,
    color: "grey",
    right: 0,
    textAlign: "center"
  }
});
