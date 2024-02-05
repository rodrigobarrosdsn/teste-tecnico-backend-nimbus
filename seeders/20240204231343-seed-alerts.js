// seeders/20240205231849-seed-alerts.js
'use strict';

const alertsData = require('../data/alerts.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Adicione o campo createdAt aos dados do alerta
    const alertsWithTimestamps = alertsData.map(alert => ({
      ...alert,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Alerts', alertsWithTimestamps, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Alerts', null, {});
  },
};
