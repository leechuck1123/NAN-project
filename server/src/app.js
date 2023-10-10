const express = require('express');
const planetRouter = require('./routes/planets/route');
const cors = require('cors');
const path = require('path');

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(planetRouter);

module.exports = app;