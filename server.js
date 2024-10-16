import express from "express";
import "dotenv/config"; // para leer las variables de entorno
import "./config/database.js"; // para la base de datos luego de las variables de entorno 

const server= express();
const PORT = process.env.PORT || 8080;

const ready=()=>{
    console.log(`Servidor http escuchando en el puerto ${PORT}`);
}




/* console.log(process.env);  */// para ver las variables de entorno

//hacemos un endpoint
server.get("/", (req, res)=>{
    res.send("Hola mundo");
    
})

server.listen(PORT, ready);