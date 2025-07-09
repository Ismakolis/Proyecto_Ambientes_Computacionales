const express = require("express");
const conectarDB = require('./config/db');
require('dotenv').config();
const cors = require("cors");

// Creamos el servidor 
const app = express();

// Conectamos a la base de datos
conectarDB();

// Configurar CORS correctamente para aceptar cookies
const corsOptions = {
    origin: 'http://localhost:4200',
    credentials: true
};
app.use(cors(corsOptions));
// Middlewares
app.use(express.json());

// Rutas
app.use('/api/loginUser', require('./routes/usuarioLogin'));
//usuarios
app.use('/api', require('./routes/usuarioRoutes'));


// Iniciar servidor
app.listen(4000, () => {
    console.log('El servidor arrancó perfectamente en el puerto 4000');
});
