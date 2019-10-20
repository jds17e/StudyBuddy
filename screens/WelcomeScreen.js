import React, { useState } from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, Button } from 'react-native';
import { Overlay, Input, Image } from 'react-native-elements';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function WelcomeScreen({navigation}) {

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
 
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
					onChangeText={text => setUsername(text)}
				/>
				<Input
					label='Password'
					inputStyle={styles.inputStyle}
					containerStyle={styles.inputContainerStyle}
          onChangeText={text => setPassword(text)}
				/>
	  		</View>
	  		<View style={styles.buttonView}>
	  			<View style={styles.buttonStyle}>
	  				<Button  
	  					title="Sign In"	
	  					onPress={() => {signIn(Username, Password)}}
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

async function signIn(Username, Password){
  try{
    fetch('http://poosproject.com/StudyBuddy/studylogin.php', {
      "Username": Username,
      "Password": Password
    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson.FirstName);
    })
    .catch(function (error) {
    console.log(error);
  });
  }catch(error){
    console.log(error)
  }
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