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
        let idalumno = prompt("Teclee el ID a consultar");

        $.post('./php/DB.php',{id:idalumno},function(data){
            refrescar(data);
        },'json');
    });

    function refrescar(objeto) {
        console.log(objeto);
            $('#id_alumno').val(objeto.noControl);
            $('#nombre').val(objeto.nomAlumno);
            $('#correo').val(objeto.correo);
            $('#telefono').val(objeto.telefono);
            $('#celular').val(objeto.celular);
            $('#direccion').val(objeto.direccion);
    }
        
    window.onload = function() {

        document.getElementById("btnAjax").addEventListener("click",pedirHeader);
        document.getElementById("btnAjaxReset").addEventListener("click",reiniciarHeader);
        
        function pedirHeader() {
        
        var solicitud = new XMLHttpRequest();          
        solicitud.onreadystatechange = function() {  
    
            if (solicitud.readyState == 4 && solicitud.status == 200) {                
                document.getElementById("divHeader").innerHTML = solicitud.responseText; 
        }};
        
        solicitud.open("GET", "./resources/Archivo.txt", true);
        solicitud.send();
        
         }
        
        function reiniciarHeader() {
            document.getElementById("divHeader").innerHTML = "<h1 class=\"h3 mb-3 font-weight-normal\">Registro de alumno</h1>"; 
        }
        
    }

    $('#btnProm').click(function()
    {
        let promesa = new Promise(function(resolve,reject) {
            var solicitud = new XMLHttpRequest();
            solicitud.onreadystatechange = function(){
                if(solicitud.readyState == 4 && solicitud.status == 200){
                    resolve(solicitud.response);
                }
            }
            solicitud.open("GET","./resources/ArchivoPromesa.txt",true);
            solicitud.send();
        });

        promesa.then(function(value) {document.getElementById("divHeader").innerHTML = value;});
    });


    //Fetch
    $('#btnFetch').click(function()
    {
        let promesa = fetch('./php/archivo.php');

        //promesa.then(respuesta => respuesta.json())
        //      .then(datos => console.log(datos));

        promesa.then(respuesta => respuesta.json())
                .then(datos => {
                    console.log(datos);
                    $('#id_alumno').val(datos.NumControl);
                    $('#nombre').val(datos.Nombre);
                    $('#correo').val(datos.Correo);
                    $('#telefono').val(datos.Telefono);
                    $('#celular').val(datos.Movil);
                    $('#direccion').val(datos.Direccion);
                    }
                    );
    });

});