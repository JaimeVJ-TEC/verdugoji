<?php
include 'conexion.php';

$nombre=$_POST['nombre'];
$nombre = null;
$correo=$_POST['correo'];
$telefono=$_POST['telefono'];
$celular=$_POST['celular'];
$direccion=$_POST['direccion'];
$genero=$_POST['genero'];
$discapacidad=$_POST['discapacidad'];
$estado=$_POST['estado'];

try{
    $sql = "insert into Alumnos(nomAlumno, correo,telefono,celular,direccion,genero,estadoCivil,discapacidad) 
            values('$nombre','$correo','$telefono','$celular','$direccion,'$genero','$estado','$discapacidad');";
    $query = $conn->prepare($sql);
    $result = $query->execute();
}catch(PDOException $e) {
    echo "Error de consulta a la base de datos";
    $result = false;
}

echo json_encode($result);
?>