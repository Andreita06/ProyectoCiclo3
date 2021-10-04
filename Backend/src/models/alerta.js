const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const alertaSchema = new Schema({
    activa:{
        type: Boolean
    }
},{
    collection: 'alertas'
});

module.exports = mongoose.model('alerta', alertaSchema);