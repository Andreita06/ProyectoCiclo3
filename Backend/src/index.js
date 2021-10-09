// Clase tomada del ejercicio trabajo en clase
//Importar express
const express = require('express');
// const serverRouter = require('./routers/serverRouter');
//Importar mongoose
const mongoose = require('mongoose');
//Importar url de conexión a la BD
const DatabaseConnection = require('./database/databaseConnection');
// Importando otras rutas
// const AlertaController = require('./controllers/alertaController');
// const MascotaController = require('./controllers/mascotaController');
// const SesionController = require('./controllers/sesionController');
const UsuarioRouter = require('./routers/usuarioRouter');
// const VacunaController = require('./controllers/vacunaController');

class Server {
    //constructor
    constructor() {
        //Construir objeto de conexión a la BD
        const dbConnection = new DatabaseConnection();

        // Crear app express
        this.app = express();

        //Configurar parámetros de express para levantar el servidor
        this.config();
    }

    config() {

        //Indicar el puerto por el que se ejecutará el servidor
        this.app.set('port', process.env.PORT || 3000);

        //Indicar que las solicitudes http se trabajará en JSON
        this.app.use(express.json());

        // Rutas
        const router = express.Router();
        router.get('/', (req, res) => {
            console.log("Nueva conexión");
            res.status(200).json({ message: "Bienvenido to Pet Vaccine!" });
        });

        // Creando rutas
        // const serverR = new serverRouter.default();
        // const alertaController = new AlertaController();
        // const mascotaController = new MascotaController();
        // const sesionController = new SesionController();
        const usuarioController = new UsuarioRouter();
        // const vacunaController = new VacunaController();

        //añadir las rutas al servidor
        this.app.use(router);
        // this.app.use(serverR.router);
        // this.app.use(alertaController);
        // this.app.use(mascotaController);
        // this.app.use(sesionController);
        this.app.use(usuarioController.router);
        // this.app.use(vacunaController);

        //Levantar el servidor/correr el servidor
        this.app.listen(this.app.get('port'), () => {
            console.log("Servidor corriendo por el puerto => ", this.app.get('port'));
        });
    }
}

// Se instancia la clase
const objServer = new Server();
