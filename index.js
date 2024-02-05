const server = require('./src/server');
const damageSummaryByDateRoute = require('./src/get-damage-summary-by-date/route');

server.use(damageSummaryByDateRoute.path, damageSummaryByDateRoute.fn);

const port = process.env.PORT || 3333;
server.listen(port, () => console.log(`Running server on port ${port}`));
