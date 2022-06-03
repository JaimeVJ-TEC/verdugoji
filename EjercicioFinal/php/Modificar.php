<?php
include 'conexion.php';

$id = $_POST['id'];
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
        $sql = "update Alumnos set nomAlumno=?, correo=?,telefono=?,celular=?,direccion=?,genero=?,estadoCivil=?,discapacidad=? where noControl=?;";
        $query = $conn->prepare($sql);
        $query->execute([$nombre,$correo,$telefono,$celular,$direccion,$genero,$estado,$discapacidad,$id]);
        $query->fetch(PDO::FETCH_ASSOC);
        $count = $query->rowCount();
    }catch(PDOException $e) {
        echo "Error de consulta a la base de datos";
        $count = false;
    }
} else
{
    $count = false;
}

echo json_encode($count);
?>