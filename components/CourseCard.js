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
import Modal from "react-native-modal";
import { Overlay, Card, Divider } from "react-native-elements";
import CourseModal from "../components/CourseModal";

export default function CourseCard(props) {
  const { course } = props;
  const [isVisible, setVisible] = useState(false);
  return (
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
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 50,
    margin: 0,
    borderRadius: 4,
    backgroundColor: "#388e3c"
  }
});
