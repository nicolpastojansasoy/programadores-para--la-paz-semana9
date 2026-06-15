const express = require('express');
const app = express();

// Ruta raíz de prueba
app.get('/', (req, res) => {
  res.send('Servidor activo y funcionando');
});

// Ruta de estado de la API comunitaria
app.get('/estado', (req, res) => {
  res.json({
    estado: "Servidor funcionando",
    servicio: "API comunitaria"
  });
});

// Configuración del puerto de escucha 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
