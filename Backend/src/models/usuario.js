const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    identificacion: {
        type: Number
    },
    nombres: {
        type: String
    },
    apellidos: {
        type: String
    },
    direccion: {
        type: String
    },
    correo: {
        type: String
    },
    celular: {
        type: String
    },
    clave: {
        type: String
    }
},{
    collection: 'usuarios'
});

module.exports = mongoose.model('usuario', usuarioSchema);