import config from 'config'

export function post(endpoint, body) {
  return fetch(`${config.API_ENDPOINT}${endpoint}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': '2071d589-001e-498b-a4f9-73b0af3ff804',
    },
    body: JSON.stringify(body)
  })
}
