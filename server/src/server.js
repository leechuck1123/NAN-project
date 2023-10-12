const http = require('http');
const app = require('./app');
const { loadPlanetsData } = require('./models/planets')
const { openConnection } = require('./mongo');

const PORT = 8000;

const server = http.createServer(app);

async function startServer() {
    await openConnection();
    await loadPlanetsData();
    server.listen(PORT, () => {
        console.log(`The server listens on port ${PORT}`);
    });
}

startServer();
