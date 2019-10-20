<?php

  header('Content-Type: application/json');
  require_once "Database2.php";
  $inData = getRequestInfo();
  $Username = ""
  $Password = "";
  $confirmPass = "";
  $firstName = "";
  $lastName = "";
  $email = "";
  $UserID= "";
  function getRequestInfo()
  {
    return json_decode(file_get_contents('php://input'), true);
  }
  // check for post request
  if ($_SERVER["REQUEST_METHOD"]=="POST")
  {
    $Username = trim($inData["Username"]);
    $Password = trim($inData["Password"]);
    $confirmPass = trim($inData["ConfirmPass"]);
    $lastName = trim($inData["LastName"]);
    $firstName = trim($inData["FirstName"]);
    $email = trim($inData["Email"]);
    // check for empty field
    if (strlen($Username)<1)
    {
      $data = array("Error"=>"Please enter a username");
      http_response_code(406);
      echo json_encode($data);
      exit();
    }

    if (strlen($email)<1)
    {
      $data = array("Error"=>"Please enter a email");
      http_response_code(406);
      echo json_encode($data);
      exit();
    }

    if (strlen($Password)<1)
    {
      $data = array("Error"=>"Please enter a password");
      http_response_code(406);
      echo json_encode($data);
      exit();
    }

    if (strlen($confirmPass)<1)
    {
      $data = array("Error"=>"Please confirm password");
      http_response_code(406);
      echo json_encode($data);
      exit();
    }

    if (strlen($firstName)<1)
    {
      $data = array("Error"=>"Please enter a first name");
      http_response_code(406);
      echo json_encode($data);
      exit();
    }

    if (strlen($lastName)<1)
    {
      $data = array("Error"=>"Please enter a last name");
      http_response_code(406);
      echo json_encode($data);
      exit();
    }
    // Check for lastname length
    if(strlen($firstName)>20)
    {
      $data = array("Error"=>"First name length limit(20) exceeded!");
      http_response_code(406);
      echo json_encode($data);
      exit();
    }
    // Check for Firstname length
    if(strlen($lastName)>20)
    {
      $data = array("Error"=>"Last name length limit(20) exceeded!");
      http_response_code(406);
      echo json_encode($data);
      exit();
    }
    if(strlen($Username)>20)
    {
      $data = array("Error"=>"Username length limit(20) exceeded!");
      http_response_code(406);
      echo json_encode($data);
      exit();
    }
    // get info from database to check for dublicate Username
    $sql = "SELECT * FROM User WHERE username=?";
    if ($stmt = $mysqli->prepare($sql))
    {
      // bind variables to the prepared statement
      // s for type string
      $stmt->bind_param("s", $UsernameParam);
      $UsernameParam = $Username;
      // try to execute the prepared statement, print error if failed
      if($stmt->execute())
      {
        $stmt->store_result();
        // if Username exists, row count must be greater than 0
        if($stmt->num_rows() > 0)
        {
          $data = array("Error"=>"Username already taken");
          http_response_code(406);
          echo json_encode($data);
          exit();
        }
      }
      else
      {
        $data = array("Error"=>"Statement Error!");
        http_response_code(418);
        echo json_encode($data);
        exit();
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
    // close statement to start a new one for email
    $stmt->close();
    if (!filter_var($email, FILTER_VALIDATE_EMAIL))
    {
      $data = array("Error"=>"Invalid email address");
      http_response_code(406);
      echo json_encode($data);
      exit();
    }
    // Username available. Begininng signup process
    // validate Password. Password must be between 1-20 characters
    if (!(strlen($Password) >= 8 && strlen($Password) <= 20))
    {
      $data = array("Error"=>"Password must be between 8 to 20 characters long");
      http_response_code(406);
      echo json_encode($data);
      exit();
    }
    else
    {
      if ($Password != $confirmPass)
      {
        $data = array("Error"=>"Password does not match");
        http_response_code(406);
        echo json_encode($data);
        exit();
      }
      // Insert data into table
      $sql = "INSERT INTO User (Username, Password) VALUES (?,?)";
      // Prepare statement & check for errors
      if ($stmt = $mysqli->prepare($sql))
      {
        // bind variables to parameters to insert
        // Type s for string
        $stmt->bind_param("ss", $UsernameParam, $PasswordParam);
        // Give values to parameters
        $UsernameParam = $Username;
        $PasswordParam = Password_hash($Password, PASSWORD_DEFAULT);
        // try to execute the prepared statement, print error if faile
        if ($stmt->execute())
        {
          $UserID = $mysqli->insert_id;
          $data = array(
            "Error" => ""
          )
          http_response_code(200);
          echo json_encode($data);
        }
        else
        {
          $data = array("Error"=>"Failed to make account");
          http_response_code(500);
          echo json_encode($data);
        }
      }
      $stmt->close();
    }
  }
?>
