// sequelize.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: 'rodrigo',
  password: '12345',
  database: 'nimbus_db',
  host: 'postgres',
  port: 5432,
  logging: false,
});

module.exports = sequelize;
