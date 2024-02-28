const AuthService = require('../services/Auth_Service')

class AuthController {
  async register(userName, password, phoneNumber, email = null) {
    try {
      const user = await AuthService.getUser(userName)
      if (user !== null) {
        return { status: 409, message: 'User already exists' }
      } else {
        const result = await AuthService.createUser(
          userName,
          password,
          phoneNumber,
          email,
        )
        return { status: 201, userId: result.insertedId }
      }
    } catch (err) {
      return { status: 500, message: err.message }
    }
  }
  async login(userName, password) {
    try {
      const result = await AuthService.getUser(userName)
      if (result === null) {
        return { status: 404, message: 'User not found' }
      } else {
        if (await AuthService.validatePassword(password, result.password)) {
          const tokenResult = await AuthService.getToken(result._id)
          return { status: 200, token: tokenResult }
        } else {
          return { status: 401, message: 'Wrong password' }
        }
      }
    } catch (err) {
      return { status: 500, message: err.message }
    }
  }
}

module.exports = new AuthController()
