// models/alert.js
const { DataTypes } = require('sequelize');
const sequelize = require('../src/sequelize'); // Ajuste o caminho conforme necessário

module.exports = (sequelize, DataTypes) => {
  const Alert = sequelize.define('Alert', {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    event: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    damage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Alert;
};
