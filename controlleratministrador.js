var Item = require('./administrador');
    let administradorinstanciado = new Item(); 
module.exports = class _Administrador {
   constructor( ) {}
Guardar(req,res) {

console.log(req.body.CLAVE);

    var claveysaltlocal = administradorinstanciado.setPassword(req.body.CLAVE);
    console.log(claveysaltlocal[0]);
   console.log(req.body.CLAVE);
  Item.create(
      {
   NOMBRE: req.body.NOMBRE,
    CLAVE: claveysaltlocal[0],
EMAIL: req.body.EMAIL,
    IMAGEN: req.body.IMAGEN,
    ESTADO: req.body.ESTADO,
             SALT: claveysaltlocal[1]   
            }, 
      function(err, item) {
        if (err)
                    {
          res.send(err);}
          else{    Item.find(function(err, item) {
          if (err)
            res.send(err)
          res.json(item);
        });}}); }   

    Login(req,res) {
      Item.find({EMAIL:req.body.EMAIL}, function(err, item) {
          
      if (err){
        res.send(err)}
            
        else{
            
              if(item.length ==0)
                {
                    res.status(400).send({ 
                    message : "Datos incorrectos"   }); 
                }
            else{
            
            console.log(item[0].CLAVE);
            if(administradorinstanciado.validPassword(req.body.CLAVE,item[0].CLAVE,item[0].SALT))
                {
                    item[0].SALT="NO F..ING WAY";
          res.json(item); // devuelve todas las Personas en JSON  
                }
            else
                {
                    res.status(400).send({ 
                    message : "Datos incorrectos"
                }); 
                }}
        
        
        
        }
        
        
        
        
        });}


}