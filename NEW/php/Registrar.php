<?php
$idalumno=$_POST['id'];
$nombre=$_POST['nombre'];
$correo=$_POST['correo'];
$telefono=$_POST['telefono'];
$celular=$_POST['celular'];
$direccion=$_POST['direccion'];
$genero=$_POST['genero'];
$estado=$_POST['estado'];
$discapacidad=$_POST['discapacidad'];

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

try{
    $sql = "insert into Alumnos(noControl, nomAlumno, correo,telefono,celular,direccion,genero,estadoCivil,discapacidad) 
            values($idalumno,$nombre,$correo,$telefono,$celular,$direccion,$genero,$estado,$discapacidad);";
    if($conn->query($sql) === TRUE){
        echo "Se ha registrado al alumno";
    }else {
        echo "Error al registrar el alumno";
    }
}catch(PDOException $e) {
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}

echo json_encode($result);
?>