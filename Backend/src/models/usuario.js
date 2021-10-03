const mongoose = require('mongoose');
const schema = mongoose.Schema;

var usuarioSchema = new schema({
    identificacion: {
        type: Integer
    },primer_nombre: {
        type: String
    },
    segundo_nombre: {
        type: String
    },
    primer_apellido: {
        type: Number
    },
    segundo_apellido: {
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