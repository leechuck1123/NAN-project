const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://nasa-demo:qkjidcp4NDkI7BbK@nasa-cluster.feb5zma.mongodb.net/?retryWrites=true&w=majority';

mongoose.connection.once('open', () => {
    console.log('mongodb connected!');
});

mongoose.connection.on('error', () => {
    console.error('unexpected error occurs');
});

async function openConnection() {
    await mongoose.connect(MONGO_URL);
}

async function closeConnection() {
    await mongoose.disconnect();
}

module.exports = {
    openConnection,
    closeConnection,
}