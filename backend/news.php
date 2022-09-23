<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");
$queryText = "SELECT * FROM news_details";
$query = $mysqli->prepare($queryText);
$query->execute();
$array = $query->get_result();

$response = [];

while ($a = $array->fetch_assoc()) {
    $response[] = $a;
}

$json = json_encode($response);
echo $json;
