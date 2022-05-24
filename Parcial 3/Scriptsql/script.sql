drop database if exists `19100265`;
create database `19100265`;
use `19100265`;

create table Alumnos
(
noControl int primary key not null,
nomAlumno Varchar(60) not null,
correo varchar(45),
telefono varchar(15) not null,
celular varchar(15),
direccion varchar(15) not null,
genero enum('M','F') not null,
estadoCivil enum("Casado","Soltero") not null,
discapacidad bool not null
);