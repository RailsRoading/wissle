import { post } from 'api/Api'

class WissleApi {
  static saveWissle(wissle) {
    return new Promise((resolve, reject) => {
      post('/api/wissles', {
        data: {
          text: wissle.text,
          latitude: 0,
          longitude: 0,
          user: 1
        }
      })
      resolve(Object.assign({}, wissle))
    })
  }
}

export default WissleApi
