// src/get-damage-summary-by-date/route.js
const endpoint = require('./endpoint');

module.exports = {
    method: 'get',
    path: '/damage-summary-by-date',
    fn: endpoint.execute,
};
