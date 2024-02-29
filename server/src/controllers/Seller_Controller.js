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
}

module.exports = new SellerController()
