// Se crea la clase para administrar las mascotas
const mascotas = require('../models/mascota');

class MascotasController {

    constructor() {
    }
    // Para registar las mascotas
    registrarMascotas(req, res) {
        mascotas.create(req.body, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(201).json(data);
            }
        });
    }

    //Método y ruta para consultar todos los mascotas
    getMascotas(req, res) {
        mascotas.find((error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        });
    }

    // Actualizar Mascota
    setMascotas(req, res) {
        //Capturar los datos del cuerpo de la petición
        let { tipo_mascota, nombre_mascota, edad_mascota, raza_mascota, alergias, desc_alergia } = req.body;
        //Crear un objeto con los datos capturados del cuerpo de la petición. Encargado de actualizar en el método update
        let objMascotas = {
            tipo_mascota, nombre_mascota, edad_mascota, raza_mascota, alergias, desc_alergia
        }
        //Actualizar una mascotas por ID
        mascotas.findByIdAndUpdate(id, { $set: objMascotas }, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        });
    }
    
    // Eliminar mascotas
    deleteMascotas(req, res) {
        let { id } = req.body;

        //Eliminar una mascotas por ID
        mascotas.findByIdAndRemove(id, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        });
    }
}

module.exports = MascotasController;