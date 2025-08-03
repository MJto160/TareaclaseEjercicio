const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libro.controller');

// Crear un nuevo libro
router.post('/', libroController.crearLibro);

// Obtener todos los libros
router.get('/', libroController.obtenerLibros);

// Obtener un libro por ID
router.get('/:id', libroController.obtenerLibroPorId);

// Actualizar un libro
router.put('/:id', libroController.actualizarLibro);

// Eliminar un libro
router.delete('/:id', libroController.eliminarLibro);

module.exports = router;
