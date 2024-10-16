import "dotenv/config.js";
import '../../config/database.js'; // para la base de datos
import Auto from '../Auto.js'; // para el modelo de la coleccion    

const autos = [
    { marca: 'Toyota', modelo: 'Corolla', anio: 2020 },
    { marca: 'Honda', modelo: 'Civic', anio: 2018 },
    { marca: 'Ford', modelo: 'Mustang', anio: 2021 },
    { marca: 'Chevrolet', modelo: 'Camaro', anio: 2019 },
    { marca: 'Nissan', modelo: 'Sentra', anio: 2022 },
    { marca: 'BMW', modelo: 'Serie 3', anio: 2017 },
    { marca: 'Mercedes-Benz', modelo: 'Clase C', anio: 2020 },
    { marca: 'Audi', modelo: 'A4', anio: 2019 },
    { marca: 'Tesla', modelo: 'Model 3', anio: 2021 },
    { marca: 'Mazda', modelo: 'Mazda3', anio: 2018 }
  ];

  Auto.insertMany(autos) // inserta los datos en la coleccion