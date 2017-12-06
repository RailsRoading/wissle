import { post } from 'api/Api'

class UserApi {
  static saveUser(user) {
    return new Promise((resolve, reject) => {
      post('/api/users', {
        data: {
          username: user.username,
          age: user.age,
        }
      })
      resolve(Object.assign({}, user))
    })
  }
}

export default UserApi
