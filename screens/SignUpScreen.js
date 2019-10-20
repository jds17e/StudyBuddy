import React, { useState } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView
} from "react-native";
import { Input, Image, Button } from "react-native-elements";
import axios from "axios";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connect } from "react-redux";
import { compose } from "redux";
import { userOperations } from "../store/user";

const mapStateToProps = ({ user }) => ({ user });

const actions = {
  signUpUser: userOperations.signUpUser
};

const enhance = compose(
  connect(
    mapStateToProps,
    actions
  )
);

function SignUpScreen({ navigation, signUpUser }) {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const signUp = (Username, Password, Email, FirstName, LastName) => {
    signUpUser(Username, Password, Email, FirstName, LastName);
    navigation.navigate("Main");
  };

  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: "#424242" }}
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
        onChangeText={text => setPassword(text)}
        secureTextEntry= {true}>
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

SignUpScreen.navigationOptions = {
  header: null
};

export default enhance(SignUpScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#424242",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inputView: {
    width: "100%",
    height: "50%",
    backgroundColor: "white"
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
    color: "#bababa"
  },
  inputContainerStyle: {
    marginBottom: "5%",
    width: "80%",
    alignSelf: "center"
  }
});
