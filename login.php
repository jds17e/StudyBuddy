<?php
  // Receive a JSON with the usernname and password of the user
  // validate the information with the Database
  // return a JSON with the UserID and the Error code if there is any
  header('Content-Type: application/json');
  require_once "Database2.php";
  $inData = getRequestInfo();
  $Username="";
  $Password="";
  $UserID="";
  // take input JSON
  function getRequestInfo()
  {
    return json_decode(file_get_contents('php://input'), true);
  }
  // check for post request
  if($_SERVER["REQUEST_METHOD"] == "POST")
  {
    $Username = trim($inData["Username"]);
    $Password = trim($inData["Password"]);
    // select all the columes in the database
    $sql = "SELECT * FROM User WHERE Username=?";
    if($stmt = $mysqli->prepare($sql))
    {
      // bind variables to the prepared statement
      // s for type string
      $stmt->bind_param("s", $UsernameParam);
      $UsernameParam = $Username;
      // try to execute the prepared statement, print error if failed
      if($stmt->execute())
      {
        $stmt->store_result();
        // if Username exists, row count must = 1, else print error
        if($stmt->num_rows() == 1)
        {
          // Bind database result to variables
          $stmt->bind_result($Username, $email, $db_Password, $firstName, $lastName, $UserID,
          $year, $school, $studyfrq, $studywhere, $lactivity);
          if($stmt->fetch())
          {
            // compare input Password with databas Password
            // print error if they don't match
            // use password_verify b/c $db_password is hashed
            if(password_verify($Password, $db_Password))
            {
              $secret_key = "01100010110101101000011110";
              $issuer_claim = "welovedomaindotcom";
              $issuedate_claim = time();
              $notbefore_claim = $issuedate + 1;
              $expire_claim = $issuedate + 3601;
              $token = array(
                 "iss" => $issuer_claim,
                 "iat" => $issuedate_claim,
                 "nbf" => $notbefore_claim,
                 "exp" => $expire_claim,
                 "data" =>array(
                   "UserID" => $UserID,
                   "Username" => $Username,
                   "Email" => $email,
                   "FirstName" => $firstName,
                   "LastName" => $lastName,
                   "Year" => $year,
                   "School" => $school,
                   "StudyFreq" => $studyfrq,
                   "Where" => $studywhere,
                   "LastActive" => $lactivity
                 );
              )
              $jwt = JWT::encode($token, $secret_key);
              $data = json_encode(
                array(
                  "jwt" => $jwt,
                  "UserID" => $UserID,
                  "Username" => $Username,
                  "Email" => $email,
                  "FirstName" => $firstName,
                  "LastName" => $lastName,
                  "Year" => $year,
                  "School" => $school,
                  "StudyFreq" => $studyfrq,
                  "Where" => $studywhere,
                  "LastActive" => $lactivity,
                  "Error" => ""
                ));
              http_response_code(200);
              echo json_encode($data);
            }
            else
            {
              $data = array(
                "Error"=>"Incorrect Password"
              );
              http_response_code(404);
              echo json_encode($data);
            }
          }
        }
        else
        {
          $data = array(
            "Error"=>"Incorrect Username"
          );
          http_response_code(404);
          echo json_encode($data);
        }
      }
    }
    else
    {
      $data = array(
        "Error"=>"Statement Error! $stmt->error"
      );
      http_response_code(418);
      echo json_encode($data);
    }
  }
?>
