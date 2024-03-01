const TransactionRepo = require('../repositories/Transaction_Repo')

class SellerService {
  async maketoNumber(uniqueCode) {
    const numericValue = Number(uniqueCode)
    return numericValue
  }

  async getItems(uniqueCode) {
    const result = await TransactionRepo.getItems(uniqueCode)
    return result
  }

  async updateSellerId(sellerId, transactionId) {
    const result = await TransactionRepo.updateSellerId(sellerId, transactionId)
    return result
  }

  async getItemInfo(userId) {
    const result = await TransactionRepo.getItemInfo(userId)
    return result
  }
}

module.exports = new SellerService()
