const express = require('express')
const BuyerController = require('../controllers/Buyer_Controller')
const auth = require('../middleware/auth')

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
module.exports = router
