// backend/index.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Rutas del backend
app.get('/api/saludo', (req, res) => {
  res.send('¡Hola desde el backend!');
});

// Escucha en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
