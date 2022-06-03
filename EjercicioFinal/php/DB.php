<?php
include 'conexion.php';

$idalumno=$_POST['id'];

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