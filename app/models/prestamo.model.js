module.exports = (sequelize, DataTypes) => {
  const Prestamo = sequelize.define('Prestamo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fechaPrestamo: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    estudianteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fechaDevolucion: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },

    libroId: {
      type: DataTypes.INTEGER,
        allowNull: false,
    }, 

  }, {
    tableName: 'prestamos',
    timestamps: false
  });

  return Prestamo;
};
