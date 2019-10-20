import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { Card, Button, ButtonGroup } from "react-native-elements";

export default function PendingRequests(props) {
  const handleAccept = () => {
    console.log("accept");
  };
  const handleDecline = () => {
    console.log("decline");
  };
  return (
    <View style={styles.requestContainer}>
      <Card containerStyle={styles.request}>
        <Image
          style={styles.img}
          source={require("../assets/images/splash.png")}
        />
        <Text style={styles.title}>Study Request</Text>
        <Text style={styles.name}>{props.name}</Text>
        <Button
          onPress={handleDecline}
          title="Decline"
          containerStyle={styles.innerButton}
          buttonStyle={styles.buttonColor}
        />
        <Button
          onPress={handleAccept}
          title="Accept"
          containerStyle={styles.innerButton}
          buttonStyle={styles.buttonColor}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  request: {
    margin: 0,
    height: 100,
    borderRadius: 4
  },
  img: {
    width: 40,
    height: 40,
    flex: 1,
    borderRadius: 20
  },
  requestContainer: {
    width: "100%",
    borderRadius: 4,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15
  },
  title: {
    fontSize: 20
  },
  name: {
    paddingTop: 10
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
    backgroundColor: "#338e3c",
    width: "50%"
  },
  innerButton: {
    width: "90%"
  }
});
