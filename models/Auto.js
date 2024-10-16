import {Schema, model} from "mongoose";

let coleccion = 'autos'; // nombre de la coleccion

let squema = new Schema({
    marca: { type: String, required: true }, // El campo "required" debe ir dentro del objeto
    modelo: { type: String, required: true }, // El campo "required" debe ir dentro del objeto
    anio: { type: Number, required: true } // El campo "required" debe ir dentro del objeto
}, {
    timestamps: true // para registrar la fecha de creación y modificación

}); // esquema de la coleccion

let Auto = model(coleccion, squema); // modelo de la coleccion

export default Auto;