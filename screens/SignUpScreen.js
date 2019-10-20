import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function SignUpScreen() {
 
  return (
  	<View style={styles.container}>
  		<Text> Hello, world! </Text>
  	</View>
  	);
}

SignUpScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424242",
  }
});