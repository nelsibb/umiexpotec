        class _Proyecto {
   constructor(_id,
    LOGO,
    NOMBRE,
    INTEGRANTE1,
    INTEGRANTE2,
    INTEGRANTE3,
    ESPECIALIDAD,
    SECCION,
    AULAUBI,
    DESCRIPCION,
    PALABRASCLAVE
            ) {
       this._id=_id;
       this.LOGO=LOGO;
       this.NOMBRE=NOMBRE;
       this.INTEGRANTE1=INTEGRANTE1;
       this.INTEGRANTE2=INTEGRANTE2;
       this.INTEGRANTE3=INTEGRANTE3;
       this.ESPECIALIDAD=ESPECIALIDAD;
       this.SECCION=SECCION;
       this.AULAUBI=AULAUBI;
       this.DESCRIPCION=DESCRIPCION;
       this.PALABRASCLAVE=PALABRASCLAVE;
   }
Guardar() {  //Guarda una pelicula
   var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

      try {

               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://umiexpotec.herokuapp.com/api/nuevoproyecto');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr);
        }
};
xhr.send(JSON.stringify(objetoaenviar));



}
catch(err) {
     reject(err.message);

}
    });
}









Modificar() {  //Modifica un dato

       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

      try {

               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://umiexpotec.herokuapp.com/api/Modificapelicula');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr);
        }
};
xhr.send(JSON.stringify(objetoaenviar));



}
catch(err) {
     reject(err.message);

}
    });


}

    Eliminar() {  //Elimina un dato

       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

      try {

               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://umiexpotec.herokuapp.com/api/Eliminapelicula');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr);
        }
};
xhr.send(JSON.stringify(objetoaenviar));



}
catch(err) {
     reject(err.message);

}
    });


}
Seleccionartodos() {  //Selecciona todos los elementos

       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

      try {

               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://umiexpotec.herokuapp.com/api/Seleccionartodos1');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr);
        }
};
xhr.send(JSON.stringify(objetoaenviar));



}
catch(err) {
     reject(err.message);

}
    });


}



    Seleccionarporid() {  //Lama a los objetos mediante su id

      var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

      try {

               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://umiexpotec.herokuapp.com/api/seleccionarpeliculaporid');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr);
        }
};
xhr.send(JSON.stringify(objetoaenviar));



}
catch(err) {
     reject(err.message);

}
    });

}

    Seleccionarpornombre(Buscar) {  //Seleciona por nombre los datos



      var objetoaenviar = this;
        var vectordatos = [];
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

      try {

               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://umiexpotec.herokuapp.com/api/seleccionarproyectopornombre');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        var dato = JSON.parse(xhr.responseText);
        for(var elemento in dato){
            var nombre = dato[elemento].NOMBRE;
            var palabraclave = dato[elemento].PALABRASCLAVE;
            var ubi = dato[elemento].AULAUBI;
            var especialidad= dato[elemento].ESPECIALIDAD;

            if(nombre == Buscar){
                vectordatos.push(dato[elemento]);
            }
            if(palabraclave == Buscar){
                vectordatos.push(dato[elemento]);
            }
            if(ubi == Buscar){
                vectordatos.push(dato[elemento]);
            }
            if(especialidad == Buscar){
                vectordatos.push(dato[elemento]);
            }
        }
        resolve(vectordatos);
    }
    else
        {
           reject(xhr);
        }
};
xhr.send(JSON.stringify(objetoaenviar));



}
catch(err) {
     reject(err.message);

}
    });

}
}
    var dataSet = [];
    function cargar_datos(){

        let Proyecto = new _Proyecto();

        Proyecto.Seleccionartodos().then(function(response){

            for(var ele in response){

                dataSet[ele] = [response[ele].NOMBRE, response[ele].INTEGRANTE1, response[ele].INTEGRANTE2, response[ele].INTEGRANTE3, response[ele].ESPECIALIDAD, response[ele].SECCION, response[ele].AULAUBI, response[ele].DESCRIPCION, response[ele].PALABRASCLAVE];
            }
            dataTable(dataSet);
        },
        function(error){
            console.error("chale", error);
        }

        );
    }
    function dataTable(dataSet){

        $('#PRO').DataTable( {

            data: dataSet,
            scrollY: "260px",
            scrollCollapse: true,
            paging: false,
            columns: [

                { title: "NOMBRE " },
                { title: "INTEGRANTE1 " },
                { title: "INTEGRANTE2 " },
                { title: "INTEGRANTE3 " },
                { title: "Especialidad " },
                { title: "Seccion " },
                { title: "AULAUBI " },
                { title: "DESCRIPCION " },
                { title: "PALABRASCLAVE " }

            ],
            language: {

                processing:     "Cargando lista de usuarios...",
                search:         "Buscar:",
                lengthMenu:     "",
                info:           "",
                infoEmpty:      "",
                infoFiltered:   "",
                infoPostFix:    "",
                loadingRecords: "Cargando...",
                zeroRecords:    "Sin resultados",
                emptyTable:     "Registros vacíos"

            }

        } );

    }




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var direccion_array = [];
var nombre_array = [];
var tt = 0;
     function agregardato(proyecto){
         document.getElementById('datosmostrados').innerHTML += "<p id='" + nombre + "' onclick='video_pop(" + tt + ")'> Nombre:  " + nombre + "  /  " + "Integrantes:  " + INTEGRANTE1 + "  /  " + INTEGRANTE2 + "  /  " + INTEGRANTE3+ "  /  " + "Especialidad: "+especialidad+  "<p>";
         tt = tt + 1;
     }







let imagenenbase64 = "";  //Guarda una imagen convirtiendola en texto
      $("#imglogo").change(function(){
       readURL(this);
 });

        function readURL(input) {

                    if (input.files && input.files[0]) {
                        var reader = new FileReader();

                        reader.onload = function (e) {

                            imagenenbase64=e.target.result;



                        }

                        reader.readAsDataURL(input.files[0]);
                    }
                }

        function botonguardarclick() //Funcion que ingresa los datos solicitados a la base de mongodb
            {
                var proyectoinstanciada = new _Proyecto(0,
                                                        imagenenbase64,
                                                        document.getElementById("nombre").value,
                                                        document.getElementById("inte1").value,
                                                        document.getElementById("inte2").value,
                                                        document.getElementById("inte3").value,
                                                        document.getElementById("especialidad").value,
                                                        document.getElementById("seccion").value,
                                                        document.getElementById("aulaubi").value,
                                                        document.getElementById("descripcion").value,
                                                        document.getElementById("palabrasclave").value
                );

                proyectoinstanciada.Guardar().then(function(response) {
  console.log("Success!", response);
            Swal.fire({
                type: 'success',
                html: '¡El PROYECTO se registro correctamente!',
                timer: 5000

            });

}, function(error) {
  console.error("Failed!", error);
             alert("Error " + error);

});

            }
function rev(){

    if(localStorage.getItem("Usuariolog")==null) {

        alert("No haz iniciado secion");
        location.href = 'registro.html';

    }
}
