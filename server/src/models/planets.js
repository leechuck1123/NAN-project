const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');
const planets = require('./planets.mongo');

function is_planet_herbitable(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}

function loadPlanetsData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
            .pipe(parse({
                comment: '#',
                columns: true
            }))
            .on('data', async (data) => {
                if (is_planet_herbitable(data)) {
                    await planets.updateOne({
                        keplerName: data.kepler_name
                    },
                        {
                            keplerName: data.kepler_name
                        }, {
                        upsert: true,
                    });
                }
            }).on('end', async () => {
                resolve(await getAllPlanetsData());
            }).on('error', (err) => {
                reject("Error occurs");
            });
    });
}

async function getAllPlanetsData() {
    return await planets.find({}, { "__v": 0, "_id": 0 });
}

module.exports = { getAllPlanetsData, loadPlanetsData }
