const db = require('../models');
const Estudiante = db.estudiante;

// Crear estudiante
exports.crearEstudiante = async (req, res) => {
  try {
    await Estudiante.create(req.body);
    res.status(201).json({ mensaje: 'Estudiante agregado correctamente' });
  } catch (error) {
    console.error('Error al crear estudiante:', error);
    res.status(500).json({ mensaje: 'Error al crear el estudiante', error });
  }
};


// Obtener todos los estudiantes
exports.obtenerEstudiantes = async (req, res) => {
  try {
    const estudiantes = await Estudiante.findAll();
    res.json(estudiantes);
  } catch (error) {
    console.error('Error detallado:', error);
    res.status(500).json({ mensaje: 'Error al obtener estudiantes', error });
  }
};

// Obtener estudiante por ID
exports.obtenerEstudiantePorId = async (req, res) => {
  try {
    const estudiante = await Estudiante.findByPk(req.params.id);
    if (!estudiante) {
      return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
    }
    res.json(estudiante);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el estudiante', error });
  }
};

// Actualizar estudiante
exports.actualizarEstudiante = async (req, res) => {
  try {
    const estudiante = await Estudiante.findByPk(req.params.id);
    if (!estudiante) {
      return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
    }
    await estudiante.update(req.body);
    res.json({ mensaje: 'Estudiante actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar estudiante', error });
  }
};

// Eliminar estudiante
exports.eliminarEstudiante = async (req, res) => {
  try {
    const estudiante = await Estudiante.findByPk(req.params.id);
    if (!estudiante) {
      return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
    }
    await estudiante.destroy();
    res.json({ mensaje: 'Estudiante eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar estudiante', error });
  }
};
