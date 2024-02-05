const { Sequelize, Op } = require('sequelize');

const { Alert } = require('../../models');

module.exports = {
    async execute(dateStart, dateEnd) {
        try {
            const dbAlerts = await Alert.findAll({
                where: {
                    date: {
                        [Op.between]: [dateStart, dateEnd],
                    },
                },
                order: [['date', 'DESC']],
            });
            return dbAlerts;
        } catch (error) {
            console.error(error);
            throw new Error('Error fetching data from the database');
        }
    },
};
