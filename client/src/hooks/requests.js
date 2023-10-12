const BASE_URL = "http://localhost";

async function httpGetPlanets() {
  // Load planets and return as JSON.
  const response = await fetch(`${BASE_URL}:8000/planets`);
  return await response.json();
}

async function httpGetLaunches() {
  // Load launches, sort by flight number, and return as JSON.
  const response = await fetch(`${BASE_URL}:8000/launches`);
  return await response.json();
}

async function httpSubmitLaunch(launch) {
  const response = await fetch(`${BASE_URL}:8000/launches`, {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(launch)
  });
  return await response.json()
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};