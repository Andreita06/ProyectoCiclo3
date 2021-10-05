// Se crea la clase para administrar los usuarios
const usuario = require('../models/usuario');

class UsuarioController {

    constructor() {
    }
    // Para registar los usuarios
    registrar(req, res) {
        usuario.create(req.body, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(201).json(data);
            }
        });
    }

    //Método y ruta para consultar todos los usuarios
    getUsuarios(req, res) {
        usuario.find((error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        });
    }

    //Update
    setUsuario(req, res) {
        //Capturar los datos del cuerpo de la petición
        let { identificacion, nombres, apellidos, direccion, correo, celular, clave } = req.body;
        //Crear un objeto con los datos capturados del cuerpo de la petición. Encargado de actualizar en el método update
        let objUsuario = {
            identificacion, nombres, apellidos, direccion, correo, celular, clave
        }
        //Actualizar un usuario por ID
        usuario.findByIdAndUpdate(id, { $set: objUsuario }, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        });
    }

    deleteUsuario(req, res) {
        let { id } = req.body;

        //Eliminar un usuario por ID
        usuario.findByIdAndRemove(id, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        });
    }
}

module.exports = UsuarioController;