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
  Dimensions
} from "react-native";
import Modal from "react-native-modal";
import { Overlay, Card, Divider } from "react-native-elements";

export default function ProfileScreen() {
  const courses = [
    { courseCode: "COP3014", title: "Programming I" },
    { courseCode: "ENC1105", title: "English" },
    { courseCode: "CEN4020", title: "Software Engineering" },
    { courseCode: "CGS3066", title: "Web Design and Programming" }
  ];
  const devWidth = Dimensions.get("window").width;
  const devHeight = Dimensions.get("window").height;
  const [isVisible, setVisible] = useState(false);
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

        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <View style={styles.titleContainer}>
              <Text style={styles.classes}>Classes</Text>
              <Divider />
            </View>

            <View style={styles.cards}>
              {courses.map(course => (
                <TouchableOpacity
                  key={course.courseCode}
                  style={styles.cardContainer}
                  onPress={() => setVisible(true)}
                >
                  <Card containerStyle={styles.card}>
                    <Text>{course.courseCode}</Text>
                  </Card>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <Modal
        isVisible={isVisible}
        onSwipeComplete={() => setVisible(false)}
        swipeDirection={["down"]}
        onRequestClose={() => setVisible(false)}
        deviceWidth={devWidth}
        devHeight={devHeight}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text>Test</Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

ProfileScreen.navigationOptions = {
  title: "",
  header: null
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    marginTop: 80,
    justifyContent: "flex-end"
  },
  modalContent: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 15,
    backgroundColor: "white"
  },
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
    height: "100%",
    borderRadius: 4,
    width: "100%",
    backgroundColor: "white",
    marginTop: 270
  },
  infoContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 5
  },
  card: {
    width: "100%",
    height: 100,
    margin: 0
  },
  cardContainer: {
    width: "50%",
    paddingLeft: 10,
    paddingBottom: 10
  },
  cards: {
    flex: 1,
    flexWrap: "wrap",
    paddingRight: 10
  }
});
