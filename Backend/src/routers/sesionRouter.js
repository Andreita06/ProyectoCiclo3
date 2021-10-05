const express = require('express');
const SesionController = require('../controllers/sesionController');

class SesionRouter{

    constructor(){
        this.router = express.Router();
        this.config(); 
    }

    config(){
        const objSesionC = new SesionController();
        this.router.post("/sesion", objSesionC.acceder);
    }

}

module.exports = SesionRouter;