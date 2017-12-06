import delay from './delay'
import config from 'config'

class UserApi {
  static saveUser(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch(`${config.API_ENDPOINT}/api/users`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            data: {
              username: user.username,
              age: user.age
            }
          })
        })
          .then((response) => {
            //do something awesome that makes the world a better place
          })

        resolve(Object.assign({}, user))
      }, delay)
    })
  }
}

export default UserApi
