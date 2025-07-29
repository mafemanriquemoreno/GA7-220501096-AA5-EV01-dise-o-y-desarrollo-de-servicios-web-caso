// 1. Importar el módulo express
const express = require('express');

// 2. Crear una aplicación de express
const app = express();

// Middleware para que el servidor entienda datos en formato JSON
app.use(express.json());

// "Base de datos" simulada con un arreglo para guardar usuarios
const usuarios = [];

// 3. Definir el puerto en el que correrá el servidor
const PUERTO = 3000;

// --- RUTAS ---

/**
 * Ruta para registrar un nuevo usuario.
 * Espera un 'username' y 'password' en el cuerpo de la petición.
 */
app.post('/registro', (req, res) => {
  // Obtenemos el usuario y contraseña del cuerpo de la petición (req.body)
  const { username, password } = req.body;

  // Verificamos si los datos fueron enviados
  if (!username || !password) {
    return res.status(400).json({ mensaje: 'El nombre de usuario y la contraseña son requeridos' });
  }

  // Creamos el nuevo objeto de usuario
  const nuevoUsuario = { username: username, password: password };

  // Añadimos el nuevo usuario a nuestra "base de datos"
  usuarios.push(nuevoUsuario);

  // Mostramos en la consola del servidor que se guardó para depuración
  console.log('Usuario registrado:', nuevoUsuario);
  console.log('Lista de usuarios actualizada:', usuarios);

  // Enviamos una respuesta al cliente confirmando la creación
  res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
});

/**
 * Ruta para iniciar sesión.
 * Espera un 'username' y 'password' en el cuerpo de la petición.
 */
app.post('/login', (req, res) => {
  // 1. Obtenemos el usuario y contraseña del cuerpo de la petición
  const { username, password } = req.body;

  // 2. Buscamos si existe un usuario con ese username en nuestro arreglo
  const usuario = usuarios.find(u => u.username === username);

  // 3. Verificamos si el usuario NO existe O si la contraseña es incorrecta
  if (!usuario || usuario.password !== password) {
    // Si alguna de las dos condiciones es cierta, enviamos un error de autenticación
    // 401 significa "No Autorizado"
    return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
  }

  // 4. Si el usuario existe y la contraseña es correcta, enviamos un mensaje de éxito
  // 200 significa "OK"
  res.status(200).json({ mensaje: 'Inicio de sesión exitoso' });
});

// 4. Iniciar el servidor para que escuche peticiones en el puerto definido
app.listen(PUERTO, () => {
  console.log(`El servidor está escuchando en el puerto ${PUERTO}...`);
});