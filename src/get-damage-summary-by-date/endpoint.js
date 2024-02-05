const controller = require('./controller');

module.exports = {
    execute: async function (req, res) {
        const { dateStart, dateEnd } = req.query;

        try {
            const result = await controller.execute(dateStart, dateEnd);
            res.status(200).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};