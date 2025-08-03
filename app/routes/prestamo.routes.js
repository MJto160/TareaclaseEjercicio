const express = require('express');
const router = express.Router();
const prestamoController = require('../controllers/prestamo.controller.js');

// Asignar rutas para los prestamos
router.post('/', prestamoController.create);

// Obtener prestamos por estudiante
router.get('/estudiante/:id', prestamoController.obtenerPrestamosPorEstudiante);

// Marcar prestamo como devuelto
router.put('/:id', prestamoController.devolverPrestamo);

module.exports = router;