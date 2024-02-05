// sequelize.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: 'rodrigo',
  password: '12345',
  database: 'nimbus_db',
  host: 'postgres', // Nome do serviço do PostgreSQL no Docker
  port: 5432,
  logging: false,
});

module.exports = sequelize;
