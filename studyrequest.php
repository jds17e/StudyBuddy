<?php
	header('Content-Type: application/json');
	require_once "Database2.php";
	$inData = getRequestInfo();
	$userID = -1;
	$bID = -1;
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
		$userID = trim($inData["UserID"]);
		$bID = trim($inData["Buddy"]);
		$sql = "SELECT * FROM Request WHERE sender = ? AND reciever = ?";
		if ($stmt = $mysqli->prepare($sql))
    {
			$stmt->bind_param("ii", $uIDParam, $bIDParam);
			$uIDParam = $userID;
			$bIDParam = $bID;
			if ($stmt->execute())
			{
				$stmt->store_result();
				if ($stmt->num_rows()  < 1)
				{
					$stmt->close();
					$sql = "INSERT INTO Request (sender, reciever, response) VALUES (?, ?, ?)";
					if ($stmt = $mysqli->prepare($sql))
			    {
						$stmt->bind_param("iii", $uIDParam, $bIDParam, $responseParam);
						$uIDParam = $userID;
						$bIDParam = $bID;
						$responseParam = 0;
						if ($stmt->execute())
						{
							$data = array(
								"Error"=> ""
							);
							http_response_code(200);
							echo json_encode($data);
							exit();
						}
						else
						{
							$data = array("Error"=>"Failed to make request");
		          http_response_code(500);
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

				}
				else
				{
					$stmt->bind_result($userID, $bID, $response);
					if ($stmt->fetch())
					{
						if ($response < 0)
						{
							$data = array(
								"Message"=> "Request Denied",
								"Error"=> ""
							);
							http_response_code(200);
							echo json_encode($data);
							exit();
						}
						else
						{
							$data = array(
								"Message"=> "Request Accepted",
								"Error"=> ""
							);
							http_response_code(200);
							echo json_encode($data);
							exit();
						}
					}
				}
			}
		}
	}

?>
