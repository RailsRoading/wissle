import { get } from 'api/Api'

class TagApi {
  static getTags(getState) {
    return new Promise((resolve, reject) => {
      get('/api/tags', getState().user.uuid).then((data) => {
        resolve(Object.assign({}, data.map((tag) => Object.assign({}, tag.data))))
      })
    })
  }
}

export default TagApi
