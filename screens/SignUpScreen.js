import React, { useState }from 'react';
import { Text, View, KeyboardAvoidingView, StyleSheet, ScrollView } from 'react-native';
import { Input, Image, Button} from 'react-native-elements';
import axios from 'axios'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function SignUpScreen({navigation}) {

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
	const [Username, setUsername] = useState("");
	const [Password, setPassword] = useState("");

  return (
  	<KeyboardAwareScrollView
      style={{ backgroundColor: '#424242' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      enableAutomaticScroll={true}
      enableOnAndroid={true}
    >
  			<View style={{height: "20%", alignItems: "center", paddingTop: "15%"}}>
  				<Text style={{fontSize: 40, color: "white"}}> Sign Up! </Text>
  			</View>
	  		<Input
	  			label='First Name'
  				inputStyle={styles.inputStyle}
  				containerStyle={styles.inputContainerStyle}
          onChangeText={text => setFirstName(text)}>
	  		</Input>
	  		<Input
	  			label='Last Name'
  				inputStyle={styles.inputStyle}
  				containerStyle={styles.inputContainerStyle}
          onChangeText={text => setLastName(text)}>
	  		</Input>
	  		<Input
	  			label='Email'
				inputStyle={styles.inputStyle}
				containerStyle={styles.inputContainerStyle}
        onChangeText={text => setEmail(text)}>
	  		</Input>
	  		<Input
	  			label='Username'
				inputStyle={styles.inputStyle}
				containerStyle={styles.inputContainerStyle}
        onChangeText={text => setUsername(text)}>
	  		</Input>
	  		<Input
	  		label='Password'
				inputStyle={styles.inputStyle}
				containerStyle={styles.inputContainerStyle}
        onChangeText={text => setPassword(text)}>
	  		</Input>
	  		<View style={{flexDirection: "row", justifyContent: "center"}}>
	  				<Button 
	  				buttonStyle={{marginRight: 15, backgroundColor: "green", marginTop: "20%", width: 120, height: 50}}
	  				title="Submit"
	  				titleStyle={{alignSelf: "center", marginBottom: 20}}
            onPress={() => {signUp(Username, Password, FirstName, LastName, Email)}}
	  				/>
	  				<Button 
			  		buttonStyle={{marginLeft: 15, backgroundColor: "green", marginTop: "20%", width: 120, height: 50}}
					title="Return"
					titleStyle={{alignSelf: "center", marginBottom: 20}}
					onPress={()=>{navigation.navigate("Welcome")}}
			  		/>
	  		</View>
	  </KeyboardAwareScrollView>
  );
}

async function signUp(Username, Password, FirstName, LastName, Email){
  try{
    axios.post('http://poosproject.com/StudyBuddy/studysignup.php', {
      "Username": Username,
      "Password": Password,
      "FirstName": FirstName,
      "LastName": LastName,
      "Email": Email,
      "ConfirmPass": Password
    })
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
  });
  }catch(error){
    console.log("Hoe")
  }
}


SignUpScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#424242',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
  	width: "100%",
  	height: "50%",
  	backgroundColor: "white",
  },
  topView: {
  	width: "100%",
  	height: "20%",
  	backgroundColor: "#bababa"
  },
  buttonView: {
  	width: "100%",
  	height: "10%",
  	backgroundColor: "#bababa"
  },
  keyboard: {
  	flex: 1
  },
  inputStyle: {
  	color: "#bababa",
  },
  inputContainerStyle: {
  	marginBottom: "5%",
  	width: "80%",
  	alignSelf: "center",
  }
});