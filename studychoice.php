<?php
header('Content-Type: application/json');
require_once "Database2.php";
$inData = getRequestInfo();
$UserId=-1;
$ConfirmPass="";
$send_a = array();
$send_a["sent"] = array();
function getRequestInfo()
{
	return json_decode(file_get_contents('php://input'), true);
}
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
	$UserId = trim($inData["UserID"]);
	$sql = "SELECT sender FROM Request WHERE reciever = ?";
	if($stmt = $mysqli->prepare($sql))
	{
		$stmt->bind_param("i", $IDParam);
		$IDParam = $UserId;
		if ($stmt->execute())
		{
			$stmt->store_result();
			if ($stmt->num_rows() > 0)
			{
				$stmt->bind_result($SenderID);
				while ($stmt->fetch())
				{
					array_push($send_a["sent"], $SenderID);
				}
				http_response_code(200);
				echo json_encode($send_a);
			}
			else
			{
				$data = array(
					"Error"=>"No Requests"
				);
				http_response_code(200);
				echo json_encode($data);
			}
		}
	}
}
?>
