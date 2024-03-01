const express = require('express')
const SellerController = require('../controllers/Seller_Controller')
const auth = require('../middleware/auth')

const router = express.Router()

router.get('/codecheck', auth, async (req, res) => {
  const result = await SellerController.compareUniqueCode(req.query.uniqueCode)
  return res.status(result.status).send(result)
})

router.get('/items', auth, async (req, res) => {
  const result = await SellerController.getItemInfo(req.query.userId)
  return res.status(result.status).send(result)
})

module.exports = router
