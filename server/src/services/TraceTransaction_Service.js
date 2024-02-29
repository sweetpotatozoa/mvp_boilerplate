const TransactionRepo = require('../repositories/Transaction_Repo')
const mongoose = require('mongoose')

class TraceTransactionService {
  async isIdvalid(userId) {
    return mongoose.Types.ObjectId.isValid(userId)
  }

  async getTransactionProgress(userId) {
    const result = await TransactionRepo.getLastestTransaction(userId)
    return result
  }
}

module.exports = new TraceTransactionService()
