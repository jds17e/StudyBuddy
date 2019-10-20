import * as userActions from "./actions";
import axios from "axios";

export function getUser(Username, Password) {
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
      .catch(function(error) {
        console.log(error);
      });
  };
}
