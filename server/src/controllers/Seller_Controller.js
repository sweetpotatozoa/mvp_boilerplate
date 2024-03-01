const SellerService = require('../services/Seller_Service')

class SellerController {
  async compareUniqueCode(uniqueCode) {
    // uniqueCode를 숫자로 변환
    const numericCode = await SellerService.maketoNumber(uniqueCode)

    try {
      // 변환된 숫자를 사용하여 아이템 조회
      const result = await SellerService.getItems(numericCode)
      if (result === null) {
        return { status: 404, message: 'Transaction not found' }
      } else {
        return { status: 200, ...result }
      }
    } catch (err) {
      return { status: 500, message: err.message }
    }
  }
  async updateSellerId(sellerId, transactionId) {
    try {
      const result = await SellerService.updateSellerId(sellerId, transactionId)
      return { status: 200, transactionId: result.insertedId }
    } catch (err) {
      return { status: 500, message: err.message }
    }
  }

  async getItemInfo(userId) {
    try {
      // userId를 사용하여 아이템 조회
      const result = await SellerService.getItemInfo(userId)
      if (result === null) {
        return { status: 404, message: 'Transaction not found' }
      } else {
        return { status: 200, ...result }
      }
    } catch (err) {
      return { status: 500, message: err.message }
    }
  }

  async updateSellerInfo(
    sellerId,
    sellerName,
    sellerPhoneNumber,
    returnAddress,
    accountNumber,
    accountHolderName,
  ) {
    try {
      const result = await SellerService.updateSellerInfo(
        sellerId,
        sellerName,
        sellerPhoneNumber,
        returnAddress,
        accountNumber,
        accountHolderName,
      )
      return { status: 201, transactionId: result.insertedId }
    } catch (err) {
      return { status: 500, message: err.message }
    }
  }
}

module.exports = new SellerController()
