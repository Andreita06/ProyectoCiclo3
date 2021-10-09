const sesion = require('../models/sesion');

class SesionController{

    constructor(){

    }

    acceder(req, res){
        sesion.create(req.body, (error, data)=>{
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(201).json(data);
            }
        });
    }
}

module.exports = SesionController;