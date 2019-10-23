

        class _Usuario {
   constructor(
    _id,
    NOMBRE,
    CLAVE,
    EMAIL,
    IMAGEN,
    ESTADO,
    SALT
            ) {
       this._id=_id;
    this.NOMBRE =NOMBRE;
    this.CLAVE =CLAVE;
    this.EMAIL =EMAIL;
    this.IMAGEN =IMAGEN;
    this.ESTADO=ESTADO;
    this.SALT =SALT;
   }
Guardar() {
   var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

      try {

               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://umiexpotec.herokuapp.com/api/nuevoadm');
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



 Login() {

       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

      try {

               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://umiexpotec.herokuapp.com/api/loginadm');
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

}
             let imagenenbase64 = "";
      $("#imgpeli").change(function(){
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

        function botonguardarclick() //esta funcionlle na el formulario de pelicula y lo almacena tomando el html y las variables
            {
                var administradorinstanciada = new _Usuario(0,
                document.getElementById("nombre").value,
                document.getElementById("password").value,
                document.getElementById("email").value,
                imagenenbase64,1,""


                );

                administradorinstanciada.Guardar().then(function(response) { //almacena los datos y lanza un alert que indica un guardado exitoso
  console.log("Success!", response);
                  Swal.fire({
                position: 'top',
                type: 'success',
                title: 'Tu Usuario fue guardado',
                showConfirmButton: true,
                timer: 3000
                })
            location.href="index.html";

}, function(error) {
  console.error("Failed!", error); // indica un fallo en el proceso
             alert("Error " + error);

});

            }

        function botonlogin() //esta funcionlle na el formulario de pelicula y lo almacena tomando el html y las variables
            {
                var administradorinstanciada = new _Usuario(0,0,
                document.getElementById("password").value,
                document.getElementById("email").value,1," "

                );

                administradorinstanciada.Login().then(function(response) { //almacena los datos y lanza un alert que indica un guardado exitoso
                console.log("Success!", response);
                localStorage.setItem("Usuariolog",JSON.stringify(response));
                location.href="index.html";
}, function(error) {
  console.error("Failed!", error); // indica un fallo en el proceso
             alert("Error " + error);

});

            }

            function botonlogout() //esta funcionlle na el formulario de pelicula y lo almacena tomando el html y las variables
    {
        var administradorinstanciada = new _Usuario(0,0,
        0,
        0,1," "

        );

        administradorinstanciada.Login().then(function(response) { //almacena los datos y lanza un alert que indica un guardado exitoso
          alert("gracias");
        localStorage.setItem("Usuariolog",JSON.stringify(response));

        location.href="index.html";
}, function(error) {
console.error("Failed!", error); // indica un fallo en el proceso
     alert("Error " + error);

});

    }

function rev()
        {
            if(localStorage.getItem("Usuariolog")==null) {

                alert("No haz iniciado secion");
                location.href = 'login.html';

            } else {

                const Toast = Swal.mixin({

                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    customClass: {

                        container: 'container-class',
                        popup: 'popup-class',
                        title: 'title-class',
                        content: 'content-class',

                }

                });

                Toast.fire({

                    type: 'success',
                    title: 'Bienvenido'

                });

            }
        }
