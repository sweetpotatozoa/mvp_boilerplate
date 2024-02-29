const mongodb = require('../utils/mongodb')
const mongoose = require('mongoose')

class TransactionRepo {
  constructor() {
    this.db = mongodb.mainDb
    this.collection = this.db.collection('transactions')
  }

  async createTransaction(data) {
    const result = await this.collection.insertOne(data)
    return result
  }

  async getLastestTransaction(userId) {
    const result = await this.collection.findOne(
      {
        $or: [
          { 'buyerInfo.buyerId': new mongoose.Types.ObjectId(userId) },
          { 'sellerInfo.sellerId': new mongoose.Types.ObjectId(userId) },
        ],
      },
      {
        sort: { createdAt: -1 }, // createdAt을 기준으로 내림차순 정렬
      },
    )
    return result // 단일 객체 반환
  }
}

module.exports = new TransactionRepo()
