import * as userActions from "./actions";
import axios from "axios";

export function getUser(Username, Password, navigation) {
  return function(dispatch) {
    dispatch(userActions.fetchUserPending());
    axios
      .post("http://poosproject.com/StudyBuddy/studylogin.php", {
        Username: Username,
        Password: Password
      })
      .then(response => response.data)
      .then(responseJson => {
        dispatch(userActions.fetchUserSuccess(JSON.parse(responseJson)));
      })
      .then(() => navigation.navigate("Main"))
      .catch(function(error) {
        console.log(error);
      });
  };
}

export function signUpUser(Username, Password, Email, FirstName, LastName) {
  return function(dispatch) {
    axios
      .post("http://poosproject.com/StudyBuddy/studysignup.php", {
        Username: Username,
        Password: Password,
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        ConfirmPass: Password
      })
      .then(dispatch(getUser(Username, Password)))
      .catch(function(error) {
        console.log(error);
      });
  };
}
