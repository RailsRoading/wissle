import config from 'config'

export function get(endpoint, uuid) {
  return fetch(`${config.API_ENDPOINT}${endpoint}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': uuid,
    },
  }).then((response) => {
    return response.json()
  })
}

export function post(endpoint, body) {
  return fetch(`${config.API_ENDPOINT}${endpoint}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((response) => {
    return response.json()
  })
}
