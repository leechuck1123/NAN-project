const launchesDatabase = require('./launches.mongo');

const launches = new Map();

let num = 100
const launch = {
    flightNumber: num,
    mission: 'Kepler  Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    mission: 'Kepler-442 b',
    customers: ['ZTM', 'NASA'],
    upcoming: true,
    success: true
};

saveLaunch(launch);

launches.set(launch.flightNumber, launch);

async function getAllLaunches() {
    return await launchesDatabase.find({});
}

async function saveLaunch(launch) {
    await launchesDatabase.updateOne({
        flightNumber: launch.flightNumber
    }, launch, { upsert: true });
}

async function getLatestFlightNumber() {
    const launch = await launchesDatabase.findOne()
        .sort("-flightNumber");
    return launch?.flightNumber || 100;
}

async function addNewLaunch(launch) {
    const flightNumber = (await getLatestFlightNumber()) + 1
    launch = {
        ...launch,
        flightNumber,
        "upcoming": true,
        "success": true
    };
    await launchesDatabase.create(launch);
}



module.exports = {
    getAllLaunches,
    addNewLaunch
};