$(document).ready(function() {

    $('#genM').prop("checked",true);
    $('#civCas').prop("checked",true);

    $('#btnCloseAlert').click(function(){
        $('#alert1').hide();
    });

    $('#btnClr').click(function() {
        limpiar();
    });

    $('#btnDB').click(function() {
        $('#modalConsulta').modal('show');
    });

    $('#btnConsulta').click(function() {
        let idalumno = $('#consulta_id').val();
        $('#modalConsulta').modal('hide');
        $('#consulta_id').val('');

        if(idalumno != ""){
        $.post('./php/DB.php',{id:idalumno},function(data){
            if(data!=false){
                refrescar(data);
            } else {
                $('#msgError').text('El alumno no existe.');
                $('#modalError').modal('show');
            }
        },'json');
        } else
        {
            $('#msgError').text('Ingrese el numero de control.');
            $('#modalError').modal('show');
        }
    });

    function limpiar(){
        $('#id_alumno').val("");
        $('#nombre').val("");
        $('#correo').val("");
        $('#telefono').val("");
        $('#celular').val("");
        $('#direccion').val("");
    }

    function refrescar(objeto) {
        console.log(objeto);
        $('#id_alumno').val(objeto.noControl);
        $('#nombre').val(objeto.nomAlumno);
        $('#correo').val(objeto.correo);
        $('#telefono').val(objeto.telefono);
        $('#celular').val(objeto.celular);
        $('#direccion').val(objeto.direccion);
        (objeto.genero ==='M' ? 
            $('#genM').prop("checked",true) :
            (objeto.genero ==='F' ? 
                $('#genF').prop("checked",true) : 
                $('#genF').prop("checked",false),$('#genM').prop("checked",false)));

        (objeto.discapacidad === 1 ? $('#chkDisc').prop("checked",true) : $('#chkDisc').prop("checked",false));

        (objeto.estadoCivil === "Casado" ? 
            $('#civCas').prop("checked",true) : 
            (objeto.estadoCivil === "Soltero" ? 
                $('#civSol').prop("checked",true) : 
                $('#civSol').prop("checked",false),$('#civCas').prop("checked",false)));
    }

    $('#btnSubmit').click(function() {
        let nom = $('#nombre').val();
        let cor = $('#correo').val();
        let tel = $('#telefono').val();
        let cel = $('#celular').val();
        let dir = $('#direccion').val();
        let gen = $('#genF').prop('checked') ? 'F' : 'M';
        let disc= $('#chkDisc')[0].checked ? 1 : 0;
        let est = $('#civSol').prop('checked') ? 'Soltero' : 'Casado';

        $.post('./php/Registrar.php',{nombre:nom,correo:cor,telefono:tel,celular:cel,direccion:dir,genero:gen,discapacidad:disc,estado:est},function(data){
            if(data === false){
                $('#alert1').show();
            } else {
                $('#msgExito').text('Se ha registrado al alumno con No. de control '+data);
                $('#modalSuccess').modal('show');
                if(data != ""){
                    $.post('./php/DB.php',{id:data},function(result){
                        if(result!=false){
                            refrescar(result);
                        } else {
                            $('#msgError').text('El alumno no existe.');
                            $('#modalError').modal('show');
                        }
                    },'json');
                }
            }
        },'json');
    });

    $('#btnDel').click(function() {
        let idalumno = $('#id_alumno').val();
        if(idalumno != ""){
            $.post('./php/Eliminar.php',{id:idalumno},function(data){
                if(data!=0){
                    limpiar();
                    $('#msgExito').text('Se ha eliminado al alumno exitosamente');
                    $('#modalSuccess').modal('show');
                } else {
                    $('#msgError').text('No se encontro al alumno.');
                    $('#modalError').modal('show');
                }
            },'json');
        } else
        {
            $('#msgError').text('No se ha consultado a ningun alumno.');
            $('#modalError').modal('show');
        }
    });

    $('#btnMod').click(function() {
        let idalumno = $('#id_alumno').val();
        let nom = $('#nombre').val();
        let cor = $('#correo').val();
        let tel = $('#telefono').val();
        let cel = $('#celular').val();
        let dir = $('#direccion').val();
        let gen = $('#genF').prop('checked') ? 'F' : 'M';
        let disc= $('#chkDisc')[0].checked ? 1 : 0;
        let est = $('#civSol').prop('checked') ? 'Soltero' : 'Casado';

        if(idalumno != "") {
            $.post('./php/Modificar.php',{id:idalumno,nombre:nom,correo:cor,telefono:tel,celular:cel,direccion:dir,genero:gen,discapacidad:disc,estado:est},function(result){
                if(result!=0){
                    $('#msgExito').text('Se ha modificado la informacion del alumno exitosamente');
                    $('#modalSuccess').modal('show');
                } else {
                    $('#msgError').text('Llene todos los campos.');
                    $('#modalError').modal('show');
                }
            },'json');
        } else {
            $('#msgError').text('Consulte a un alumno.');
            $('#modalError').modal('show');
        }
    });
});