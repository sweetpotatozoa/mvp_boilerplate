const express = require('express')
const BuyerController = require('../controllers/Buyer_Controller')
const auth = require('../middleware/auth')
const TraceTransactionController = require('../controllers/TraceTransaction_Controller')

const router = express.Router()

router.post('/items', auth, async (req, res) => {
  const result = await BuyerController.createTransaction(
    req.user.id,
    req.body.brand,
    req.body.productCode,
    req.body.color,
    req.body.size,
  )
  return res.status(result.status).send(result)
})

router.patch('/address', auth, async (req, res) => {
  // 현재 로그인한 사용자의 ID를 이용하여 최신 트랜잭션 문서의 _id를 찾는 로직 구현
  const transactionId = await TraceTransactionController.getTransactionProgress(
    req.user.id,
  )
  // 찾은 _id와 업데이트할 정보들을 updateTransaction 함수에 전달
  const result = await BuyerController.updateTransaction(
    transactionId._id,
    req.body.recipientName,
    req.body.recipientPhoneNumber,
    req.body.recipientAddress,
    req.body.depositorName,
  )
  return res.status(result.status).send(result)
})

module.exports = router
