<?php
    // ******change to remote host whenever possible******
    $host = "107.180.50.9";
    $adminId = "DefaultUser";
    $adminPassword = "POOSD4331";
    $database = "StudyBuddy";
    // try to establish database connection, give error otherwise
    $mysqli = new mysqli($host, $adminId, $adminPassword, $database);
    if ($mysqli != true)
    {
      echo "Error: " .$e->getMessage();
    }
?>
