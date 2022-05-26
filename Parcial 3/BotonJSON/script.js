$(document).ready(function() {

    $('#btnSubmit').click(function(){
        $('#alert1').show();
    });

    $('#btnCloseAlert').click(function(){
        $('#alert1').hide();
    });

    $('#btnReset').click(function(){
        $('#exampleModal').modal('show');
    });

    $('#btnJSON').click(function() {
        $.post('archivo.php',{},function(data){

              console.log(data);
              $('#id_alumno').val(data.NumControl);
              $('#nombre').val(data.Nombre);
              $('#correo').val(data.Correo);
              $('#telefono').val(data.Telefono);
              $('#celular').val(data.Movil);
              $('#direccion').val(data.Direccion);
          },'json');
    })
});
