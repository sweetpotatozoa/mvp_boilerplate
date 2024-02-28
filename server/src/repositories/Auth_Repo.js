const mongodb = require('../utils/mongodb')

class AuthRepo {
  constructor() {
    this.db = mongodb.mainDb
    this.collection = this.db.collection('users')
  }

  async createUser(data) {
    const result = await this.collection.insertOne(data)
    return result
  }

  async getUserByUserName(userName) {
    const result = await this.collection.findOne({ userName: userName })
    return result
  }
}

module.exports = new AuthRepo()
