// usamos la función requiere para cargar el modulo db.config.js para traer los parametros preconfigurados de la BD
const dbConfig = require("../config/db.config.js");

// cargamos el modulo sequelize "ORM" para el manejo de las entidades como objetos. 
const Sequelize = require("sequelize");

// creamos una variable sequelize y la inicializamos como un Objeto Sequelize con la informacion de la BD 
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false         
    }
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

// creamos un objeto db
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// ✅ Importar modelos
db.estudiante = require("./estudiante.model.js")(sequelize, Sequelize);
db.libro = require("./libro.model.js")(sequelize, Sequelize);
db.prestamo = require("./prestamo.model.js")(sequelize, Sequelize);

// ✅ (Opcional): Si tienes relaciones 1:N o N:1, puedes definirlas aquí
// Por ejemplo, si un cliente tiene muchos pedidos:
// db.clientes.hasMany(db.pedidos, { foreignKey: "id_cliente" });
// db.pedidos.belongsTo(db.clientes, { foreignKey: "id_cliente" });

module.exports = db;
