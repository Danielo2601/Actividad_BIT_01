const express = require('express');

const cors = require('cors');

const app = express();

const dotenv = require('dotenv');
dotenv.config();

const dbConnection = require('./config/db');

const PUERTO = process.env.PUERTO


dbConnection();

//configuración express y cors
app.use(express.json());
app.use(cors());
    

app.listen(PUERTO, () => {
    try{
        console.log(`Servidor conectado al puerto ${PUERTO}`);
    } catch (error) {
        console.log('Error Conexion al servidor:', error.message);
    }
});