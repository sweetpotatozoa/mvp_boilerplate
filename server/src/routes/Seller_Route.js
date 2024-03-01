const express = require('express')
const SellerController = require('../controllers/Seller_Controller')
const auth = require('../middleware/auth')

const router = express.Router()

router.get('/codecheck', auth, async (req, res) => {
  const result = await SellerController.compareUniqueCode(req.query.uniqueCode)
  return res.status(result.status).send(result)
})

router.put('/updateSellerId', auth, async (req, res) => {
  const result = await SellerController.updateSellerId(req.user.id, req.body.id)
  return res.status(result.status).send(result)
})
router.get('/items', auth, async (req, res) => {
  const result = await SellerController.getItemInfo(req.user.id)
  return res.status(result.status).send(result)
})

router.put('/updateSellerInfo', auth, async (req, res) => {
  const result = await SellerController.updateSellerInfo(
    req.user.id,
    req.body.sellerName,
    req.body.sellerPhoneNumber,
    req.body.returnAddress,
    req.body.accountNumber,
    req.body.accountHolderName,
  )
  return res.status(result.status).send(result)
})
module.exports = router
