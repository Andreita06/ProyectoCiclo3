// Importando express
const express = require('express');
// Importando el controlador de las mascotas
const MascotaController = require('../controllers/mascotaController');

class MascotaRouter{

    constructor(){
        this.router = express.Router();

        // Configurando las rutas
        this.config();
    }

    config(){
        // Creado objeto 
        const objMascotaController = new MascotaController();

        // Lo asignamos a la ruta
        this.router.post("/mascota", objMascotaController.registrarMascotas);
        this.router.get("/mascota", objMascotaController.getMascotas);
        this.router.put("/mascota", objMascotaController.setMascotas);
        this.router.delete("/mascota", objMascotaController.deleteMascotas);
    }

}

module.exports = MascotaRouter;