<?php
$idalumno=$_POST['id'];

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = '19100265';
$port = '3306';

try{
    $conn = new PDO("mysql:host=$servername;dbname=$dbname;port=$port",$username,$password);
}catch(PDOException $e){
    echo "Connection failed: ". $e->getMessage();
}

try{
    $sql = "select * from alumnos where noControl=".$idalumno;
    $query = $conn->prepare($sql);
    $query->execute();
    $result = $query->fetch(PDO::FETCH_ASSOC);
    $query->closeCursor();
}catch(PDOException $e) {
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}

echo json_encode($result);
?>