const TransactionRepo = require('../repositories/Transaction_Repo')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const configs = require('../utils/configs')

class BuyerService {
  async createTransaction(buyerId, brand, productCode, color, size) {
    const data = {
      buyerInfo: {
        buyerId: buyerId,
        recipientName: null,
        recipientPhoneNumber: null,
        recipientAddress: null,
        depositorName: null,
      },
      productInfo: {
        brand: brand,
        productCode: productCode,
        color: color,
        size: size,
      },
      sellerInfo: {
        sellerId: null,
        sellerName: null,
        sellerPhoneNumber: null,
        returnAddress: null,
        accountNumber: null,
        accountHolderName: null,
      },

      transactionStatus: 0,
      isUniqueCodeRequest: false,
      uniqueCode: null,
    }
    const result = await TransactionRepo.createTransaction(data)
    return result
  }
}
module.exports = new BuyerService()
