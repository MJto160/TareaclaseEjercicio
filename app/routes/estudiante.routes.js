const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/estudiante.controller');

// CRUD básico
router.post('/', estudianteController.crearEstudiante);
router.get('/', estudianteController.obtenerEstudiantes);
router.get('/:id', estudianteController.obtenerEstudiantePorId);
router.put('/:id', estudianteController.actualizarEstudiante);
router.delete('/:id', estudianteController.eliminarEstudiante);

module.exports = router;
