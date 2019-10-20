import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import { Overlay, Input, Image, Button } from "react-native-elements";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { compose } from "redux";
import { userOperations } from "../store/user";

const mapStateToProps = ({ user }) => ({ user });

const actions = {
  getUser: userOperations.getUser
};

const enhance = compose(
  connect(
    mapStateToProps,
    actions
  )
);

function WelcomeScreen({ navigation, getUser }) {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [user, setUser] = useState({});
  console.log("USER: ", user["UserID"]);

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
          label="Username"
          inputStyle={styles.inputStyle}
          containerStyle={styles.inputContainerStyle}
          onChangeText={text => setUsername(text)}
        />
        <Input
          label="Password"
          inputStyle={styles.inputStyle}
          containerStyle={styles.inputContainerStyle}
          onChangeText={text => setPassword(text)}
          secureTextEntry= {true}
        />
      </View>
      <View style={{flexDirection: "row", justifyContent: "center"}}>
        
          <Button
            title="Sign In"
            buttonStyle={{marginRight: 15, backgroundColor: "#388e3c", marginTop: "50%", width: 120, height: 50}}
            titleStyle={{alignSelf: "center", marginBottom: 20}}
            onPress={() => {
              getUser(Username, Password, navigation);
            }}
          />
        
          <Button
            title="Sign Up"
            buttonStyle={{marginRight: 15, backgroundColor: "#388e3c", marginTop: "50%", width: 120, height: 50}}
            titleStyle={{alignSelf: "center", marginBottom: 20}}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          />
        
      </View>
    </View>
  );
}

WelcomeScreen.navigationOptions = {
  header: null
};

export default enhance(WelcomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424242"
  },
  logoView: {
    marginTop: "10%",
    height: "25%"
  },
  inputView: {
    marginTop: "8%",
    height: "20%"
  },
  buttonView: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "40%",
    marginLeft: "17%",
    marginRight: "15%"
  },
  iconStyle: {
    marginRight: "5%"
  },
  inputStyle: {
    color: "#bababa"
  },
  inputContainerStyle: {
    marginBottom: "10%",
    width: "80%",
    alignSelf: "center"
  },
  keyboard: {
    flex: 1
  },
  buttonStyle: {
    width: "30%"
  }
});
