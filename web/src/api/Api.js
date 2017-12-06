import config from 'config'

export function post(endpoint, body) {
  return fetch(`${config.API_ENDPOINT}${endpoint}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
}
