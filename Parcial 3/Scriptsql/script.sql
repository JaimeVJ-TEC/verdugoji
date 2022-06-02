drop database if exists j19100265;
create database j19100265;
use j19100265;

create table Alumnos
(
noControl int primary key not null auto_increment,
nomAlumno Varchar(60) not null,
correo varchar(45),
telefono varchar(15) not null,
celular varchar(15),
direccion varchar(40) not null,
genero enum('M','F') not null,
estadoCivil enum("Casado","Soltero") not null,
discapacidad boolean not null
);

alter table Alumnos auto_increment = 19100000;
 
insert into Alumnos(nomAlumno, correo,telefono,celular,direccion,genero,estadoCivil,discapacidad) values
                    ("Jaime Verdugo","jaime@gmail.com","8677109091","867929095","Revolucion 1234",'M',"Soltero",false);

insert into Alumnos(nomAlumno, correo,telefono,celular,direccion,genero,estadoCivil,discapacidad) values
                    ("Pepe Rodriguez","pepe@gmail.com","8677102937","867736592","Independencia 4234",'M',"Casado",false);
                    
insert into Alumnos(nomAlumno, correo,telefono,celular,direccion,genero,estadoCivil,discapacidad) values
                    ("Matias Hernandez","mat_her@outlook.com", "8677107429","867284929","Hidalgo 9823",'M',"Soltero",false);
                    
insert into Alumnos(nomAlumno, correo,telefono,celular,direccion,genero,estadoCivil,discapacidad) values
                    ("Naomi Villanueva","na_vi@yahoo.com","86771041234","867194028","Tomas 2923",'F',"Soltero",false);