import { post } from 'api/Api'

class UserApi {
  static saveUser(user) {
    return new Promise((resolve, reject) => {
      post('/api/users', {
        data: {
          username: user.username,
          age: user.age,
        }
      }).then((data) => {
        resolve(Object.assign({}, data.data))
      })
    })
  }
}

export default UserApi
