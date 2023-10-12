const launches = new Map();

let num = 100
const launch = {
    flightNumber: num,
    mission: 'Kepler  Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true
};


launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    console.log(launches.values());
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    num += 1;
    launch = {
        ...launch,
        flightNumber: num,
        "upcoming": true,
        "success": true
    };
    launches.set(launch.flightNumber, launch);
}



module.exports = {
    getAllLaunches,
    addNewLaunch
};