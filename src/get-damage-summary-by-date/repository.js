// Certifique-se de importar o Sequelize e o operador 'Op' se não estiverem importados
const { Sequelize, Op } = require('sequelize');

// Certifique-se de importar o modelo Alert corretamente
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
