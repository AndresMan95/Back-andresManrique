import "dotenv/config.js";
import '../../config/database.js'; // para la base de datos
import User from '../User.js'; // para el modelo de la coleccion



// Crea un arreglo con 10 usuarios
const users = [
    { name: 'John Doe', email: 'john@example.com', password: '123456', age: 25 },
    { name: 'Jane Smith', email: 'jane@example.com', password: 'password', age: 30 },
    { name: 'Bob Johnson', email: 'bob@example.com', password: 'qwerty', age: 22 },
    { name: 'Alice Brown', email: 'alice@example.com', password: 'pass123', age: 28 },
    { name: 'Michael Green', email: 'michael@example.com', password: 'abc123', age: 40 },
    { name: 'Emma White', email: 'emma@example.com', password: 'letmein', age: 19 },
    { name: 'Chris Black', email: 'chris@example.com', password: '123abc', age: 35 },
    { name: 'Nancy Blue', email: 'nancy@example.com', password: 'testpass', age: 27 },
    { name: 'David Grey', email: 'david@example.com', password: 'grey2024', age: 32 },
    { name: 'Sophia Yellow', email: 'sophia@example.com', password: 'yellowpass', age: 29 },
  ];
  
  User.insertMany(users)