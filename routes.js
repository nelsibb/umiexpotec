var controllerproyectos = require('./controllerproyectos.js');
var controlleradministrador = require('./controlleratministrador.js');
module.exports = function(app){

    var claseproyecto = new controllerproyectos();

    app.post('/api/nuevoproyecto',claseproyecto.Guardar);
    app.post('/api/modificaproyecto',claseproyecto.Modificar);
    app.post('/api/eliminarproyecto',claseproyecto.Eliminar);
    app.post('/api/Seleccionartodos1',claseproyecto.Seleccionartodos);
    app.post('/api/seleccionarproyectoporid',claseproyecto.Seleccionarporid);
    app.post('/api/seleccionarproyectopornombre',claseproyecto.Seleccionarpornombre);

    var claseadm = new controlleradministrador();
    app.post('/api/nuevoadm',claseadm.Guardar);
    app.post('/api/loginadm',claseadm.Login);

    app.get('*', function(req,res){ //localhost:8080
        res.sendfile('./Nueva_proyecto.html'); //Carga unica de la vista
    });

};
