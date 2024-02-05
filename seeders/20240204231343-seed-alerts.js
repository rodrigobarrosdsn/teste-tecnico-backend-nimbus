'use strict';

const alertsData = require('../data/alerts.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
