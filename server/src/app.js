const express = require('express');
const cors = require('cors');
const path = require('path');

const planetRouter = require('./routes/planets/route');
const launcheRouter = require('./routes/launches/route');

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use('/planets', planetRouter);
app.use('/launches', launcheRouter);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;