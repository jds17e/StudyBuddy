import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { Card, Button, ButtonGroup } from "react-native-elements";
import { FlatGrid } from "react-native-super-grid";

export default function PendingRequests(props) {
  const handleAccept = () => {
    console.log("accept");
  };
  const handleDecline = () => {
    console.log("decline");
  };
  const buttons = [
    { action: "Accept", func: handleAccept },
    { action: "Decline", func: handleDecline }
  ];
  return (
    <View style={styles.requestContainer}>
      <Card containerStyle={styles.request}>
        <Image
          style={styles.img}
          source={require("../assets/images/splash.png")}
        />
        <Text style={styles.title}>Study Request</Text>
        <Text style={styles.name}>{props.name}</Text>

        <FlatGrid
          items={buttons}
          renderItem={({ item }) => (
            <Button
              onPress={item.func}
              title={item.action}
              containerStyle={styles.innerButton}
              buttonStyle={styles.buttonColor}
            />
          )}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  request: {
    margin: 0,
    height: 125,
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
    flex: 1,
    flexWrap: "nowrap"
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
    flex: 1,
    width: "90%"
  }
});
