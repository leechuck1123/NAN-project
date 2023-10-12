const express = require('express');
const { getAllPlanets } = require('./controller');

const router = express.Router();

router.get('/', getAllPlanets);

module.exports = router;