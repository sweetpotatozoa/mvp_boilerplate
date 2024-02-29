const BuyerService = require('../services/Buyer_Service')
const TraceTransaction_Service = require('../services/TraceTransaction_Service')

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

  async updateTransaction(
    transanctionId,
    recipientName,
    recipientPhoneNumber,
    recipientAddress,
    depositorName,
  ) {
    try {
      const result = await BuyerService.updateTransaction(
        transanctionId,
        recipientName,
        recipientPhoneNumber,
        recipientAddress,
        depositorName,
      )
      return { status: 201, transactionId: result.insertedId }
    } catch (err) {
      return { status: 500, message: err.message }
    }
  }

  async RequestUniqueCode(buyerId) {
    const isIdvalid = await TraceTransaction_Service.isIdvalid(buyerId)
    if (!isIdvalid) {
      return { status: 400, message: 'Invalid ID' }
    } else {
      try {
        const result = await BuyerService.RequestUniqueCode(buyerId)
        console.log('컨트롤러에서 받은 result', result)
        if (result === null) {
          return { status: 404, message: 'Transaction not found' }
        } else {
          return { status: 201, message: 'Unique code request success' }
        }
      } catch (err) {
        return { status: 500, message: err.message }
      }
    }
  }
}

module.exports = new BuyerController()
