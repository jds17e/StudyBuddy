<?php
header('Content-Type: application/json');
require_once "Database2.php";
$inData = getRequestInfo();
$UserId=-1;
function getRequestInfo()
{
	return json_decode(file_get_contents('php://input'), true);
}
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
	$UserId = trim($inData["UserID"]);
	$Code = trim($inData["C"]);
	$Prof = trim($inData["P"]);
	$School = trim($inData["S"]);
	$sql = "INSERT INTO Class (userid, code, prof, school) VALUES (?,?,?,?)";
	if($stmt = $mysqli->prepare($sql))
	{
		$stmt->bind_param("isss", $IDParam, $codeParam, $profParam, $schoolParam);
		$IDParam = $UserId;
		$codeParam = $Code;
		$profParam = $Prof;
		$schoolParam = $School;
		if ($stmt->execute())
		{
			$data = array(
				"Error" => ""
			);
			http_response_code(200);
			echo json_encode($data);
		}
		else
		{
			$data = array("Error"=>"Failed to add class");
			http_response_code(404);
			echo json_encode($data);
		}
	}
}
?>
