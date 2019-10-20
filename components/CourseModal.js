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
import { ButtonGroup, Button, Input, Divider } from "react-native-elements";

export default function CourseModal(props) {
  const devWidth = Dimensions.get("window").width;
  const devHeight = Dimensions.get("window").height;
  const [courseCode, setCourseCode] = useState(props.course.courseCode);
  const [teacher, setTeacher] = useState(props.course.teacher);
  const SaveButton = () => (
    <Button
      onPress={handleSave}
      title="Save"
      containerStyle={styles.innerButton}
      buttonStyle={styles.buttonColor}
    />
  );
  const ClearButton = () => (
    <Button
      onPress={handleClear}
      title="Clear"
      containerStyle={styles.innerButton}
      buttonStyle={styles.buttonColor}
    />
  );

  const buttons = [{ element: SaveButton }, { element: ClearButton }];
  const handleSave = () => {
    props.closeModal(false);
  };
  const handleClear = () => {
    setTeacher(props.course.teacher);
    setCourseCode(props.course.courseCode);
  };
  return (
    <Modal
      isVisible={props.isVisible}
      onSwipeComplete={() => props.closeModal(false)}
      swipeDirection={["down"]}
      onRequestClose={() => props.closeModal(false)}
      deviceWidth={devWidth}
      devHeight={devHeight}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <Text style={styles.title}>{courseCode}</Text>
        <Input
          containerStyle={styles.input}
          label="Course Code"
          labelStyle={styles.label}
          inputStyle={styles.inputColor}
          value={courseCode}
          onChangeText={text => setCourseCode(text)}
        />
        <Input
          containerStyle={styles.input}
          label="Teacher"
          labelStyle={styles.label}
          inputStyle={styles.inputColor}
          value={teacher}
          autoCapitalize={"words"}
          onChangeText={text => setTeacher(text)}
        />

        <ButtonGroup
          buttons={buttons}
          innerBorderStyle={styles.border}
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "white"
  },
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
    backgroundColor: "#424242"
  },
  input: {
    marginTop: 10,
    marginBottom: 10
  },
  label: {
    color: "#338e3c"
  },
  buttonContainer: {
    borderColor: "#424242"
  },
  button: {
    backgroundColor: "#424242"
  },
  border: {
    color: "#424242"
  },
  buttonColor: {
    backgroundColor: "#338e3c"
  },
  innerButton: {
    width: "90%"
  },
  inputColor: {
    color: "white"
  }
});
