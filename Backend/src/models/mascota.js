const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
    tipo_mascota:{
        type: String
    },
    nombre_mascota: {
        type: String
    },
    edad_mascota: {
        type: Number
    },
    raza_mascota: {
        type: String
    },
    alergias:{
        type: Boolean
    },
    desc_alergia:{
        type: String
    }
},{
    collection: 'mascotas'
});

module.exports = mongoose.model('mascota', mascotaSchema);
