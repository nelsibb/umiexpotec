var Item = require('./proyectos'); //Extraccion de todos los valores de proyectos.js
module.exports = class _agregarproyecto { //Se genera
   constructor( ) {

   }
Guardar(req,res) { //Guarda los datos ingresados en relacion a los campos solicitados
	Item.create(
			{
LOGO: req.body.LOGO,
NOMBRE: req.body.NOMBRE,
INTEGRANTE1: req.body.INTEGRANTE1,
INTEGRANTE2: req.body.INTEGRANTE2,
INTEGRANTE3: req.body.INTEGRANTE3,
ESPECIALIDAD: req.body.ESPECIALIDAD,
SECCION: req.body.SECCION,
AULAUBI: req.body.AULAUBI,
DESCRIPCION: req.body.DESCRIPCION,
PALABRASCLAVE: req.body.PALABRASCLAVE
            },
            function(err, item) {

				if (err){

					res.send(err);

                }
                else
                {

                    Item.find(function(err, item){

				        if (err)
                            res.send(err)
				        res.json(item);
				    });
                }
            }
            );



}

 Modificar(req,res) {
		Item.update( {_id : req.body._id},
					{$set:
			{
  NOMBRE: req.body.NOMBRE,
INTEGRANTE1: req.body.INTEGRANTE1,
INTEGRANTE2: req.body.INTEGRANTE2,
INTEGRANTE3: req.body.INTEGRANTE3,
ESPECIALIDAD: req.body.ESPECIALIDAD,
SECCION: req.body.SECCION,
AULAUBI: req.body.AULAUBI
            }},
			);



}

    Eliminar(req,res) {  //Proceso para eliminar datos buscados por su id
	Item.remove({_id : req.body.id},
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});


          }

			});



}
Seleccionartodos(req,res) { //Proceso que selecciona todos los datos introducidos
		Item.find(
		function(err, item) {
			if (err)

                {
				res.send(err)
                }else{


					res.json(item); // devuelve todas las Personas en JSON

                }
				}
			);



}


    Seleccionarporid(req,res) {  //Busca objetos con una id especifica
	Item.find({_id:req.body._id}, function(err, item) {
			if (err){
				res.send(err)}
        else{

					res.json(item); // devuelve todas las Personas en JSON

        }







    }
			);


}

    Seleccionarpornombre(req,res) {  //Busca objetos por su nombre
	Item.find({NOMBRE:req.body.NOMBRE}, function(err, item) {
			if (err){
				res.send(err)}
        else{

					res.json(item); // devuelve todas las Personas en JSON

        }







    }
			);



}
}
