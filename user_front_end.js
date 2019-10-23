class usuario{
   constructor(
        NOMBRE,
        CLAVE,
        PUNTOS,
        CARNE,
        SECCION,
        MAIL,
        SALT
            ) {
    this.NOMBRE = NOMBRE;
    this.CLAVE = CLAVE;
    this.PUNTOS = PUNTOS;
    this.CARNE = CARNE;
    this.SECCION = SECCION;
    this.MAIL = MAIL;
    this.SALT = SALT;
   }


    Guardar() {  //Guardar un nuevo usuario
        var objetoaenviar = this;
    // Devuelve una nueva promesa
        return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

            try {

                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'http://localhost:8080/api/back_end/guardar_usuario');
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = function() {

                    if (xhr.status === 200) {

                        resolve(JSON.parse(xhr.responseText));
                        Swal.fire({

                            type: 'success',
                            title: '¡Te has registrado correctamente!',
                            timer: 2000,
                            showConfirmButton: false,
                            customClass: {

                                container: 'container-class',
                                popup: 'popup-class',
                                header: 'header-class',
                                title: 'title-class',
                                closeButton: 'close-button-class',
                                icon: 'icon-class',
                                image: 'image-class',
                                content: 'content-class',
                                input: 'input-class',
                                actions: 'actions-class',
                                confirmButton: 'confirm-button-class',
                                cancelButton: 'cancel-button-class',
                                footer: 'footer-class'

                            }

                        });

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

    // -----------------------------------------------------------------------------------

    Modificar() {  //Modificar los datos del administrador activo
        var objetoaenviar = this;
    // Devuelve una nueva promesa
        return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

            try {

                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'http://localhost:8080/api/back_end/modificar_usuario');
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

    // -----------------------------------------------------------------------------------

    Eliminar() {  //Elimina un dato
        var objetoaenviar = this;
    // Devuelve una nueva promesa
        return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

            try {

                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'http://localhost:8080/api/back_end/eliminar_usuario');
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

    // -----------------------------------------------------------------------------------

    Seleccionartodos() {  //Selecciona todos los usuarios
        var objetoaenviar = this;
    // Devuelve una nueva promesa
        return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

            try {

                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'http://localhost:8080/api/back_end/seleccionar_usuarios');
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

    // -----------------------------------------------------------------------------------

    Seleccionarpornombre(buscar) {  //Selecciona una lista de usuarios a partir de su seccion
        var objetoaenviar = this;
        var vectorusuarios = [];
    // Devuelve una nueva promesa
        return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

            try {

                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'http://localhost:8080/api/back_end/S');
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = function() {

                    if (xhr.status === 200) {

                        var usuario = JSON.parse(xhr.responseText);

                        for(var elemento in usuario){

                            var nombre = usuario[elemento].SECCION;

                            if(nombre == buscar) {

                                vectorusuarios.push(usuario[elemento]);

                            }

                        }

                        resolve(vectorusuarios);

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

    // -----------------------------------------------------------------------------------

    Seleccionarporseccion(buscar) {  //Selecciona a un Usuario mediante su seccion
        var objetoaenviar = this;
        var vectorusuarios = [];
    // Devuelve una nueva promesa
        return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

            try {

                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'http://localhost:8080/api/back_end/seleccionar_usuario_por_seccion');
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = function() {

                    if (xhr.status === 200) {

                        var usuario = JSON.parse(xhr.responseText);

                        for(var elemento in usuario){

                            var nombre = usuario[elemento].SECCION;

                            if(nombre == buscar) {

                                vectorusuarios.push(usuario[elemento]);

                            }

                        }

                        resolve(vectorusuarios);

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

    // -----------------------------------------------------------------------------------

    Seleccionarporid(carne) {  //Selecciona a un usuario debido a su id unica
        var objetoaenviar = this;
        var vectoruser = [];
    // Devuelve una nueva promesa
        return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

            try {

                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'http://localhost:8080/api/back_end/seleccionar_usuarios');
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = function() {

                    if (xhr.status === 200) {

                        var user = JSON.parse(xhr.responseText);

                        for(var elemento in user){

                            var carneuser = user[elemento].CARNE;

                            if(carneuser == carne) {

                                vectoruser.push(user[elemento]);

                            }

                        }

                        resolve(vectoruser);

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

    // -----------------------------------------------------------------------------------

    Login() {  //Loguea al usuario
        var objetoaenviar = this;
    // Devuelve una nueva promesa
        return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

            try {

                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'http://localhost:8080/api/back_end/login_usuario');
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

} // Fin del constructor usuario

// -----------------------------------------------------------------------------------

    // Inicio de funciones

// -----------------------------------------------------------------------------------




// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------





// -----------------------------------------------------------------------------------

    // Registra al nuevo usuario de la aplicacion

// -----------------------------------------------------------------------------------


    function guardar_datos_user() { //Funcion que ingresa los datos solicitados a la base de mongodb

        var name = document.getElementById("name_user").value;
        var pass = document.getElementById("pass_user").value;
        var id = document.getElementById("id_user").value;
        var mail = document.getElementById("mail_user").value;
        var section = document.getElementById("seccion_user").value;

        if((name == "") || (pass == "") || (id == "") || (mail == "")) {

            alert("Porfavor ingrese todos los datos");

        } else {

            var perfilinstanciado = new usuario(

                document.getElementById("name_user").value,
                document.getElementById("pass_user").value,
                0,
                document.getElementById("id_user").value,
                document.getElementById("seccion_user").value,
                document.getElementById("mail_user").value,
                ""

            );

            perfilinstanciado.Guardar().then(function(response) {

                console.log("Success!", response);

            }, function(error) {

                console.error("Failed!", error);
                alert("Error " + error);

            });

        }
    }

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------





// -----------------------------------------------------------------------------------

    // Funcion que termina con la sesion del usuario

// -----------------------------------------------------------------------------------

    function salir(){ //Elimina la coockie

            localStorage.removeItem("UserAC",null);
            location.href = "users_out.html";

    }

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------




// -----------------------------------------------------------------------------------

    // Funcion que inicia sesion en la cuenta del usuario

// -----------------------------------------------------------------------------------

    function iniciar_sesion_user() { //Funcion que ingresa los datos solicitados a la base de mongodb

        var clase_usuario_instanciado = new usuario(
            "",
            document.getElementById("pass_user_in").value,
            "",
            "",
            "",
            document.getElementById("mail_user_in").value,
            ""
        );

        clase_usuario_instanciado.Login().then(function(response) {

            console.log("Success!", response);
            localStorage.setItem("UserAC",JSON.stringify(response));
            location.href = "users_in.html";

        }, function(error) {

            console.error("Failed!", error);
            alert("Error " + error);

        });

    }

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------





// -----------------------------------------------------------------------------------

    // Comprueba si hay un usuario logueado o no

// -----------------------------------------------------------------------------------

    function revisar_user() {

        if(localStorage.getItem("UserAC")===null) {

            alert("No haz iniciado secion");
            location.href = 'users_out.html';

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

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------





// -----------------------------------------------------------------------------------

    // Carga los datos del usuario al apartado de comunidad de los administradores

// -----------------------------------------------------------------------------------

    var dataSet = [];

    function cargar_lista_de_usuarios() {

        if(localStorage.getItem("AdminID")===null) {

            alert("No haz iniciado secion");
            location.href = 'admins_log_in.html';

        } else {

            var usuarioinstanciado = new usuario();

            usuarioinstanciado.Seleccionartodos().then(function(response) {

                for (var ele in response) {

                    dataSet[ele] = [response[ele].CARNE, response[ele].NOMBRE, response[ele].SECCION, response[ele].MAIL];

                }

                dataTable(dataSet);

            },

                function(error) {

                    console.error("Failed!", error);

                }
            );

        }

    }

    function dataTable(dataSet){

        $('#users_management').DataTable( {

            data: dataSet,
            scrollY: "260px",
            scrollCollapse: true,
            paging: false,
            columns: [

                { title: "Carné" },
                { title: "Usuario" },
                { title: "Sección" },
                { title: "Correo" }

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

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------





// -----------------------------------------------------------------------------------

    // Busca por secciones para hacer las evaluaciones

// -----------------------------------------------------------------------------------


    function buscar_por_seccion() {

        var seccion = document.getElementById("seccion").value;

        var usuarioinstanciado = new usuario();

        usuarioinstanciado.Seleccionarporseccion(seccion).then(function(response) {

            for (var ele in response) {

                dataSet[ele] = [response[ele].CARNE, response[ele].NOMBRE, response[ele].SECCION, response[ele].PUNTOS, "<input class='data_in' id='" + response[ele].CARNE + "'><button class='btn_update' onclick='update_points(" + response[ele].CARNE + ")'><p>+</p></button>"];

            }

            dataTable_evaluaciones(dataSet);

        },

            function(error) {

                console.error("Failed!", error);

            }
        );

    }

    function dataTable_evaluaciones(dataSet){

        $('#users_list').DataTable( {

            data: dataSet,
            scrollY: "260px",
            scrollCollapse: true,
            paging: false,
            columns: [

                { title: "Carné" },
                { title: "Usuario" },
                { title: "Sección" },
                { title: "Puntos" },
                { title: "Calificar" }

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
                zeroRecords:    "",
                emptyTable:     "Registros vacíos"

            }

        } );

    }


// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------





// -----------------------------------------------------------------------------------

    // Suma los puntos a los scores de los estudiantes

// -----------------------------------------------------------------------------------


    function update_points(carned){

        let claseusuarioinstanciada = new usuario();

        var puntos = document.getElementById(carned).value;

        if(puntos === ""){

            puntos = 0;

        }

        claseusuarioinstanciada.Seleccionarporid(carned).then(function(response) {

            var total_pts = parseInt(response[0].PUNTOS) + parseInt(puntos);

            var claseusuarioinstanciada = new usuario(

                response[0].NOMBRE,
                response[0].CLAVE,
                total_pts,
                response[0].CARNE,
                response[0].SECCION,
                response[0].MAIL,
                response[0].SALT

            );

            claseusuarioinstanciada.Modificar().then(function(response){

            const Toast = Swal.mixin({

               toast: true,
               position: 'top-end',
               showConfirmButton: false,
               timer: 3000

            })

            Toast.fire({

                type: 'success',
                title: '¡Puntos actualizados!'

            })

        }, function(error){

            console.error("Fallo la empanada" + error);
            alert("Tpdp se fue a la verga");

        });

        }, function(error) {

                console.error("Failed!", error);

            }
        );

    }


// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
