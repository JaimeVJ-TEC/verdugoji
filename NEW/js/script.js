$(document).ready(function() {
    $('#btnCloseAlert').click(function(){
        $('#alert1').hide();
    });

    $('#btnReset').click(function(){
        $('#exampleModal').modal('show');
    });

    $('#btnJSON').click(function() {
        $.post('./php/archivo.php',{},function(data){

              console.log(data);
              $('#id_alumno').val(data.NumControl);
              $('#nombre').val(data.Nombre);
              $('#correo').val(data.Correo);
              $('#telefono').val(data.Telefono);
              $('#celular').val(data.Movil);
              $('#direccion').val(data.Direccion);
          },'json');
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

        (objeto.discapacidad === 1 ? $('#chkDiscapacidad').prop("checked",true) : $('#chkDiscapacidad').prop("checked",false));

        (objeto.estadoCivil === "Casado" ? 
            $('#civCas').prop("checked",true) : 
            (objeto.estadoCivil === "Soltero" ? 
                $('#civSol').prop("checked",true) : 
                $('#civSol').prop("checked",false),$('#civCas').prop("checked",false)));
    }

    $('#btnSubmit').click(function() {
        let nom = null;
        let cor = $('#correo').val();
        let tel = $('#telefono').val();
        let cel = $('#celular').val();
        let dir = $('#direccion').val();
        let gen = $('#genF').prop('checked') == true ? 'F' : 'M';
        let disc= $('#chkDiscapacidad').prop('checked') == true ? true : false;
        let est = $('#civSol').prop('checked') == true ? 'Soltero' : 'Casado';

        //if(nom!="" && tel!="" && dir!=""){
        $.post('./php/Registrar.php',{nombre:nom,correo:cor,telefono:tel,celular:cel,direccion:dir,genero:gen,discapacidad:disc,estado:est},function(data){
            console.log(data);
        },'json');
        //}
        //else{
        //    $('#alert1').show();
        //}

    })
});