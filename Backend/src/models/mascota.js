const mongoose = require('mongoose');
const schema = mongoose.Schema;

var mascotaSchema = new schema({
    id_mascota: {
        type: Integer
    },nombre_mascota: {
        type: String
    },
    edad_mascota: {
        type: String
    },
    edad: {
        type: Number
    },
    raza_mascota: {
        type: String
    },
    descripcion_mascota: {
        type: String
    },
    ultima_vacuna_mascota: {
        type: String
    },
    fecha_ultima_vacuna_mascota: {
        type: String
    }
},{
    collection: 'mascotas'
});

module.exports = mongoose.model('mascota', mascotaSchema);
