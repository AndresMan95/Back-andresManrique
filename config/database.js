import mongoose from "mongoose";

let url =process.env.URI_MONGO;

// conexion a base de datos

/* mongoose.connect(url)
    .then(()=> console.log("Base de datos conectada"))
    .catch(err => console.log(err)); */

 async function coneccionBaseDatos(){
    try{
         await mongoose.connect(process.env.URI_MONGO);
        console.log("Base de datos conectada");
    }catch(err){
        console.log(err);
    }
}

coneccionBaseDatos();