<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'j19100265';
$port = '3306';

try{
    $conn = new PDO("mysql:host=$servername;dbname=$dbname;port=$port",$username,$password);
}catch(PDOException $e){
    echo "Connection failed: ". $e->getMessage();
}
?>