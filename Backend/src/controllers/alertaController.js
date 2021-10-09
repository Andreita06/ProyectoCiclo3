const alerta = require('../models/alerta');

class AlertaController{

    constructor(){

    }

    acceder(req, res){
        alerta.create(req.body, (error, data)=>{
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(201).json(data);
            }
        });
    }
}

module.exports = AlertaController;