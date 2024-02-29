const BuyerService = require('../services/Buyer_Service')

class BuyerController {
  async createTransaction(buyerId, brand, productCode, color, size) {
    try {
      const result = await BuyerService.createTransaction(
        buyerId,
        brand,
        productCode,
        color,
        size,
      )
      return { status: 201, transactionId: result.insertedId }
    } catch (err) {
      return { status: 500, message: err.message }
    }
  }
}

module.exports = new BuyerController()
