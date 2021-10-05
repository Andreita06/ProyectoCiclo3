const monggose = require('mongoose');

const Schema = mongoose.Schema;

const sesionSchema = new Schema({
    usuario: {
        type: String
    },
    contraseña: {
        type: String
    },
},{
    collection: 'sesiones'
});

module.exports = mongoose.model('Sesion', sesionSchema);
