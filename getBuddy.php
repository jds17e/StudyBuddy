<?php
	header('Content-Type: application/json');
	require_once "Database2.php";
	$inData = getRequestInfo();
	$userID = -1;
	$rows = -1;
	$school = "";
	$code = "";
	$prof = "";
	$buddya = array();
	$buddy_arr = array();
	$buddy_arr["buddy"] = array();
	function getRequestInfo()
	{
		return json_decode(file_get_contents('php://input'), true);
	}
	if ($_SERVER["REQUEST_METHOD"] == "POST")
	{
		// $authHeader = $_SERVER['HTTP_AUTHORIZATION'];
		//
		// $arr = explode(" ", $authHeader);
		// $jwt = $arr[1];
		$code = trim($inData["Code"]);
		$prof = trim($inData["Prof"]);
		$school = trim($inData["School"]);
		// $decoded = JWT::decode($jwt, $secret_key, array('HS256'));

		$sql = "SELECT userid FROM Class WHERE code = ? AND school = ? OR prof = ? ORDER BY userid ASC";
		if ($stmt = $mysqli->prepare($sql))
    {
     	$stmt->bind_param("iss", $codeParam, $schoolParam, $profParam);
    	$codeParam = $code;
  		$profParam = $prof;
			$schoolParam = $school;
    	if($stmt->execute())
    	{
     		$stmt->store_result();
     		if(($rows = $stmt->num_rows()) > 0)
     		{
     			$stmt->bind_result($userID);
       		while($stmt->fetch())
       		{
						array_push($buddya, $userID);
					}
     		}
				else
				{
					$data = array(
						"Error" => "No matches"
					);
					http_response_code(200);
					echo json_encode($data);
					exit();
				}
   		}
   		else
   		{
     		$data = array("Error"=>"Bad Request.");
     		http_response_code(400);
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
			exit();
		}
		$stmt->close();

		while($rows > 0)
		{
			$sql = "SELECT * FROM User WHERE userid = ? AND school = ?";
			if ($stmt = $mysqli->prepare($sql))
			{
				$stmt->bind_param("is", $idParam, $schoolParam);
				$idParam = $buddya[$rows - 1];
				$schoolParam = $school;
				if ($stmt->execute())
				{
					$stmt->store_result();
       		if(($stmt->num_rows()) > 0)
       		{
       			$stmt->bind_result($busername, $bmail, $bpass, $bf, $bl, $bID,
						$byear, $bschool, $bstudyfreq, $bwhere, $blatest);
         		while($stmt->fetch())
         		{
							$data = array(
								"Username"=>$busername,
       					"UserID"=>$bID,
								"Year"=>$byear,
								"StudyFreq"=>$bstudyfreq,
								"Where"=>$bwhere,
								"LastActive"=>$blatest,
       					"Error"=>""
							);
       				array_push($buddy_arr["buddy"], $data);
       			}
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
			$rows = $rows - 1;
		}
		http_response_code(200);
		echo json_encode($buddy_arr);
	}
?>
