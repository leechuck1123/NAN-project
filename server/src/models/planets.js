const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

function is_planet_herbitable(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}

function getAllPlanetsData() {
    return new Promise((resolve, reject) => {
        const herbitable_planet = []
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
            .pipe(parse({
                comment: '#',
                columns: true
            }))
            .on('data', (data) => {
                if (is_planet_herbitable(data)) {
                    herbitable_planet.push(data);
                }
            }).on('end', () => {
                resolve(herbitable_planet);
            }).on('error', (err) => {
                reject("Error occurs");
            });
    });
}

module.exports = { getAllPlanetsData }
