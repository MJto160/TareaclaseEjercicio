const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./app/models'); // importa index.js con todos los modelos

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/libros', require('./app/routes/libro.routes'));
app.use('/api/estudiantes', require('./app/routes/estudiante.routes'));
app.use('/api/prestamos', require('./app/routes/prestamo.routes'));

// Sincronizar modelos con la base de datos
db.sequelize.sync({ force: false })
  .then(() => {
    console.log(' Base de datos sincronizada');
    // Iniciar servidor
    app.listen(8081, () => {
      console.log('Servidor corriendo en localhost:8081');
    });
  })
  .catch((err) => {
    console.error(' Error al sincronizar la base de datos:', err);
  });
