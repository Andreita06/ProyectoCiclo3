const sesion = require('../models/sesion');

class SesionController{

    constructor(){

    }

    acceder(req, res){
        sesion.create(req.body, (error, data)=>{

        });
    }
}

module.exports = SesionController;