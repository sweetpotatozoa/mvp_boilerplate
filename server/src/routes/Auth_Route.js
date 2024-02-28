const express = require('express')
const AuthController = require('../controllers/Auth_Controller')

const router = express.Router()

router.post('/register', async (req, res) => {
  const result = await AuthController.register(
    req.body.userName,
    req.body.password,
    req.body.phoneNumber,
    req.body.email,
  )
  return res.status(result.status).send(result)
})

router.post('/login', async (req, res) => {
  const result = await AuthController.login(
    req.body.userName,
    req.body.password,
  )
  return res.status(result.status).send(result)
})

module.exports = router
