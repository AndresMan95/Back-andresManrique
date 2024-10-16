import { Schema, model } from "mongoose";

let coleccion = 'users'; // nombre de la coleccion

let squema = new Schema({
    name: { type: String, required: true }, // El campo "required" debe ir dentro del objeto
    email: { type: String, required: true }, // El campo "required" debe ir dentro del objeto
    password: { type: String, required: true }, // El campo "required" debe ir dentro del objeto
    age: { type: Number, required: true } // El campo "required" debe ir dentro del objeto
}, {
    timestamps: true // para registrar la fecha de creación y modificación
}); // esquema de la coleccion

let User = model(coleccion, squema); // modelo de la coleccion

export default User;
