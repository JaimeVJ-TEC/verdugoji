$(document).ready(function() {

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
    });
        
    window.onload = function() {

        document.getElementById("btnAjax").addEventListener("click",pedirHeader);
        document.getElementById("btnAjaxReset").addEventListener("click",reiniciarHeader);
        
        function pedirHeader() {
        
        var solicitud = new XMLHttpRequest();          
        solicitud.onreadystatechange = function() {  
    
            if (solicitud.readyState == 4 && solicitud.status == 200) {                
                document.getElementById("divHeader").innerHTML = solicitud.responseText; 
        }};
        
        solicitud.open("GET", "Archivo.txt", true);
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
            solicitud.open("GET","ArchivoPromesa.txt",true);
            solicitud.send();
        });

        promesa.then(function(value) {document.getElementById("divHeader").innerHTML = value;});

        new Promise(function(resolve,reject){
            var solicitud = new XMLHttpRequest();
            solicitud.onreadystatechange = function() {
                if(solicitud.readyState == 4 && solicitud.status == 200) {
                    resolve(solicitud.responseText);
                }
            }
            solicitud.open("GET","ArchivoPromesa.txt",true);
            solicitud.send();
        }).then(value => document.getElementById("divHeader".innerHTML = value));
    });
});