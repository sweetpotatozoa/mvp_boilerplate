const mongodb = require('../utils/mongodb')

class TransactionRepo {
  constructor() {
    this.db = mongodb.mainDb
    this.collection = this.db.collection('transactions')
  }

  async createTransaction(data) {
    const result = await this.collection.insertOne(data)
    return result
  }
}

module.exports = new TransactionRepo()
