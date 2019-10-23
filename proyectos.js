var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var proyecto = new Schema({
    LOGO:String,
    NOMBRE: String,
    INTEGRANTE1: String,
    INTEGRANTE2: String,
    INTEGRANTE3: String,
    ESPECIALIDAD: String,
    SECCION:String,
    AULAUBI:String,
    DESCRIPCION: String,
    PALABRASCLAVE: String
});
module.exports = mongoose.model('proyectos',proyecto);
