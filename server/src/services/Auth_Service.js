const AuthRepo = require('../repositories/Auth_Repo')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const configs = require('../utils/configs')

class AuthService {
  async createUser(userName, password, phoneNumber, email) {
    const data = {
      userName: userName,
      password: bcrypt.hashSync(password, 10),
      phoneNumber: phoneNumber,
      email: email,
    }
    const result = await AuthRepo.createUser(data)
    return result
  }
  async getUser(userName) {
    const result = await AuthRepo.getUserByUserName(userName)
    return result
  }
  async validatePassword(input, hash) {
    return bcrypt.compareSync(input, hash)
  }
  async getToken(userId) {
    const tokenPayload = { user: { id: userId } }
    const token = jwt.sign(tokenPayload, configs.accessTokenSecret)
    return token
  }
}

module.exports = new AuthService()
