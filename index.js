const express = require('express');

const cors = require('cors');

const app = express();


//configuración express y cors
app.use(express.json());
app.use(cors());



app.listen(3000, () => {
    try{
        console.log('Servidor conectado al puerto 3000');
    } catch (error) {
        console.log('Error Conexion al servidor:', error.message);
    }
});