require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: true
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa.');

    // Imprimir las tablas disponibles
    const tables = await sequelize.showAllSchemas();
    console.log('Tablas disponibles:', tables);
  } catch (error) {
    console.error('Error de conexión:', error);
  }
})();

module.exports = sequelize;