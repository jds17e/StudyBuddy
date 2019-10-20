import React from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, Button } from 'react-native';
import { Overlay, Input, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function WelcomeScreen({navigation}) {
 
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
	  			<View style={styles.buttonStyle}>
	  				<Button  
	  					title="Sign In"	
	  					onPress={() => signIn()}
	  				/>
	  			</View>
	  			<View style={styles.buttonStyle}>
	  				<Button  
	  					title="Sign Up"
	  					onPress={()=>{navigation.navigate("SignUp")}}
	  				/>
	  			</View>
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
  	marginTop: "10%",
  	height: "25%",
  },
  inputView: {
  	marginTop: "8%",
  	height: "20%",
  },
  buttonView: {
  	flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: "40%",
    marginLeft: '17%',
    marginRight: '15%',
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
  },
  keyboard: {
  	flex: 1,
  },
  buttonStyle: {
  	width: "30%",
  }
});