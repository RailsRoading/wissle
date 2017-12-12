import { postUnauth } from 'api/Api'

export default class UserApi {
  static saveUser(user) {
    return postUnauth('/api/users', {
      data: {
        username: user.username,
        age: user.age,
      }
    }).then((data) => {
      return Object.assign({}, data.data)
    })
  }
}
