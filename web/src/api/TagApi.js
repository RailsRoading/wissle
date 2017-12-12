import { get } from 'api/Api'

class TagApi {
  static getTags(getState) {
    return get('/api/tags', getState().user.uuid).then((data) => {
      return Object.assign({}, data.map((tag) => Object.assign({}, tag.data)))
    })
  }
}

export default TagApi
