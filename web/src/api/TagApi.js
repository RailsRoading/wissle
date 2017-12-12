import { get, post } from 'api/Api'

export default class TagApi {
  static getTags(getState) {
    return get('/api/tags', getState().user.uuid).then((data) => {
      return Object.assign({}, data.map((tag) => Object.assign({}, tag.data)))
    })
  }

  static saveTag(tag) {
    return new Promise((resolve, reject) => {
      post('/api/tags', {
        data: {
          title: tag.title,
        }
      })
      resolve(Object.assign({}, tag))
    })
  }
}
