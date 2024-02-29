const express = require('express')
const TraceTransactionController = require('../controllers/TraceTransaction_Controller')
const auth = require('../middleware/auth')

const router = express.Router()

router.get('/', auth, async (req, res) => {
  const result = await TraceTransactionController.getTransactionProgress(
    req.user.id,
  )
  return res.status(result.status).send(result)
})
module.exports = router
