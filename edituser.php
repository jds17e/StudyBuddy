<?php
	header('Content-Type: application/json');
  require_once "Database2.php";
  $inData = getRequestInfo();
  $UserId="";
  $ConfirmPass="";
  function getRequestInfo()
  {
    return json_decode(file_get_contents('php://input'), true);
  }
  if ($_SERVER["REQUEST_METHOD"] == "POST")
  {
    $UserId = trim($inData["UserID"]);
    $Password = trim($inData["Password"]);
    $ConfirmPass = trim($inData["ConfirmPass"]);
		$Username = trim($inData["Username"]);
		$Year = trim($inData["Year"]);
		$Where = trim($inData["Where"]);
		$Last = trim($inData["LastActive"]);
		$SFreq = trim($inData["StudyFreq"]);
		$School = trim($inData["School"]);
		$FName = trim($inData["FirstName"]);
		$LName = trim($inData["LastName"]);
		$Email = trim($inData["Email"]);

    if (strlen($Password) < 8 || strlen($Password) > 20)
    {
      $data = array(
        "Error"=>"Password must be between 8 to 20 characters long"
      );
      http_response_code(406);
      echo json_encode($data);
    }
    else if ($Password != $ConfirmPass)
    {
      $data = array(
        "Error"=>"Password does not match!"
      );
      http_response_code(406);
      echo json_encode($data);
    }
    $sql = "UPDATE User SET password=?, username=?, year=?, studywhere=?, school=?, studyfrequency=?, latestactivity=?, email=?, firstname=?, lastname=? WHERE userid=?";
    if($stmt = $mysqli->prepare($sql))
    {
      // bind variables to the prepared statement
      // s for type string, i for type integer
      $stmt->bind_param("ssssssssssi", $PasswordParam, $UsernameParam, $yearParam, $whereParam,
			$schoolParam, $freqParam, $latestParam, $emailParam, $firstParam, $lastParam, $IDParam);
      // hash new password before updating
      $PasswordParam = Password_hash($Password, PASSWORD_DEFAULT);
      $UsernameParam = $Username;
			$yearParam = $Year;
			$whereParam = $Where;
			$schoolParam = $School;
			$freqParam = $SFreq;
			$latestParam = $Last;
			$emailParam = $Email;
			$firstParam = $FName;
			$lastParam = $LName;
			$IDParam = $UserId;
      // try to execute the prepared statement, print error if failed
      if($stmt->execute())
      {
        $data = array(
          "Error"=>""
        );
        http_response_code(200);
        echo json_encode($data);
				exit();
      }
      else
      {
        $data = array(
          "Error"=>"Update Error!"
        );
        http_response_code(418);
        echo json_encode($data);
      }
    }
  }
?>
