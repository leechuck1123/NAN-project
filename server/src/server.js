const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');

const PORT = 8000;

const MONGO_URL = 'mongodb+srv://nasa-demo:qkjidcp4NDkI7BbK@nasa-cluster.feb5zma.mongodb.net/?retryWrites=true&w=majority';

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('mongodb connected!');
});

async function startServer() {
    await mongoose.connect(MONGO_URL);

    server.listen(PORT, () => {
        console.log(`The server listens on port ${PORT}`);
    });
}

startServer();
