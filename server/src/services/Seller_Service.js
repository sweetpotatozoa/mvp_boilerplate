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
}

module.exports = new SellerService()
