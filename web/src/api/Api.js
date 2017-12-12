import config from 'config'

/**
 * Fetch API error handler
 */
function handleErrors(response) {
  if(!response.ok)
    throw Error(response.statusText)

  return response
}

/**
 * GET request
 * @param endpoint
 * @param uuid
 */
export function get(endpoint, uuid) {
  return fetch(`${config.API_ENDPOINT}${endpoint}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': uuid,
    },
  })
  .then(handleErrors)
  .then((response) => { return response.json() })
}

/**
 * POST request
 * @param endpoint
 * @param body
 * @param uuid
 */
export function post(endpoint, body, uuid) {
  return fetch(`${config.API_ENDPOINT}${endpoint}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': uuid,
    },
    body: JSON.stringify(body),
  })
  .then(handleErrors)
  .then((response) => { return response.json() })
}

/**
 * POST request (no Authorization header)
 * @param endpoint
 * @param body
 */
export function postUnauth(endpoint, body) {
  return fetch(`${config.API_ENDPOINT}${endpoint}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  .then(handleErrors)
  .then((response) => { return response.json() })
}
