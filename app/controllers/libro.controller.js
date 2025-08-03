const db = require('../models');
const Libro = db.libro;

// Crear un nuevo libro
exports.crearLibro = async (req, res) => {
  try {
    console.log("Body recibido:", req.body);
    const libro = await Libro.create(req.body);
    res.status(201).json(libro);
  } catch (error) {
    console.error(" Error al crear el libro:", error);
    res.status(500).json({ mensaje: 'Error al crear el libro' });
  }
};


// Obtener todos los libros
exports.obtenerLibros = async (req, res) => {
  try {
    const libros = await Libro.findAll();
    res.json(libros);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los libros', error });
  }
};

// Obtener libro por ID
exports.obtenerLibroPorId = async (req, res) => {
  try {
    const libro = await Libro.findByPk(req.params.id);
    if (!libro) {
      return res.status(404).json({ mensaje: 'Libro no encontrado' });
    }
    res.json(libro);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el libro', error });
  }
};

// Actualizar libro
exports.actualizarLibro = async (req, res) => {
  try {
    const libro = await Libro.findByPk(req.params.id);
    if (!libro) {
      return res.status(404).json({ mensaje: 'Libro no encontrado' });
    }
    await libro.update(req.body);
    res.json({ mensaje: 'Libro actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el libro', error });
  }
};

// Eliminar libro
exports.eliminarLibro = async (req, res) => {
  try {
    const libro = await Libro.findByPk(req.params.id);
    if (!libro) {
      return res.status(404).json({ mensaje: 'Libro no encontrado' });
    }
    await libro.destroy();
    res.json({ mensaje: 'Libro eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el libro', error });
  }
};
