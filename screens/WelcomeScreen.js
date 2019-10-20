import React from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Overlay, Input, Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function WelcomeScreen() {
 
  return (
  	<View style={styles.container}>
  		<View style={styles.logoView}>
  			<Image
			  source={require("../assets/images/Logo.jpg")}
			  style={{ width: "95%", height: 200 }}
			/>
  		</View>
  		<View style={styles.inputView}>
			<Input
				label='Username'
				inputStyle={styles.inputStyle}
				containerStyle={styles.inputContainerStyle}
			/>
			<Input
				label='Password'
				inputStyle={styles.inputStyle}
				containerStyle={styles.inputContainerStyle}
			/>
  		</View>
  		<View style={styles.buttonView}>
  			
  		</View>
  	</View>
  	);
}

WelcomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424242",
  },
  logoView: {
  	marginTop: "20%",
  	height: "25%",
  },
  inputView: {
  	marginTop: "15%",
  	height: "20%",
  },
  buttonView: {
  	marginTop: "2%",
  	height: "25%",
  }, 
  iconStyle: {
  	marginRight: "5%",
  },
  inputStyle: {
  	color: "#bababa",
  },
  inputContainerStyle: {
  	marginBottom: "10%",
  	width: "80%",
  	alignSelf: "center",
  }
});