<?php
$servername = "localhost";
$port = "3306";
$username = "root";
$dbname = "19100265";

try{
    $conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbname",$username);
    $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    echo "Connected succesfully";
}catch(PDOException $e){
    echo "Connection failed: ". $e->getMessage();
}
?>