<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'j19100265';
$port = '3306';

try{
    $opt = array(PDO::MYSQL_ATTR_FOUND_ROWS   => TRUE);
    $conn = new PDO("mysql:host=$servername;dbname=$dbname;port=$port",$username,$password,$opt);
}catch(PDOException $e){
    echo "Connection failed: ". $e->getMessage();
}
?>