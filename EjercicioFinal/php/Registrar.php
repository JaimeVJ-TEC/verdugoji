<?php
include 'conexion.php';

$nombre=$_POST['nombre'];
$correo=$_POST['correo'];
$telefono=$_POST['telefono'];
$celular=$_POST['celular'];
$direccion=$_POST['direccion'];
$genero=$_POST['genero'];
$discapacidad=$_POST['discapacidad'];
$estado=$_POST['estado'];

if($nombre != "" && $correo != "" && $direccion != "" && $telefono != "" && $genero != "" && $discapacidad != "" && $estado != ""){
    try{
        $sql = "insert into Alumnos(nomAlumno, correo,telefono,celular,direccion,genero,estadoCivil,discapacidad) values(?,?,?,?,?,?,?,?);";
        $conn->prepare($sql)->execute([$nombre,$correo,$telefono,$celular,$direccion,$genero,$estado,$discapacidad]);
        $result = $conn->lastInsertId();
    }catch(PDOException $e) {
        echo "Error de consulta a la base de datos";
        $result = false;
    }
} else
{
    $result = false;
}

echo json_encode($result);
?>