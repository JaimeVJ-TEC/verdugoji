<?php
include 'conexion.php';

$idalumno=$_POST['id'];

try{
    $sql = "delete from alumnos where noControl=".$idalumno;
    $query = $conn->prepare($sql);
    $query->execute();
    $query->fetch(PDO::FETCH_ASSOC);
    $count = $query->rowCount();
}catch(PDOException $e) {
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}

echo json_encode($count);
?>