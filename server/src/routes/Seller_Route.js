const express = require('express')
const SellerController = require('../controllers/Seller_Controller')
const auth = require('../middleware/auth')

const router = express.Router()

router.get('/codecheck', auth, async (req, res) => {
  const result = await SellerController.compareUniqueCode(req.query.uniqueCode)
  return res.status(result.status).send(result)
})

// router.put('/updateinfo', auth, async (req, res) => {

//   const result = await SellerController.updateSellerInfo(
//     transactionId._id,
//     req.body.recipientName,
//     req.body.recipientPhoneNumber,
//     req.body.recipientAddress,
//     req.body.depositorName,
//   )
//   return res.status(result.status).send(result)
// })

module.exports = router
