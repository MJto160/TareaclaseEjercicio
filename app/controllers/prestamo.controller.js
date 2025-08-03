const e = require("cors");

const db = require("../models");
const Prestamo = db.prestamo;
const Libro = db.libro;
const Estudiante = db.estudiante;

//Crear un prestamo
exports.create = async (req, res) => {
    try {
        const { libroId, estudianteId, fechaPrestamo } = req.body;

        // verificar si el libro esta disponible
        const libro = await Libro.findByPk(libroId);

        if (!libro || !libro.disponible) {
             return res.status(400).send({ message: "El libro no está disponible" });
        }


        // Crear el prestamo
        const prestamo = await Prestamo.create({
            libroId,
            estudianteId,
            fechaPrestamo,
            fechaDevolucion: null
            
        });

        //Marcar el libro como no disponible
        await libro.update({ disponible: false });
        res.status(201).send(prestamo);
    }catch (error) {
        console.error("Error al crear el prestamo:", error);
        res.status(500).send({ message: "Error al crear el prestamo", error: error.message });
    }
};

//Obtener prestamos por estudiantes
exports.obtenerPrestamosPorEstudiante = async (req, res) => {
    try {
        const prestamos = await Prestamo.findAll({
            where: {estudianteId: req.params.id},
    });
    res.json(prestamos);
    } catch (error) {
        console.error("Error al obtener los prestamos:", error);
    }
};

//Marcar prestamo como devuelto
exports.devolverPrestamo = async (req, res) => {
    try {
        const prestamo = await Prestamo.findByPk(req.params.id);
        if (!prestamo) {
            return res.status(404).send({ message: "Prestamo no encontrado" });
        }

        // Actualizar fecha de devolucion
        const fechaActual = new Date();
        await prestamo.update({ fechaDevolucion: fechaActual });

        //marcar libro como disponible
        const libro = await Libro.findByPk(prestamo.libroId);
        if (libro) {
            await libro.update({ disponible: true });
        }
        res.status(200).send({ message: "libro devuelto correctamente", prestamo });
    }catch (error) {
        res.status(500).send({ message: "Error al devolver el libro", error: error.message });
    }
};
