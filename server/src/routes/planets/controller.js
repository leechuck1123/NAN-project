const { getAllPlanetsData } = require('../../models/planets');

async function getAllPlanets(req, res) {
    const planets = await getAllPlanetsData();
    return res.status(200).json(planets);
};

module.exports = { getAllPlanets };