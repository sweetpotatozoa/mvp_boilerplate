const TransactionRepo = require('../repositories/Transaction_Repo')
const { ObjectId } = require('mongodb') // ObjectId를 위한 require 추가
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const configs = require('../utils/configs')

class BuyerService {
  async createTransaction(buyerId, brand, productCode, color, size) {
    const data = {
      buyerInfo: {
        buyerId: new ObjectId(buyerId), // buyerId를 ObjectId로 변환
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
        sellerId: null, // sellerId도 필요한 경우 ObjectId로 변환
        sellerName: null,
        sellerPhoneNumber: null,
        returnAddress: null,
        accountNumber: null,
        accountHolderName: null,
      },
      transactionStatus: 0,
      isUniqueCodeRequest: false,
      uniqueCode: null,
      createdAt: new Date(), // 현재 타임스탬프 생성
    }

    // sellerId를 ObjectId로 저장해야 한다면, 해당 정보를 받아와서 new ObjectId(sellerId)로 변환해야 합니다.
    // 예: data.sellerInfo.sellerId = new ObjectId(sellerId); // sellerId를 인자로 받는 경우

    const result = await TransactionRepo.createTransaction(data)
    return result
  }

  async updateTransaction(
    transactionId,
    recipientName,
    recipientPhoneNumber,
    recipientAddress,
    depositorName,
  ) {
    const data = {
      buyerInfo: {
        recipientName: recipientName,
        recipientPhoneNumber: recipientPhoneNumber,
        recipientAddress: recipientAddress,
        depositorName: depositorName,
      },
    }

    const result = await TransactionRepo.updateTransaction(transactionId, data)
    return result
  }

  async RequestUniqueCode(buyerId) {
    const result = await TransactionRepo.requestUniqueCode(buyerId)
    console.log('서비스에서 받은 result', result)
    return result
  }
}

module.exports = new BuyerService()
