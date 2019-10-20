import React from 'react';
import { Text, View, KeyboardAvoidingView, StyleSheet, ScrollView } from 'react-native';
import { Input, Image, Button} from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function SignUpScreen() {
  return (
  	<KeyboardAwareScrollView
      style={{ backgroundColor: '#424242' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
  			<View style={{height: "25%"}}>
  			</View>
	  		<Input
	  			label='First Name'
				inputStyle={styles.inputStyle}
				containerStyle={styles.inputContainerStyle}>
	  		</Input>
	  		<Input
	  			label='Last Name'
				inputStyle={styles.inputStyle}
				containerStyle={styles.inputContainerStyle}>

	  		</Input>
	  		<Input
	  			label='Email'
				inputStyle={styles.inputStyle}
				containerStyle={styles.inputContainerStyle}>

	  		</Input>
	  		<Input
	  			label='Username'
				inputStyle={styles.inputStyle}
				containerStyle={styles.inputContainerStyle}>

	  		</Input>
	  		<Input
	  			label='Password'
				inputStyle={styles.inputStyle}
				containerStyle={styles.inputContainerStyle}>

	  		</Input>
	  		<View style={{flexDirection: "row", justifyContent: "center"}}>
	  				<Button 
	  				buttonStyle={{marginRight: 15, backgroundColor: "green", marginTop: "20%", width: 120, height: 50}}
	  				title="Submit"
	  				titleStyle={{alignSelf: "center", marginBottom: 20}}
	  				/>
	  				<Button 
			  		buttonStyle={{marginLeft: 15, backgroundColor: "green", marginTop: "20%", width: 120, height: 50}}
					title="Return"
					titleStyle={{alignSelf: "center", marginBottom: 20}}
			  		/>
	  		</View>
	</KeyboardAwareScrollView>
  	);
}

SignUpScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#424242',
    flex: 1,
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