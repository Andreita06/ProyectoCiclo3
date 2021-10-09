const express = require('express');
const AlertaController = require('../controllers/alertaController');

class SesionRouter{

    constructor(){
        this.router = express.Router();
        this.config(); 
    }

    config(){
        const objAlertaC = new AlertaController();
        this.router.post("/alerta", objAlertaC.acceder);
    }

}

module.exports = AlertaController;