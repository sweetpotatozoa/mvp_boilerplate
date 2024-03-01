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

  async updateTransaction(transactionId, data) {
    const result = await this.collection.updateOne(
      { _id: new mongoose.Types.ObjectId(transactionId) },
      {
        $set: {
          'buyerInfo.recipientName': data.buyerInfo.recipientName,
          'buyerInfo.recipientPhoneNumber': data.buyerInfo.recipientPhoneNumber,
          'buyerInfo.recipientAddress': data.buyerInfo.recipientAddress,
          'buyerInfo.depositorName': data.buyerInfo.depositorName,
        },
      },
    )

    return result
  }

  async getItems(uniqueCode) {
    const result = await this.collection.findOne({
      uniqueCode: uniqueCode,
    })

    return result
  }

  async requestUniqueCode(buyerId) {
    // 최근 문서를 찾기 위해 find() 메서드를 사용
    const document = await this.collection
      .find({ 'buyerInfo.buyerId': new mongoose.Types.ObjectId(buyerId) })
      .sort({ createdAt: -1 }) // createdAt을 기준으로 내림차순 정렬
      .limit(1) // 최근 문서 1개만 선택
      .toArray() // 결과를 배열로 변환

    // 결과 확인
    console.log('최근 문서:', document)

    // 최근 문서를 업데이트
    const result = await this.collection.findOneAndUpdate(
      { _id: document[0]._id }, // 최근 문서의 _id를 사용하여 업데이트
      { $set: { isUniqueCodeRequest: true } },
    )
    return result
  }

  async getItemInfo(sellerId) {
    const result = await this.collection.findOne(
      { 'sellerInfo.sellerId': new mongoose.Types.ObjectId(sellerId) },
      {
        sort: { createdAt: -1 },
      },
    )
    return result
  }
}

module.exports = new TransactionRepo()
