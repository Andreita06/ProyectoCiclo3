const vacuna = require('../models/vacuna');

class VacunaController{

    constructor(){

    }

    acceder(req, res){
        vacuna.create(req.body, (error, data)=>{
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(201).json(data);
            }
        });
    }
}

module.exports = VacunaController;